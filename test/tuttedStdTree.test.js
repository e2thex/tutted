var tuttedStd = require("../lib/tuttedStdTree.js");
var BranchMethodMissingThrows = function(branch, method, validator) {
  (function() {
  branch[method] = undefined;
  validator(branch);
  }).should.throw("Invalid tuttedStdTreeBranch "+ branch.kind +": missing "+method+" Method")
}

describe("@module tuttedStdTree @is a module that helps to build a standard tutted tree", function() {
  describe("The @function tuttedStdTree.root() @constructs TuttedStdTreeRoot it @is used to create the base of the Std Code Tree", function() {
    describe("should @return a @type TuttedStdTreeRoot", function() {
     var branch = tuttedStd.root();
      it("return object should have @property kind of type string which defaults to 'root' and is @immutable", function() {
       branch.should.have.property('kind', 'root');
       branch.kind = "bob";
       branch.kind.should.equal("root");
      });
    });
  });
  describe("The @function tuttedStdTree.root.validate() @validates TuttedStdTreeRoot ", function() {
    it("should not throw an error if a correct root", function() {
      (function() {
        var root = tuttedStd.root();
        tuttedStd.root.validate(root);
      }).should.not.throw();
    });
    it("should @throw an error if @property kind does not equal 'root'",function() {
      (function() {
        var root = tuttedStd.root();
        root.__defineGetter__("kind", function() { return 'bob'});
          tuttedStd.root.validate(root);
      }).should.throw("Invalid tuttedStdTreeBranch root: kind is bob shoud be root");
    });
    it("should @throw an error if property kind is not @immutable", function() {
      (function() {
        var root = tuttedStd.root();
        var name = 'root';
        root.__defineGetter__("kind", function() { return name});
        root.__defineSetter__("kind", function(n) { name = n;});
        tuttedStd.root.validate(root);
      }).should.throw("Invalid tuttedStdTreeBranch root: kind is muttable");
    });
    describe("if @method getFunctions", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.root(), "getFunctions", tuttedStd.root.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addFunction", function() {
      it("does not exists the @func should @throw", function() {
      BranchMethodMissingThrows(tuttedStd.root(), "addFunction", tuttedStd.root.validate);
        
      });
      it("does not accept @param child of @type TuttedStdTreeFunction|TuttedStdTreeModule @func should @throw");
    });
    describe("if @method getModules", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.root(), "getModules", tuttedStd.root.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addModule", function() {
      it("does not exists the @func should @throw", function() {
      BranchMethodMissingThrows(tuttedStd.root(), "addModule", tuttedStd.root.validate);
        
      });
      it("does not accept @param child of @type TuttedStdTreeFunction|TuttedStdTreeModule @func should @throw");
    });
    describe("if @method getChildren", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.root(), "getChildren", tuttedStd.root.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addChild", function() {
      it("does not exists the @func should @throw", function() {
      BranchMethodMissingThrows(tuttedStd.root(), "addChild", tuttedStd.root.validate);
        
      });
      it("does not accept @param child of @type TuttedStdTreeFunction|TuttedStdTreeModule @func should @throw");
    });
  });
  describe("The @function .function() @constructs TuttedStdTreeFunction", function() {
    describe("should @return a @type TuttedStdTreeFunction",function() {
     (function() {
       tuttedStd.function.validate(tuttedStd.function());
     }).should.not.throw()
    });
    it("the return addParam should be return by get Param",function() {
      var branch = tuttedStd.function("this is the name");
      branch.addParam("this is a param");
      branch.getParams()[0].should.equal("this is a param");
    });
    it("the return addDesc should be return by getDesc",function() {
      var branch = tuttedStd.function("this is the name");
      branch.addDesc("this is a desc");
      branch.getDesc()[0].should.equal("this is a desc");
    });
    it("the return setReturn should be return by getReturn",function() {
      var branch = tuttedStd.function("this is the name");
      branch.setReturn("this is a return");
      branch.getReturn().should.equal("this is a return");
    });
    describe("should accept @param name of @type string which @is the name of the function and should be return by getName",function() {
     var branch = tuttedStd.function("this is the name");
     branch.getName().should.equal("this is the name");
    });
  });
  describe("The @function .function.validate() @validates TuttedStdTreeFunction", function() {
    it("should not throw an error if a correct function is passed", function() {
      (function() {
        var branch = tuttedStd.function();
        tuttedStd.function.validate(branch);
      }).should.not.throw();
    });
    it("should @throw an error if @property kind does not equal 'function'",function() {
      (function() {
        var branch = tuttedStd.function();
        branch.__defineGetter__("kind", function() { return 'bob'});
        tuttedStd.function.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch function: kind is bob shoud be function");
    });
    it("should @throw an error if property kind is not @immutable", function() {
      (function() {
        var branch = tuttedStd.function();
        var name = 'function';
        branch.__defineGetter__("kind", function() { return name});
        branch.__defineSetter__("kind", function(n) { name = n;});
        tuttedStd.function.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch function: kind is muttable");
    });
    describe("if @method getParams", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "getParams", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addParam", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "addParam", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
      it("does not only accept @param param of @type TuttedStdTreeParam @func should @throw");
    });
    describe("if @method getDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "getDesc", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "addDesc", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
      it("does not only accept @param param of @type String @func should @throw");
    });
    describe("if @method getReturn", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "getReturn", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method setReturn", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "setReturn", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
      it("does not only accept @param param of @type String @func should @throw");
    });
    describe("if @method getName", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.function(), "getName", tuttedStd.function.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
  });
  describe("The @function .module() @is a method to generate a method branch", function() {
    describe("should @return a @type TuttedStdTreeModule", function() {
     var branch = tuttedStd.module();
      it("return object should have @property kind of @type string which is @getOnly and defaults to 'module'", function() {
         branch.should.have.property('kind', 'module');
         branch.kind = "bob";
         branch.kind.should.equal("module");
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
  describe("The @function .param() @constructs TuttedStdTreeFunction", function() {
    describe("should @return a @type TuttedStdTreeParam",function() {
     (function() {
       tuttedStd.param.validate(tuttedStd.param());
     }).should.not.throw()
    });
    it("the return addDesc should be return by getDesc",function() {
      var branch = tuttedStd.param("this is the name");
      branch.addDesc("this is a desc");
      branch.getDesc()[0].should.equal("this is a desc");
    });
    it("the return setType should be return by getType",function() {
      var branch = tuttedStd.param("this is the name");
      branch.setType("this is a return");
      branch.getType().should.equal("this is a return");
    });
    describe("should accept @param name of @type string which @is the name of the function and should be return by getName",function() {
     var branch = tuttedStd.param("this is the name");
     branch.getName().should.equal("this is the name");
    });
  });
  describe("The @function .param.validate() @validates TuttedStdTreeFunction", function() {
    it("should not throw an error if a correct param is passed", function() {
      (function() {
        var branch = tuttedStd.param();
        tuttedStd.param.validate(branch);
      }).should.not.throw();
    });
    it("should @throw an error if @property kind does not equal 'param'",function() {
      (function() {
        var branch = tuttedStd.param();
        branch.__defineGetter__("kind", function() { return 'bob'});
        tuttedStd.param.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch param: kind is bob shoud be param");
    });
    it("should @throw an error if property kind is not @immutable", function() {
      (function() {
        var branch = tuttedStd.param();
        var name = 'param';
        branch.__defineGetter__("kind", function() { return name});
        branch.__defineSetter__("kind", function(n) { name = n;});
        tuttedStd.param.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch param: kind is muttable");
    });
    describe("if @method getDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.param(), "getDesc", tuttedStd.param.validate);
      });
      it("does not @return @type Array @func should @throw");
    });
    describe("if @method addDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.param(), "addDesc", tuttedStd.param.validate);
      });
      it("does not @return @type Array @func should @throw");
      it("does not only accept @param param of @type String @func should @throw");
    });
    describe("if @method getType", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.param(), "getType", tuttedStd.param.validate);
      });
      it("does not @return @type String @func should @throw");
    });
    describe("if @method settype", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.param(), "setType", tuttedStd.param.validate);
      });
      it("does not only accept @param param of @type String @func should @throw");
    });
    describe("if @method getName", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.param(), "getName", tuttedStd.param.validate);
      });
    });
  });
  describe("The @function .retrun() @constructs TuttedStdTreeReturn", function() {
    describe("should @return a @type TuttedStdTreeReturn",function() {
     (function() {
       tuttedStd.return.validate(tuttedStd.return());
     }).should.not.throw()
    });
    it("the return addDesc should be return by getDesc",function() {
      var branch = tuttedStd.return("this is the name");
      branch.addDesc("this is a desc");
      branch.getDesc()[0].should.equal("this is a desc");
    });
    it("the return setType should be return by getType",function() {
      var branch = tuttedStd.return("this is the name");
      branch.setType("this is a return");
      branch.getType().should.equal("this is a return");
    });
  });
  describe("The @function .return.validate() @validates TuttedStdTreeFunction", function() {
    it("should not throw an error if a correct param is passed", function() {
      (function() {
        var branch = tuttedStd.return();
        tuttedStd.return.validate(branch);
      }).should.not.throw();
    });
    it("should @throw an error if @property kind does not equal 'return'",function() {
      (function() {
        var branch = tuttedStd.return();
        branch.__defineGetter__("kind", function() { return 'bob'});
        tuttedStd.return.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch return: kind is bob shoud be return");
    });
    it("should @throw an error if property kind is not @immutable", function() {
      (function() {
        var branch = tuttedStd.return();
        var name = 'return';
        branch.__defineGetter__("kind", function() { return name});
        branch.__defineSetter__("kind", function(n) { name = n;});
        tuttedStd.return.validate(branch);
      }).should.throw("Invalid tuttedStdTreeBranch return: kind is muttable");
    });
    describe("if @method getDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.return(), "getDesc", tuttedStd.return.validate);
      });
    });
    describe("if @method addDesc", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.return(), "addDesc", tuttedStd.return.validate);
      });
    });
    describe("if @method getType", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.return(), "getType", tuttedStd.return.validate);
      });
      it("does not @return @type String @func should @throw");
    });
    describe("if @method settype", function() {
      it("does not exists the @func should @throw", function() {
        BranchMethodMissingThrows(tuttedStd.return(), "setType", tuttedStd.return.validate);
      });
    });
  });
  describe.skip("The @function .property() @is a method to generate a property branch used for propertyeters and properties", function() {
     var branch = tuttedStd.property();
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
