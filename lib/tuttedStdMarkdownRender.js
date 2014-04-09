var tuttedStdTree = require("./tuttedStdTree.js");
var rendersInjection = function(renders,defaults) {
  renders  = typeof renders === 'undefined' ? {} : renders ;
  Object.keys(defaults).forEach(function(name) {
    renders[name] = typeof renders[name] === 'undefined' ? tuttedStdMarkdownRender.param : renders[name];
  });
  return renders;
}
var tuttedStdMarkdownRender = function() {
}

tuttedStdMarkdownRender.param = function tuttedStMarkdownRenderParam(tree) {
  return ["| " + tree.getName() + " | " + tree.getType() + " | " + tree.getDesc().join(" ") + " |"];
}
tuttedStdMarkdownRender.return = function tuttedStMarkdownRenderReturn(tree, level) {
  var markdown = ["h" + (level) + ". -" + tree.getType() + "-"];
  tree.getDesc().forEach(function(line) { markdown.push(line) });
  return markdown;
}

tuttedStdMarkdownRender.function = function tuttedStMarkdownRenderFunction(tree, level, renders) {
  var markdown = [];
  renders = rendersInjection(renders,tuttedStdMarkdownRender);
  markdown.push("h" + level + ". Function `" + tree.getName() + "`");
  tree.getDesc().forEach(function(line) { markdown.push(line) });
  var params = tree.getParams();
  if(params) {
    markdown.push("h" + (level+1) + ". Parameters");
    markdown.push("| Name | Type | Desc |");
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
