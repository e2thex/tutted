var tutted = require("../lib/tuttedStd.js");
describe("@module tuttedStd @is a module with function for parsing and render test as api documentation", function() {
  describe("@function explodeTests @is a fuction to take test and brake them up on tags", function() {
    it("has a @param tests of @type Array which @is a list of test lines", function() {
      (function() {
        tutted.explodeTests([], [])
      }).should.not.throw();
    });
    it("has a @param tags of @type Array which @is a list of the tags in the vocabulary", function() {
      (function() {
        tutted.explodeTests([], [])
      }).should.not.throw();
    });
    describe("@returns a @type array which @is an array of objects with the tag and text as properties", function() {
      var tests = [
        "@module catModule @is the very best",
        "this is just a test",
        "this @is"
      ];
      var tags = ['@module', '@is'];
      var lines = tutted.explodeTests(tests, tags);
      it("if a line starts with a tag and also has a tag it should create two lines that have the correct tag names and text",function() {
        lines[0].tag.should.equal("@module");
        lines[0].first.should.equal("catModule");
        lines[0].text.should.equal("catModule");
        lines[0].line.should.equal("@module catModule @is the very best");
        lines[1].tag.should.equal("@is");
        lines[1].first.should.equal("the");
        lines[1].text.should.equal("the very best");
        lines[1].line.should.equal("@module catModule @is the very best");
      });
      it("if a test as no tag then it should create a line with tag as no tag and text as the whole line the first as ''", function() {
        lines[2].tag.should.equal("noTag");
        lines[2].text.should.equal("this is just a test");
        lines[2].first.should.equal("");
        lines[2].line.should.equal("this is just a test");
      });
      it("if a test ends in a tag it should create a line with the tag and text of ''", function() {
        lines[3].tag.should.equal("@is");
        lines[3].text.should.equal("");
        lines[3].first.should.equal("");
        lines[3].line.should.equal("this @is");
      });
    });
  });
  describe("@function tutted.parses @is a fuction used to parse lines from explodeTests and a parser to make a tree", function() {
    it("should have a @param parser of @type tuttedParser which @is the parser to be used");
    it("should have a @param lines of @type array which @is an array of object returned by tutted.explodeTests");
    describe("@returns a @type Object which @is an that is a tree of the parsed data", function() {
    });
  });
  /*
  describe("@function tutted.parser.validate @validates tuttedParser which @is a function to ensure an object is a parser", function() {
    it("should be a function", function() {
      tutted.parser.validate.should.be.a.function;
    });
    it("should @throw 'Invalid tuttedParser: missing closedBy' if @method closedBy is missing ");
    it("should @throw 'Invalid tuttedParser: missing accepts' if @method accepts is missing ");
    it("should @throw 'Invalid tuttedParser: missing execute' if @method execute is missing ");
  });
  */

  describe("@function tutted.stdParse @is a function that used the std parser to parse a set of tests.", function() {
  var tests = [
    //'@module catModule @is a module',
    '@function cat @is a function that constructs a cat',
    'it takes @param name of @type String',
    //'@returns @type Cat',
    //'@function cat.validate @validates Cat',
    'it takes @param cat @is a cat to be validate',
    //'it @throws "missing method" if @method name is missing'
  ];
    
  });

});

