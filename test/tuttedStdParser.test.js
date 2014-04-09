var tuttedStdParser = require("../lib/tuttedStdParser.js");
var tuttedStdTree = require("../lib/tuttedStdTree.js");
var core = require("../tutted.js");
var BranchMethodMissingThrows = function(branch, method, validator) {
  (function() {
  branch[method] = undefined;
  validator(branch);
  }).should.throw("Invalid tuttedStdTreeBranch "+ branch.kind +": missing "+method+" Method")
}

describe("@module tuttedStdParser @is a module that helps to build a standard tutted tree form exploded lines", function() {
  describe("@function tuttedStdParser @constructs TuttedStdParserFunction , it @is a function that creates a parser for stdRoot branches", function() {
    it("should be a function", function() {
      tuttedStdParser.should.be.a.function;
    });
    var parser = tuttedStdParser();
    it("its @method closedBy should return false", function() {
      parser.closedBy("@function").should.be.false;
      parser.closedBy("@is").should.be.false;
      parser.closedBy("@module").should.be.false;
    });
    it("its @method accepts should return true for '@function'", function() {
      parser.accepts("@function").should.be.true;
    });
    describe("describe for the line '@function functionname' @method execute", function() {
      it("should return new function parser", function() {
          parser.execute({tag:"@function", first:"name"}).getTree().getName().should.equal('name');
      });
      it("Should add a function to the branch", function() {
        parser.getTree().getChildren()[0].getName().should.equal("name");
      });
    });
  });
  describe("@function tuttedStdParser.function @constructs TuttedStdParserFunction , it @is a function that creates a parser for stdFunction branches", function() {
    it("should be a function", function() {
      tuttedStdParser.function.should.be.a.function;
    });
    it("should accept @param branch of @type TuttedStdTreeFunction which @is the branch root it will use", function() {
      var branch = tuttedStdTree.function("functioname");
      (function() {
        tuttedStdParser.function(branch);
      }).should.not.throw();
    });
      var branch = tuttedStdTree.function("functioname");
    var parser = tuttedStdParser.function(branch);
    it("its @method closedBy should return true for '@function'", function() {
      parser.closedBy("@function").should.be.true;
    });
    it("its @method accepts should return true for '@is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '@is a cool thing' @method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@is", text:"a cool thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getDesc()[0].should.equal("a cool thing");
      });
    });
  });
  describe("@fuction tuttedStdParser.param @constructs TuttedStdParserParam , it @is a function that creates a parser for stdParam branches", function() {
    it("should be a function", function() {
      tuttedStdParser.param.should.be.a.function;
    });
    it("should accept @param branch of @type TuttedStdTreeParam which @is the branch root it will use", function() {
      var branch = tuttedStdTree.param("paramname");
      (function() {
        tuttedStdParser.param(branch);
      }).should.not.throw();
    });
      var branch = tuttedStdTree.param("paramname");
    var parser = tuttedStdParser.param(branch);
    it("its @method closedBy should return true for '@function'", function() {
      parser.closedBy("@function").should.be.true;
    });
    it("its @method closedBy should return true for '@param'", function() {
      parser.closedBy("@param").should.be.true;
    });
    it("its @method accepts should return true for '@is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '@is a cool thing' @method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@is", text:"a cool thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getDesc()[0].should.equal("a cool thing");
      });
    });
    it("its @method accepts should return true for '@type'", function() {
      parser.accepts("@type").should.be.true;
    });
    describe("describe for the line '@type Thing' @method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@type", first:"Thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getType().should.equal("Thing");
      });
    });
  });

});
