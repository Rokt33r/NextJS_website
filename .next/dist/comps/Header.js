'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jennybehan/hello-next/comps/Header.js';


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
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 1625688997,
    css: 'a[data-jsx="1625688997"]:hover{color:white}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2dCLEFBR3FCLFlBQ2QiLCJmaWxlIjoiY29tcHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZW5ueWJlaGFuL2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgcGFkZGluZzogMTAsXG4gIGxpbmVIZWlnaHQ6IDEuMixcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgY29sb3I6ICcjMjBiMmFhJyxcbiAgZm9udFNpemU6ICcxNXB4J1xufVxuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnNDBweCcsXG4gIHBhZGRpbmc6IDIwLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICB6SW5kZXg6IDEwMDAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3hTaGFkb3c6ICcwIDAuM3JlbSAwLjNyZW0gMCByZ2JhKDAsMCwwLDAuMSknXG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi93b3Jrc1wiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+V29ya3M8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvYXJjaGl2ZVwiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QXJjaGl2ZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Db250YWN0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=comps/Header.js */'
  }));
};

exports.default = Header;