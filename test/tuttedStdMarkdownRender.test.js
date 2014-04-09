
var tuttedStdMarkdownRender = require("../lib/tuttedStdMarkdownRender.js");
var tuttedStdTree = require("../lib/tuttedStdTree.js");
describe.only("@module tutteeStdMarkdownRender @is a module that renders a tutteStdTree object in Markdown", function() {
  describe("@function tuttedStdMarkdownRender.param", function() {
    var tree = tuttedStdTree.param("Name of Param");
    tree.setType("paramType");
    tree.addDesc("Desc 1");
    tree.addDesc("Desc 2");
    var level = 0;
    it("should generate a row with name type desc", function() {
      tuttedStdMarkdownRender.param(tree)[0].should.equal("| Name of Param | paramType | Desc 1 Desc 2 |");
    });
  });
  describe("@function tuttedStdMarkdownRender.return", function() {
    var tree = tuttedStdTree.return();
    tree.setType("returnType");
    tree.addDesc("Desc 1");
    tree.addDesc("Desc 2");
    var level = 1;
    var markdown = tuttedStdMarkdownRender.return(tree, level);
    it("should generate a row with a next level header with type in italics", function() {
      markdown[0].should.equal("h1. -returnType-");
    });
    it("should generate a row for each desc", function() {
      markdown[1].should.equal("Desc 1");
      markdown[2].should.equal("Desc 2");
    });
  });
  describe("@function tuttedStdMarkdownRender.function", function() {
    var tree = tuttedStdTree.function("NameOfFunction");
    var level = 0;
    tree.addDesc("This is function desc1");
    tree.addDesc("This is function desc2");
    var param1 = tuttedStdTree.param("param1");
    param1.setType("paramType");
    param1.addDesc("Desc 1");
    tree.addParam(param1);
    var rtn = tuttedStdTree.return();
    rtn.setType("returnType");
    rtn.addDesc("Desc 1");
    rtn.addDesc("Desc 2");
    tree.setReturn(rtn);
    var level = 1;
    var markdown = tuttedStdMarkdownRender.function(
      tree, 
      level, 
      {
        param:function(){ return ["stuff"]},
        return:function(){ return ["stuff from return", "stuff"]}
      }
    );
    it("should start with a h# with the title", function() {
      markdown[0].should.equal("h1. Function `NameOfFunction`");
    });
    it("should follow with the desc of the function", function() {
      markdown[1].should.equal("This is function desc1");
      markdown[2].should.equal("This is function desc2");
    });
    it("should return a table of the params as render by the @param renders of @type opbject, if there are params after a header for parameters", function() {
      markdown[3].should.equal("h2. Parameters");
      markdown[4].should.equal("| Name | Type | Desc |");
      markdown[5].should.equal("stuff");
    });
    it("should return a return a section based on the return render", function() {
      markdown[6].should.equal("stuff from return");
      markdown[7].should.equal("stuff");
    });
  });
})
