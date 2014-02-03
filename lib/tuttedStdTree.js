var tuttedStdTreeAddKind= function(branch, kind) {
  branch.__defineGetter__("kind", function() { return kind});
}
var tuttedStdTree = {};

tuttedStdTree.root = function tuttedStdTreeRoot() {
  var branch = {
    children: []
  };
  tuttedStdTreeAddKind(branch, "root")
  return branch;
};
tuttedStdTree.function = function tuttedStdTreeFunction() {
  var branch = {
    name: '',
    is: [],
    parameters:[],
    return: null
  };
  tuttedStdTreeAddKind(branch, "function")
  return branch;
};

tuttedStdTree.module = function tuttedStdTreeModule() {
  var branch = {
    name: '',
    is: [],
    interfaces:[],
    functions:[],
    return: null
  };
  tuttedStdTreeAddKind(branch, "module")
  return branch;
};
tuttedStdTree.param = function tuttedStdTreeParam() {
  var branch = {
    name: '',
    type: '',
    is: [],
    return: null
  };
  tuttedStdTreeAddKind(branch, "param")
  return branch;
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
  var branch = {
    type: '',
    is: [],
    return: null
  };
  tuttedStdTreeAddKind(branch, "return")
  return branch;
};
module.exports = tuttedStdTree;
