var tuttedStdTree = require("../lib/tuttedStdTree.js");
describe("@module tuttedStdTree @constructs TuttedStdTreeRoot @is a module that helps to build a standard tutted tree", function() {
  describe("The @function .root() @is a method to generate a root branch", function() {
    describe("should @return a @type TuttedStdTreeRoot", function() {
     var branch = tuttedStdTree.root();
      it("return object should have @property kind of @type string which defaults to 'root' and is @immutable", function() {
       branch.should.have.property('kind', 'root');
      });
      it("return object should have @property children of @type Array which defaults to []", function() {
       branch.should.have.property('children');
      });
    });
  });
  describe("The @function .function() @is a method to generate a function branch", function() {
    describe("should @return a @type TuttedStdTreeFunction",function() {
     var branch = tuttedStdTree.function();
    it("return object should have @property kind of @type string which defaults to 'function' and is @immutable", function() {
       branch.should.have.property('kind', 'function');
      });
      it("return object should have @property parameters of @type Array which defaults to []", function() {
        branch.should.have.property('parameters');
      });
      it("return object should have @property return of @type tuttedStdReturn which defaults to null", function() {
        branch.should.have.property('return', null);
      });
      it("return object should have @property name of @type string which defaults to ''", function() {
        branch.should.have.property('name', '');
      });
      it("return object should have @property is of @type Array which defaults to []", function() {
        branch.should.have.property('is');
      });
    });
  });
  describe("The @function .module() @is a method to generate a method branch", function() {
    describe("should @return a @type TuttedStdTreeModule", function() {
     var branch = tuttedStdTree.module();
      it("return object should have @property kind of @type string which defaults to 'module' and is @immutable", function() {
         branch.should.have.property('kind', 'module');
      });
      it("return object should have @property name of @type string which defaults to ''", function() {
        branch.should.have.property('name', '');
      });
      it("return object should have @property is of @type Array which defaults to []", function() {
        branch.should.have.property('is');
      });
      it("return object should have @property functions of @type Array which defaults to []", function() {
        branch.should.have.property('functions');
      });
      it("return object should have @property interfaces of @type Array which defaults to []", function() {
        branch.should.have.property('interfaces');
      });
    });
  });
  describe("The @function .param() @is a method to generate a param branch used for parameters and properties", function() {
     var branch = tuttedStdTree.param();
    describe("should @return a @type TuttedStdTreeParam", function() {
      it("return object should have @property name of @type string which defaults to ''", function() {
        branch.should.have.property('name', '');
      });
      it("return object should have @property kind of @type string which defaults to 'param' and is @immutable", function() {
        branch.should.have.property('kind', 'param');
      });
      it("return object should have @property type of @type string which defaults to ''", function() {
        branch.should.have.property('type', '');
      });
      it("return object should have @property is of @type Array which defaults to []", function() {
        branch.should.have.property('is');
      });
    });
  });
  describe("The @function .return() @is a method to generate a return branch", function() {
     var branch = tuttedStdTree.return();
    describe("should @return a @type TuttedStdTreeRetrun", function() {
      it("return object should have @property kind of @type string which defaults to 'param' and is @immutable", function() {
        branch.should.have.property('kind', 'return');
      });
      it("return object should have @property type of @type string which defaults to ''", function() {
        branch.should.have.property('type', '');
      });
      it("return object should have @property is of @type Array which defaults to []", function() {
        branch.should.have.property('is');
      });
    });
  });
  describe("The @function .property() @is a method to generate a property branch used for propertyeters and properties", function() {
     var branch = tuttedStdTree.property();
    describe("should @return a @type TuttedStdTreeParam", function() {
      it("return object should have @property name of @type string which defaults to ''", function() {
        branch.should.have.property('name', '');
      });
      it("return object should have @property kind of @type string which defaults to 'property' and is @immutable", function() {
        branch.should.have.property('kind', 'property');
      });
      it("return object should have @property type of @type string which defaults to ''", function() {
        branch.should.have.property('type', '');
      });
      it("return object should have @property is of @type Array which defaults to []", function() {
        branch.should.have.property('is');
      });
    });
  });

});
