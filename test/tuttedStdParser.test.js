var tuttedStdParser = require("../lib/tuttedStdParser.js");
var tuttedStdTree = require("../lib/tuttedStdTree.js");
var core = require("../tutted.js");
var BranchMethodMissingThrows = function(branch, method, validator) {
  (function() {
  branch[method] = undefined;
  validator(branch);
  }).should.throw("Invalid tuttedStdTreeBranch "+ branch.kind +": missing "+method+" Method")
}

describe("@module tuttedStdParser @is a module that helps to build a standard tutted tree from test that have been explode in to tagged lines", function() {
  describe("@function tuttedStdParser @constructs TuttedStdParser , it @is a function that creates a parser for stdRoot branches it is the parser function that is passed to tutted to parse a whole array of tagged lines", function() {
    it("should be a function", function() {
      tuttedStdParser.should.be.a.function;
    });
    var parser = tuttedStdParser();
    it("its method closedBy should return false", function() {
      parser.closedBy("@function").should.be.false;
      parser.closedBy("@is").should.be.false;
      parser.closedBy("@module").should.be.false;
    });
    it("its method accepts should return true for '{at}function'", function() {
      parser.accepts("@function").should.be.true;
    });
    describe("describe for the line '{at}function functionname' method execute", function() {
      it("should return new function parser", function() {
          parser.execute({tag:"@function", first:"name"}).getTree().getName().should.equal('name');
      });
      it("Should add a function to the branch", function() {
        parser.getTree().getFunctions()[0].getName().should.equal("name");
      });
    });
    it("its method accepts should return true for '{at}module'", function() {
      parser.accepts("@module").should.be.true;
    });
    describe("describe for the line '{at}module functionname' method execute", function() {
      it("should return new function parser", function() {
          parser.execute({tag:"@module", first:"name"}).getTree().getName().should.equal('name');
      });
      it("Should add a module to the branch", function() {
        parser.getTree().getModules()[0].getName().should.equal("name");
      });
    });
    it("method listOfTags should return all tags for this parser and childresn", function() {
      var parser = tuttedStdParser();
      var listOfTags = parser.listOfTags();
      listOfTags.indexOf("@module").should.not.equal(-1);
      listOfTags.indexOf("@function").should.not.equal(-1);
      listOfTags.indexOf("@param").should.not.equal(-1);
      listOfTags.indexOf("@return").should.not.equal(-1);
      listOfTags.indexOf("@is").should.not.equal(-1);
      listOfTags.indexOf("@type").should.not.equal(-1);
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
    it("its method closedBy should return true for '@function'", function() {
      parser.closedBy("@function").should.be.true;
    });
    it("its method accepts should return true for '@is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '{at}is a cool thing' method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@is", text:"a cool thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getDesc()[0].should.equal("a cool thing");
      });
    });
    it("its method accepts should return true for '{at}param'", function() {
      parser.accepts("@param").should.be.true;
    });
    describe("describe for the line '@{at}param Name iscool thing' method execute", function() {
      it("should return new parser for params", function() {
          parser.execute({tag:"@param", first:"Name"}).should.not.be.false;
      });
      it("Should add a param to the branch", function() {
        parser.getTree().getParams()[0].getName().should.equal("Name");
      });
    });
  });
  describe("@function tuttedStdParser.module @constructs TuttedStdParserFunction, it @is a function that creates a parser for stdModule branchs.", function() {
    it("should be a function", function() {
      tuttedStdParser.module.should.be.a.function;
    });
    it("should accept @param branch of @type TuttedStdTreeModule which @is the branch root it will use", function() {
      var branch = tuttedStdTree.module("functioname");
      (function() {
        tuttedStdParser.module(branch);
      }).should.not.throw();
    });
      var branch = tuttedStdTree.module("modulename");
    var parser = tuttedStdParser.module(branch);
    it("its method closedBy should return true for '{at}module'", function() {
      parser.closedBy("@module").should.be.true;
    });
    it("its method accepts should return true for '{at}function'", function() {
      parser.accepts("@function").should.be.true;
    });
    describe("describe for the line '{at}function functionName iscool thing' method execute", function() {
      it("should return new parser for function", function() {
          parser.execute({tag:"@function", first:"functionName"}).should.not.be.false;
      });
      it("Should add a param to the branch", function() {
        parser.getTree().getFunctions()[0].getName().should.equal("functionName");
      });
    });
    it("its method accepts should return true for '{at}is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '{at}is a cool thing' method execute", function() {
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
    it("its method closedBy should return true for '{at}function'", function() {
      parser.closedBy("@function").should.be.true;
    });
    it("its method closedBy should return true for '{at}param'", function() {
      parser.closedBy("@param").should.be.true;
    });
    it("its method accepts should return true for '{at}is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '{at}is a cool thing' method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@is", text:"a cool thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getDesc()[0].should.equal("a cool thing");
      });
    });
    it("its method accepts should return true for '{at}type'", function() {
      parser.accepts("@type").should.be.true;
    });
    describe("describe for the line '{at}type Thing' method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@type", first:"Thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getType().should.equal("Thing");
      });
    });
  });

  describe("@fuction tuttedStdParser.return @constructs TuttedStdParserReturn , it @is a function that creates a parser for stdReturn branches", function() {
    it("should be a function", function() {
      tuttedStdParser.return.should.be.a.function;
    });
    it("should accept @param branch of @type TuttedStdTreeReturn which @is the branch root it will be using", function() {
      var branch = tuttedStdTree.return();
      (function() {
        tuttedStdParser.return(branch);
      }).should.not.throw();
    });
    var branch = tuttedStdTree.return();
    var parser = tuttedStdParser.return(branch);
    it("its method closedBy should return true for '{at}function'", function() {
      parser.closedBy("@function").should.be.true;
    });
    it("its method closedBy should return true for '{at}param'", function() {
      parser.closedBy("@param").should.be.true;
    });
    it("its method accepts should return true for '{at}is'", function() {
      parser.accepts("@is").should.be.true;
    });
    describe("describe for the line '{at}is a cool thing' method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@is", text:"a cool thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getDesc()[0].should.equal("a cool thing");
      });
    });
    it("its method accepts should return true for '{at}type'", function() {
      parser.accepts("@type").should.be.true;
    });
    describe("describe for the line '{at}type Thing' method execute", function() {
      it("should return false as it does not generate a new parser", function() {
          parser.execute({tag:"@type", first:"Thing"}).should.be.false;
      });
      it("Should add a desc to the branch", function() {
        parser.getTree().getType().should.equal("Thing");
      });
    });
  });
});
