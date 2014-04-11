tutted
======

Tutted Uses Tagged Tests to Establish Documentation

First, write your tests with some richly tagged descriptions:

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

Then you can use tuttle to get richly formatted documetation:

----
### Function `tuttedStdTree.root()`
used to create the base of the Std Code Tree
#### Returns *TuttedStdTreeRoot*
----
