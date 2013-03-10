var hljs = require('highlight.js');

var codeLines = {
  before: '<span class="line">',
  after: '</span>'
};

function wrapLines(code) {
  var out = [];
  var before = codeLines.before;
  var after = codeLines.after;
  code = code.split('\n');
  code.forEach(function(line) {
    out.push(before+line+after);
  });
  return out.join('\n');
}

module.exports = {

  plugins: {
    marked: {
      markedOptions: {
        gfm: true,
        tables: true,
        smartLists: true,
        highlight: function(code) {
          var out = hljs.highlightAuto(code).value;
          return wrapLines(out);
        }
      }
    }
  },

  templateData: {
    site: {
      title: 'Blog'
    }
  },
  collections: {
    posts: function() {
      return this.getCollection('html').findAllLive({relativeOutDirPath:'posts'});
    }
  }
};
