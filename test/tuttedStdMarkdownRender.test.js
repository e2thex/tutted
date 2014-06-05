
var tuttedStdMarkdownRender = require("../lib/tuttedStdMarkdownRender.js");
var tuttedStdTree = require("../lib/tuttedStdTree.js");
describe("@module tutteeStdMarkdownRender @is a module that renders a tutteStdTree object in Markdown", function() {
  describe("@function tuttedStdMarkdownRender", function() {
    var tree = tuttedStdTree();
    var moduleBranch1 = tuttedStdTree.function("module1");
    var functionBranch1 = tuttedStdTree.function("function1");
    var functionBranch2 = tuttedStdTree.function("function2");
    tree.addModule(moduleBranch1);
    tree.addFunction(functionBranch1);
    tree.addFunction(functionBranch2);
    var markdown = tuttedStdMarkdownRender(tree, {
      "function": function(tree, level) { return [level, tree.getName()];},
      "module": function(tree, level) { return [level, tree.getName()];}
    });
    it("should generate a rows for each module in the true using the function render method and a base level of 1", function() {
      markdown[0].should.equal(1);
      markdown[1].should.equal("module1");
    });
    it("should generate a rows for each function in the true using the function render method and a base level of 1", function() {
      markdown[2].should.equal(1);
      markdown[3].should.equal("function1");
      markdown[4].should.equal(1);
      markdown[5].should.equal("function2");
    });
  });
  describe("@function tuttedStdMarkdownRender.module", function() {
    var tree = tuttedStdTree.module("NameOfModule");
    tree.addDesc("This is module desc1");
    tree.addDesc("This is module desc2");
    var fuc1 = tuttedStdTree.function("fun1");
    tree.addFunction(fuc1);
    var level = 1;
    var markdown = tuttedStdMarkdownRender.module(
      tree, 
      level, 
      {
        function:function(tree, level){ return ["function stuff", level]},
      }
    );
    it("should start with a # with the title", function() {
      markdown[0].should.equal("# Module `NameOfModule`");
    });
    it("should follow with the desc of the function", function() {
      markdown[1].should.equal("This is module desc1");
      markdown[2].should.equal("This is module desc2");
    });
    it("should return a heading for functions and the output of the function with level incremented by 2", function() {
      markdown[3].should.equal("## Functions");
      markdown[4].should.equal("function stuff");
      markdown[5].should.equal(3);
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
      markdown[0].should.equal("# Function `NameOfFunction`");
    });
    it("should follow with the desc of the function", function() {
      markdown[1].should.equal("This is function desc1");
      markdown[2].should.equal("This is function desc2");
    });
    it("should return a table of the params as render by the @param renders of @type opbject, if there are params after a header for parameters", function() {
      markdown[3].should.equal("## Parameters");
      markdown[4].should.equal("| Name | Type | Desc |");
      markdown[5].should.equal("|:---- |:---- |:---- |");
      markdown[6].should.equal("stuff");
    });
    it("should return a return a section based on the return render", function() {
      markdown[7].should.equal("stuff from return");
      markdown[8].should.equal("stuff");
    });
    var tree1 = tree;
    tree1.getParams = function() {return []};
    var markdown1 = tuttedStdMarkdownRender.function(
      tree1, 
      level, 
      {
        param:function(){ return ["stuff"]},
        return:function(){ return ["stuff from return", "stuff"]}
      }
    );
    it("should not print the Param parts if there are no paramaters rendered", function() {
      markdown1[3].should.equal("stuff from return");
      markdown1[4].should.equal("stuff");
    });
  });
  describe("@function tuttedStdMarkdownRender.param", function() {
    var tree = tuttedStdTree.param("Name of Param");
    tree.setType("paramType");
    tree.addDesc("Desc 1");
    tree.addDesc("Desc 2");
    var level = 0;
    it("should generate a row with type and desc", function() {
      tuttedStdMarkdownRender.param(tree)[0].should.equal("| Name of Param | paramType | Desc 1 Desc 2 |");
    });
  });
  describe("@function tuttedStdMarkdownRender.throw", function() {
    var tree = tuttedStdTree.throw();
    tree.setType("throwType");
    tree.addDesc("Desc 1");
    tree.addDesc("Desc 2");
    var level = 0;
    it("should generate a row with name type desc", function() {
      tuttedStdMarkdownRender.throw(tree)[0].should.equal("| throwType | Desc 1 Desc 2 |");
    });
  });
  describe("@function tuttedStdMarkdownRender.return", function() {
    var tree = tuttedStdTree.return();
    tree.setType("returnType");
    tree.addDesc("Desc 1");
    tree.addDesc("Desc 2");
    var level = 2;
    var markdown = tuttedStdMarkdownRender.return(tree, level);
    it("should generate a row with a next level header with type in italics", function() {
      markdown[0].should.equal("## Returns *returnType*");
    });
    it("should generate a row for each desc", function() {
      markdown[1].should.equal("Desc 1");
      markdown[2].should.equal("Desc 2");
    });
  });
})
