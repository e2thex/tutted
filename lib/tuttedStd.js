tuttedStd = {};
tuttedStd.explodeTests = function(tests, tags) {
  var lines = [];
  var tagList = tags.join("|");
  var re = new RegExp("("+ 
    tagList +
    ")(.*?)(?=" + 
    tagList + 
    "|$)", "g");
  var partsRe = new RegExp("(" + tagList + ")(.*)$");
  tests.forEach(function PaserLinesTestForEach(test) {
    var parts = test.match(re);
    if(parts) {
      parts.forEach(function ParserLinesTestForEachPartsForEach(part) {
        var p = partsRe.exec(part);
        lines.push({
          tag:p[1].trim(), 
          text:p[2].trim(),
          line:test,
          first:p[2].trim().match(/(.*\b)/) ? p[2].trim().match(/(.{1,}?( |$))/)[1].trim() : ''
        });
      });
    }
    else {
      lines.push({tag:"noTag", text:test, first: '', line:test});
    }
  });
  return lines;
};
tuttedStd.stackParse = function tuttedStdStackParse(baseParser, lines) {
  var stack = [baseParser]
  var currentParser = false;
  lines.forEach(function(line) {
    currentParser = false;
    while(stack[0].closedBy(line.tag)) { //close parser
      --stack.length;
    }
    currentParser = stack.reduce(function(rtn, p) {return p.accepts(line.tag) ? p : rtn}, false);
    if(currentParser) {
      var nextParser = currentParser.execute(line);
      if(nextParser) {
        stack.push(nextParser);
      }
    }
  });
  return baseParser.getTree();
}
tuttedStd.process = function tutteeProcess(tests, parser, render) {
  var listOfTags = parser.listOfTags();
  return render(tuttedStd.stackParse(parser, tuttedStd.explodeTests(tests, listOfTags)));
};
module.exports = tuttedStd;
