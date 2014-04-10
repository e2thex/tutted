var tuttedStdTree = require("./tuttedStdTree.js");

var heading = function(s) {
  return Array(s+1).join("#")
}
var rendersInjection = function(renders,defaults) {
  renders  = typeof renders === 'undefined' ? {} : renders ;
  Object.keys(defaults).forEach(function(name) {
    renders[name] = typeof renders[name] === 'undefined' ? tuttedStdMarkdownRender[name] : renders[name];
  });
  return renders;
}
var tuttedStdMarkdownRender = function(tree, renders) {
  renders = rendersInjection(renders,tuttedStdMarkdownRender);
  var markdown = [];
  tree.getFunctions().forEach(function(branch) {
    markdown = markdown.concat(renders.function(branch, 1));
  });
 return markdown; 
  
  
}

tuttedStdMarkdownRender.param = function tuttedStMarkdownRenderParam(tree) {
  return ["| " + tree.getName() + " | " + tree.getType() + " | " + tree.getDesc().join(" ") + " |"];
}
tuttedStdMarkdownRender.return = function tuttedStMarkdownRenderReturn(tree, level) {
  var markdown = [heading(level) + " Returns *" + tree.getType() + "*"];
  tree.getDesc().forEach(function(line) { markdown.push(line) });
  return markdown;
}

tuttedStdMarkdownRender.module = function tuttedStMarkdownRenderModule(tree, level, renders) {
  var markdown = [];
  renders = rendersInjection(renders,tuttedStdMarkdownRender);
  markdown.push(heading(level) + " Module `" + tree.getName() + "`");
  tree.getDesc().forEach(function(line) { markdown.push(line) });
  var functions = tree.getFunctions();
  if(functions.length > 0) {
    markdown.push(heading(level+1) + " Functions");
    functions.forEach(function(func) {
      markdown = markdown.concat(renders.function(func, level + 2));
    }, this);
  }
  return markdown;

}
tuttedStdMarkdownRender.function = function tuttedStMarkdownRenderFunction(tree, level, renders) {
  var markdown = [];
  renders = rendersInjection(renders,tuttedStdMarkdownRender);
  markdown.push(heading(level) + " Function `" + tree.getName() + "`");
  tree.getDesc().forEach(function(line) { markdown.push(line) });
  var params = tree.getParams();
  if(params.length > 0) {
    markdown.push(heading(level+1) + " Parameters");
    markdown.push("| Name | Type | Desc |");
    markdown.push("|:---- |:---- |:---- |");
    params.forEach(function(param) {
      markdown.push(renders.param(param)[0]);
    }, this);
  }
  var rtn = tree.getReturn();
  if(rtn) {
    markdown = markdown.concat(renders.return(rtn, level+1 ));
  }
  return markdown;
}
module.exports = tuttedStdMarkdownRender;
