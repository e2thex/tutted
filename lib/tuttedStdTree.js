var error = function(message) {
  return {message:message, error:"error"}
};
var tuttedStdTreeAddKind= function(branch, kind) {
  branch.__defineGetter__("kind", function() { return kind}); //add read only property
}
var tuttedStdTreeAddArrayAdd = function(property) {
  return function(value) {
    property.push(value);
  }
}
var tuttedStdTreeAddGet = function(property) {
  return function() {
    return property;
  }
}
var tuttedStdTreeAddSetFirst = function(property) {
  return function(value) {
    property[0] =  value;
  }
}
var tuttedStdTreeAddGetFirst = function(property) {
  return function() {
    return property[0];
  }
}
var tuttedStdTreeValidateKind = function(branch, kind) {
  if(branch.kind !== kind) {
    throw error("Invalid tuttedStdTreeBranch " + kind + ": kind is "+branch.kind+" shoud be "+ kind) ;
  }
  branch.kind = "THISSHOULDNOTBEHERE";
  if(branch.kind === "THISSHOULDNOTBEHERE") {
    branch.kind = kind;
    throw error("Invalid tuttedStdTreeBranch " + kind + ": kind is muttable");
  }
}
var tuttedStdTreeValidateMethod = function(branch, method) {
  if(typeof branch[method] !== 'function') {
    throw error("Invalid tuttedStdTreeBranch " + branch.kind + ": missing "+ method +" Method");
  }
}
var tuttedStdTree = function() {return tuttedStdTree.root() };
tuttedStdTree.root = function tuttedStdTreeRoot() {
  var data = {
    children: [],
    functions: [],
    modules: []
  };
  var branch = {};
  branch.getChildren = function tuttedStdTreeRootGetChildren() {
    return data.children;
  }
  branch.addChild = function tuttedStdTreeRootGetChildren(branch) {
    data.children.push(branch);
  }
  branch.getFunctions = tuttedStdTreeAddGet(data.functions);
  branch.addFunction = tuttedStdTreeAddArrayAdd(data.functions);
  branch.getModules = tuttedStdTreeAddGet(data.modules);
  branch.addModule = tuttedStdTreeAddArrayAdd(data.modules);
  tuttedStdTreeAddKind(branch, "root")
  return branch;
};
tuttedStdTree.root.validate = function (branch) {
  tuttedStdTreeValidateKind(branch, "root");
  tuttedStdTreeValidateMethod(branch, 'getChildren');
  tuttedStdTreeValidateMethod(branch, 'addChild');
  tuttedStdTreeValidateMethod(branch, 'addFunction');
  tuttedStdTreeValidateMethod(branch, 'getFunctions');
  tuttedStdTreeValidateMethod(branch, 'addModule');
  tuttedStdTreeValidateMethod(branch, 'getModules');
}
tuttedStdTree.function = function tuttedStdTreeFunction(name) {
  var data = {
    name: name ? name : '',
    desc: [],
    parameters:[],
    return: []
  };
  var branch = {};
  branch.getParams = tuttedStdTreeAddGet(data.parameters);
  branch.addParam = tuttedStdTreeAddArrayAdd(data.parameters);
  branch.getDesc = tuttedStdTreeAddGet(data.desc);
  branch.addDesc = tuttedStdTreeAddArrayAdd(data.desc);
  branch.getReturn = tuttedStdTreeAddGetFirst(data.return);
  branch.getName = tuttedStdTreeAddGet(data.name);
  branch.setReturn = tuttedStdTreeAddSetFirst(data.return);
  tuttedStdTreeAddKind(branch, "function")
  return branch;
};
tuttedStdTree.function.validate = function tuttedStdTreeFunctionValidate(branch) {
  tuttedStdTreeValidateKind(branch, "function");
  tuttedStdTreeValidateMethod(branch, 'getParams');
  tuttedStdTreeValidateMethod(branch, 'addParam');
  tuttedStdTreeValidateMethod(branch, 'getDesc');
  tuttedStdTreeValidateMethod(branch, 'addDesc');
  tuttedStdTreeValidateMethod(branch, 'getReturn');
  tuttedStdTreeValidateMethod(branch, 'setReturn');
  tuttedStdTreeValidateMethod(branch, 'getName');
}
tuttedStdTree.module = function tuttedStdTreeModule(name) {
  var data = {
    name: name,
    desc: [],
    interfaces:[],
    functions:[],
    return: null
  };
  var branch = {}
  branch.getFunctions = tuttedStdTreeAddGet(data.functions);
  branch.addFunction = tuttedStdTreeAddArrayAdd(data.functions);
  branch.getName = tuttedStdTreeAddGet(data.name);
  branch.getDesc = tuttedStdTreeAddGet(data.desc);
  branch.addDesc = tuttedStdTreeAddArrayAdd(data.desc);
  tuttedStdTreeAddKind(branch, "module")
  return branch;
};
tuttedStdTree.throw = function tuttedStdTreeThrow() {
  var data = {
    desc: [],
    type: []
  };
  var branch = {};
  branch.getDesc = tuttedStdTreeAddGet(data.desc);
  branch.addDesc = tuttedStdTreeAddArrayAdd(data.desc);
  branch.getType = tuttedStdTreeAddGetFirst(data.type);
  branch.setType = tuttedStdTreeAddSetFirst(data.type);
  tuttedStdTreeAddKind(branch, "throw")
  return branch;
};
tuttedStdTree.throw.validate = function tuttedStdTreeThrowValidate(branch) {
  tuttedStdTreeValidateKind(branch, "throw");
  tuttedStdTreeValidateMethod(branch, 'getDesc');
  tuttedStdTreeValidateMethod(branch, 'addDesc');
  tuttedStdTreeValidateMethod(branch, 'getType');
  tuttedStdTreeValidateMethod(branch, 'setType');
};
tuttedStdTree.param = function tuttedStdTreeParam(name) {
  var data = {
    name: name ? name : '',
    desc: [],
    type: []
  };
  var branch = {};
  branch.getDesc = tuttedStdTreeAddGet(data.desc);
  branch.addDesc = tuttedStdTreeAddArrayAdd(data.desc);
  branch.getType = tuttedStdTreeAddGetFirst(data.type);
  branch.getName = tuttedStdTreeAddGet(data.name);
  branch.setType = tuttedStdTreeAddSetFirst(data.type);
  tuttedStdTreeAddKind(branch, "param")
  return branch;
};
tuttedStdTree.param.validate = function tuttedStdTreeParamValidate(branch) {
  tuttedStdTreeValidateKind(branch, "param");
  tuttedStdTreeValidateMethod(branch, 'getDesc');
  tuttedStdTreeValidateMethod(branch, 'addDesc');
  tuttedStdTreeValidateMethod(branch, 'getType');
  tuttedStdTreeValidateMethod(branch, 'setType');
  tuttedStdTreeValidateMethod(branch, 'getName');
};
tuttedStdTree.property = function tuttedStdTreeProperty() {
  var branch = {
    name: '',
    type: '',
    is: [],
    return: null
  };
  tuttedStdTreeAddKind(branch, "property")
  return branch;
};
tuttedStdTree.return = function tuttedStdTreeReturn() {
  var data = {
    desc: [],
    type: []
  };
  var branch = {};
  branch.getDesc = tuttedStdTreeAddGet(data.desc);
  branch.addDesc = tuttedStdTreeAddArrayAdd(data.desc);
  branch.getType = tuttedStdTreeAddGetFirst(data.type);
  branch.setType = tuttedStdTreeAddSetFirst(data.type);
  tuttedStdTreeAddKind(branch, "return")
  return branch;
};
tuttedStdTree.return.validate = function tuttedStdTreeReturnValidate(branch) {
  tuttedStdTreeValidateKind(branch, "return");
  tuttedStdTreeValidateMethod(branch, 'getDesc');
  tuttedStdTreeValidateMethod(branch, 'addDesc');
  tuttedStdTreeValidateMethod(branch, 'getType');
  tuttedStdTreeValidateMethod(branch, 'setType');
};
module.exports = tuttedStdTree;
