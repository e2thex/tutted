var tuttedStdParser = require("./lib/tuttedStdParser.js");
var tutted = function() {
  var m = {};
  m.explodeTests = function(tests, tags) {
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

  m.parses = function(parser, lines) {
    var stack = [parser]
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
    return parser.getTree();
  }
  m.parser = {};
  m.parser.validate = function tuttedParserValidate() {
  }
  m.stdParse = function tuttedStdParse(tests) {
    var tags = ["@function", "@param", "@is", "@type"];
    return m.parses(tuttedStdParser(), m.explodeTests(tests, tags));
  }
  m.process = function tutteeProcess(tests, parser, tags, render) {
    return render(m.parses(parser(), m.explodeTests(tests, tags)));
  };
  return m;
};
/*
'@module catModule @is a module'
'@function cat @is a function that constructs a cat'
'it takes @param name of @type String'
'@returns @type Cat'
'@function cat.validate @validates Cat'
'it takes @param cat @is a cat to be validate'
'it @throws "missing method" if @method name is missing'
'@func @throws "missing name if @return is not @type String'

root
  module catModule
    is ...
    function cat
      is ...
      param name
        type string
      return 
        type Cat
    function cat.validate
      param cat
        is ....
      throws
        "missing method"
    interface Cat
      method name
root
module
function
Interface
method
*/
module.exports = tutted();
