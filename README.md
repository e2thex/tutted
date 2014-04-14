tutted
======

Tutted Uses Tagged Tests to Establish Documentation.  
> I hate write documentation but I love writing test, Tutted lets me do the former by doing the later

First, write your tests with some richly tagged descriptions:

    describe("The @function tuttedStdTree.function() @constructs TuttedStdTreeFunction", function() {
      it("should accept @param name of @type string which @is the name of the function and should be return by getName",function() {
       var branch = tuttedStd.function("this is the name");
       branch.getName().should.equal("this is the name");
      });
      it("should @return a @type TuttedStdTreeFunction",function() {
       (function() {
         tuttedStd.function.validate(tuttedStd.function());
       }).should.not.throw()
      });
      it("@is the return addParam should be return by get Param",function() {
        var branch = tuttedStd.function("this is the name");
        branch.addParam("this is a param");
        branch.getParams()[0].should.equal("this is a param");
      });
      it("@is the return addDesc should be return by getDesc",function() {
        var branch = tuttedStd.function("this is the name");
        branch.addDesc("this is a desc");
        branch.getDesc()[0].should.equal("this is a desc");
      });
      it("@is the return setReturn should be return by getReturn",function() {
        var branch = tuttedStd.function("this is the name");
        branch.setReturn("this is a return");
        branch.getReturn().should.equal("this is a return");
      });
    });

Then you can use tutted to get richly formatted documetation:

----

### Function `tuttedStdTree.function()`
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the function and should be return by getName |
#### Returns *TuttedStdTreeFunction*
the return addParam should be return by get Param
the return addDesc should be return by getDesc
the return setReturn should be return by getReturn

----

To See more examples look at the test file [tuttedStdTree.test.js](./test/tuttedStdTree.test.js) and the [tuttedStdTree Docs](./docs/tuttedStdTree.md)
