var tuttedStdTree = require("./tuttedStdTree.js");
tuttedStdParser = function tuttedStdParser() {
  var that = tuttedStdParser.base(tuttedStdTree.root());
  that.acceptingTags = {
    '@function': function(line) {
      var branch = tuttedStdTree.function(line.first);
      this.branch.addFunction(branch);
      return tuttedStdParser.function(branch);
    }
  };
  return that;
}
tuttedStdParser.base = function tuttedStdParserBase(branch) {
  var that = {
    closingTags : [],
    acceptingTags : [],
    branch : branch
  };
  that.accepts = function(tag) {
    return (typeof this.acceptingTags[tag] === 'function') ? true : false; 
  }
  that.closedBy = function(tag) {
    return (this.closingTags.indexOf(tag) >= 0) ? true : false; 
  }
  that.execute = function(line) {
    if (this.accepts(line.tag)) {
      return this.acceptingTags[line.tag].call(this, line);
    }
    else {
      throw "Does not accept tag " + line.tag;
    }
  }
  that.getTree = function() {
    return branch;
  }
  return that;
}
tuttedStdParser.function = function tuttedStdParserFunction(branch) {
  var that = tuttedStdParser.base(branch);
  that.acceptingTags = {
   '@is': function(line) {
     this.branch.addDesc(line.text);
     return false;
   },
   '@param': function(line) {
      var branch = tuttedStdTree.param(line.first);
      this.branch.addParam(branch);
      return tuttedStdParser.param(branch);
   },
   '@return': function(line) {
      var branch = tuttedStdTree.return();
      this.branch.setReturn(branch);
      return tuttedStdParser.return(branch);
   }
  };
  that.closingTags = ['@function']
  return that;
}
tuttedStdParser.return = function tuttedStdParserReturn(branch) {
  var that = tuttedStdParser.base(branch);
  that.acceptingTags = {
   '@is': function(line) {
     this.branch.addDesc(line.text);
     return false;
   },
   '@type': function(line) {
     this.branch.setType(line.first);
     return false;
   }
  }
  that.closingTags = ['@function', '@param'];
  return that;
}
tuttedStdParser.param = function tuttedStdParserParam(branch) {
  var that = tuttedStdParser.base(branch);
  that.acceptingTags = {
   '@is': function(line) {
     this.branch.addDesc(line.text);
     return false;
   },
   '@type': function(line) {
     this.branch.setType(line.first);
     return false;
   }
  };
  that.closingTags = ['@function', '@param']
  return that;
}
module.exports = tuttedStdParser;
