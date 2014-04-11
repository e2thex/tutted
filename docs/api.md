# Module `tuttedStdTree`
a module that helps to build a standard tutted tree
## Functions
### Function `tuttedStdTree.root()`
used to create the base of the Std Code Tree
#### Returns *TuttedStdTreeRoot*
return object should have @property kind of type string which defaults to 'root' and is @immutable
### Function `tuttedStdTree.root.validate()`
used to validate if something is a Tutted StdTreeRoot
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| obj | Object | The object to validate |
#### Returns *anything*
not throw an error if a correct root is passed
### Function `tuttedStdTree.function()`
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the function and should be return by getName |
#### Returns *TuttedStdTreeFunction*
the return addParam should be return by get Param
the return addDesc should be return by getDesc
the return setReturn should be return by getReturn
### Function `.function.validate()`
### Function `tuttedStdTree.module()`
a method to generate a method branch
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the module |
#### Returns *TuttedStdTreeModule*
return object should have property kind of type string which is getOnly and defaults to 'module'
the return addDesc should be return by getDesc
### Function `tuttedStdTree.param()`
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the param and should be return by getName |
#### Returns *TuttedStdTreeParam*
the return addDesc should be return by getDesc
the return setType should be return by getType
### Function `.param.validate()`
### Function `tuttedStdTree.retrun()`
### Function `.return.validate()`
### Function `tuttedStdTree.property()`
a method to generate a property branch used for propertyeters and properties
#### Returns *TuttedStdTreeParam*
# Module `tuttedStdTree`
a module that helps to build a standard tutted tree
## Functions
### Function `tuttedStdTree.root()`
used to create the base of the Std Code Tree
#### Returns *TuttedStdTreeRoot*
return object should have @property kind of type string which defaults to 'root' and is @immutable
### Function `tuttedStdTree.root.validate()`
used to validate if something is a Tutted StdTreeRoot
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| obj | Object | The object to validate |
#### Returns *anything*
not throw an error if a correct root is passed
### Function `tuttedStdTree.function()`
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the function and should be return by getName |
#### Returns *TuttedStdTreeFunction*
the return addParam should be return by get Param
the return addDesc should be return by getDesc
the return setReturn should be return by getReturn
### Function `.function.validate()`
### Function `tuttedStdTree.module()`
a method to generate a method branch
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the module |
#### Returns *TuttedStdTreeModule*
return object should have property kind of type string which is getOnly and defaults to 'module'
the return addDesc should be return by getDesc
### Function `tuttedStdTree.param()`
#### Parameters
| Name | Type | Desc |
|:---- |:---- |:---- |
| name | string | the name of the param and should be return by getName |
#### Returns *TuttedStdTreeParam*
the return addDesc should be return by getDesc
the return setType should be return by getType
### Function `.param.validate()`
### Function `tuttedStdTree.retrun()`
### Function `.return.validate()`
### Function `tuttedStdTree.property()`
a method to generate a property branch used for propertyeters and properties
#### Returns *TuttedStdTreeParam*
