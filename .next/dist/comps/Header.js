'use strict';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jennybehan/hello-next/comps/Header.js';


var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var linkStyle = {
  padding: 10,
  lineHeight: 1.2,
  textDecoration: 'none',
  color: '#20b2aa',
  fontSize: '15px'
};

var headerStyle = {
  width: '100%',
  height: '40px',
  padding: 20,
  textAlign: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: '#fff',
  boxShadow: '0 0.3rem 0.3rem 0 rgba(0,0,0,0.1)'
};

var Header = function Header() {
  return _react2.default.createElement('div', { style: headerStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('a', { style: linkStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('a', { style: linkStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/works', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', { style: linkStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Works')), _react2.default.createElement(_link2.default, { href: '/archive', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('a', { style: linkStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Archive')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', { style: linkStyle, 'data-jsx': 1625688997,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Contact')), _react2.default.createElement('style', { jsx: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, '\n      a:hover {\n        color: white;\n      }\n      '));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJsaW5rU3R5bGUiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJmb250U2l6ZSIsImhlYWRlclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU07V0FBWSxBQUNQLEFBQ1Q7Y0FGZ0IsQUFFSixBQUNaO2tCQUhnQixBQUdBLEFBQ2hCO1NBSmdCLEFBSVQsQUFDUDtZQUxGLEFBQWtCLEFBS047QUFMTSxBQUNoQjs7QUFPRixJQUFNO1NBQWMsQUFDWCxBQUNQO1VBRmtCLEFBRVYsQUFDUjtXQUhrQixBQUdULEFBQ1Q7YUFKa0IsQUFJUCxBQUNYO1lBTGtCLEFBS1IsQUFDVjtPQU5rQixBQU1iLEFBQ0w7UUFQa0IsQUFPWixBQUNOO1VBUmtCLEFBUVYsQUFDUjttQkFUa0IsQUFTRCxBQUNqQjthQVZGLEFBQW9CLEFBVVA7QUFWTyxBQUNsQjs7QUFZRixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQUE7eUJBQ2IsY0FBQSxTQUFLLE9BQUwsQUFBWSx5QkFBWjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UscUJBQUEsV0FBTSxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsdUJBQVY7O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRiwwQkFBQSxxQkFBQSxXQUFNLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSx1QkFBVjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUxKLEFBSUUsQUFDRSxBQUVGLDJCQUFBLHFCQUFBLFdBQU0sTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBSCxBQUFVLHVCQUFWOztnQkFBQTtrQkFBQTtBQUFBO0tBUkosQUFPRSxBQUNFLEFBRUYsMkJBQUEscUJBQUEsV0FBTSxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFILEFBQVUsdUJBQVY7O2dCQUFBO2tCQUFBO0FBQUE7S0FYSixBQVVFLEFBQ0UsQUFFRiw2QkFBQSxxQkFBQSxXQUFNLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVSx1QkFBVjs7Z0JBQUE7a0JBQUE7QUFBQTtLQWRKLEFBYUUsQUFDRSxBQUVGLDZCQUFBLGNBQUEsV0FBTyxLQUFQO2dCQUFBO2tCQUFBO0FBQUE7S0FqQlcsQUFDYixBQWdCRTtBQWpCSjs7a0JBeUJlLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZW5ueWJlaGFuL2hlbGxvLW5leHQifQ==