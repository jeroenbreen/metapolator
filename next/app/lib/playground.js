require.config({
    baseUrl: 'lib'
  , paths: {
      'require/domReady': 'bower_components/requirejs-domready/domReady'
    , 'require/text': 'bower_components/requirejs-text/text'
    , 'gonzales': 'npm_converted/gonzales/lib'
    , angular: 'bower_components/angular/angular'
    }
  , shim: {
      angular: {
        exports: 'angular'
      }
    }
});

require([
    'webAPI/document'
  , 'require/domReady'
  , './models/parameters/factories'
  , 'gonzales/gonzales'
], function (
    document
  , domReady
  , parameterFactories
  , gonzales
) {
    "use strict";
    domReady(function() {
        var css = "body{ \n  background-color: #fff;\n\
  margin: 0 auto\n}\
/* And a comment */ \
strange>.selector\
/* selector comment \n with linebreak */\
, and another one\
missing.delim >\
{ any-param\n: unheard-of(style + css);\
/* a comment within a block */\
another-one: def-unheard-of(style + css)/*this param has a comment*/;\
}\
@media whatever{ hi{name:val} }\
";
        var pre = document.createElement('pre');
        pre.appendChild(document.createTextNode(css));
        document.body.appendChild(pre);
        
        var ast = gonzales.srcToCSSP(css)
          , tree = gonzales.csspToTree(ast);
        var pre = document.createElement('pre');
        pre.appendChild(document.createTextNode(tree));
        document.body.appendChild(pre);
        
        console.log('parameterFactories.rulesFromAST(ast)',
                                    parameterFactories.rulesFromAST(ast))
    })
})
