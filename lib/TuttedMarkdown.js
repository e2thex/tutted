
var tutted = require("../tutted.js");
var parser = require("./tuttedStdParser.js");
var render = require("./tuttedStdMarkdownRender.js");
exports = module.exports = TuttedMarkdown;
function TuttedMarkdown(runner) {
  var tests = [];
  var addLine = function(line) {
    tests.push(line)
  }
  runner.on('suite', function(suite){
    addLine(suite.title);
  });
  runner.on('suite end', function(suite) {
  });
  runner.on('start', function(suite) {
  });
  runner.on('pending', function(test){
    addLine(test.title);
  });
  runner.on('pass', function(test){
    addLine(test.title);
  });
  runner.on('fail', function(test, err){
    addLine(test.title);
  });
  var clean2 =function(p, obj) {
      if(p === 'parent') {
        delete obj[p];
      }
      else if (typeof obj[p] === 'object') {
        clean(obj[p]);
      }
    
  }
  var clean = function(obj) {
    for(p in obj) {
      clean2(p, obj);
      
    }
  }
  runner.on('end', function(){
    //console.log("done");
    var lines = tutted.explodeTests(tests, ["@function", "@is", "@param", "@return", "@type"]);
    //console.log("lines:", lines);
    var tree = tutted.parses(parser(), lines);
    //console.log("tree:", tree);
    var content = render(tree);

    //console.log(content.join("\n"));
    console.log(tutted.process(tests, parser, ["@function", "@is", "@param", "@return", "@type", "@module"], render).join("\n"));
    process.exit(failures);
  });
}
