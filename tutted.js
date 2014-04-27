/*
'@module catModule @is a module'
'@function cat @is a function that constructs a cat'
'it takes @param name of @type String'
'@returns @type Cat'
'@function cat.validate @validates Cat'
'it takes @param cat @is a cat to be validate'
'it @throws "missing method" if @method name is missing'
'@func @throws "missing name if @return is not @type String'

root
  module catModule
    is ...
    function cat
      is ...
      param name
        type string
      return 
        type Cat
    function cat.validate
      param cat
        is ....
      throws
        "missing method"
    interface Cat
      method name
root
module
function
Interface
method
*/
