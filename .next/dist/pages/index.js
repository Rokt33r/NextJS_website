'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jennybehan/hello-next/pages/index.js?entry';


var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getPosts() {
  return [{ id: 'First', title: 'First' }, { id: 'Second', title: 'Second' }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return _react2.default.createElement('li', {
    'data-jsx': 3064179651,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3064179651,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, post.title)), _react2.default.createElement('style', { jsx: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, '\n      h1, a {\n        font-family: "Arial";\n      }\n      ul {\n        padding: 0;\n      }\n      li {\n        list-style: none;\n        margin: 5px 0;\n      }\n      a {\n        text-decoration: none;\n        color: blue;\n      }\n      a:hover {\n        opacity: 0.6;\n      }\n     '));
};

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 3064179651,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'BIYN'), _react2.default.createElement('ul', {
    'data-jsx': 3064179651,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, getPosts().map(function (post) {
    return _react2.default.createElement(PostLink, { key: post.id, post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    });
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFBvc3RzIiwiaWQiLCJ0aXRsZSIsIlBvc3RMaW5rIiwicG9zdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFBLEFBQVMsV0FBWSxBQUNuQjtTQUFPLENBQ0wsRUFBRSxJQUFGLEFBQU0sU0FBUyxPQURWLEFBQ0wsQUFBc0IsV0FDdEIsRUFBRSxJQUFGLEFBQU0sVUFBVSxPQUZsQixBQUFPLEFBRUwsQUFBdUIsQUFFMUI7OztBQUVELElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUNsQixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLHFCQUFBLFdBQU0sWUFBVSxLQUFoQixBQUFxQixJQUFNLHVCQUFxQixLQUFoRCxBQUFxRDtnQkFBckQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFVBRkosQUFDRSxBQUNFLEFBQVMsQUFFWCx5QkFBQSxjQUFBLFdBQU8sS0FBUDtnQkFBQTtrQkFBQTtBQUFBO0tBTGEsQUFDZixBQUlFO0FBTEo7O2tCQTJCZSxZQUFBO3lCQUNiLHVCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx5QkFBQSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxnQkFDRyxBQUFXLElBQUksVUFBQSxBQUFDLE1BQUQ7eUNBQ2QsQUFBQyxZQUFTLEtBQUssS0FBZixBQUFvQixJQUFJLE1BQXhCLEFBQThCO2tCQUE5QjtvQkFEYyxBQUNkO0FBQUE7S0FBQTtBQUxPLEFBQ2IsQUFFRSxBQUNHO0EiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2plbm55YmVoYW4vaGVsbG8tbmV4dCJ9