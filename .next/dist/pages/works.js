'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jennybehan/hello-next/pages/works.js?entry';


var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _publy = require('../static/images/publy.jpeg');

var _publy2 = _interopRequireDefault(_publy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var listStyle = {
  listStyle: 'none',
  display: 'block'
};

var pageTitle = {
  margin: '0 auto',
  textAlign: 'center'
};

var Items = [{
  id: 0,
  image: 'publy',
  text: 'first'
}, {
  id: 1,
  image: 'publy',
  text: 'second'
}, {
  id: 2,
  image: 'publy',
  text: 'third'
}];

var listItems = Items.map(function (item) {
  return _react2.default.createElement('li', { key: item.id, style: listStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('img', { src: '/assets/' + item.image + '.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), item.text));
});

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('h2', { style: pageTitle, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'WORKS'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, listItems)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzLmpzIl0sIm5hbWVzIjpbImxpc3RTdHlsZSIsImRpc3BsYXkiLCJwYWdlVGl0bGUiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJJdGVtcyIsImlkIiwiaW1hZ2UiLCJ0ZXh0IiwibGlzdEl0ZW1zIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTTthQUFZLEFBQ0wsQUFDWDtXQUZGLEFBQWtCLEFBRVA7QUFGTyxBQUNoQjs7QUFJRixJQUFNO1VBQVksQUFDUixBQUNSO2FBRkYsQUFBa0IsQUFFTDtBQUZLLEFBQ2hCOztBQUlGLElBQU07TUFDSixBQUNNLEFBQ0o7U0FGRixBQUVTLEFBQ1A7UUFKVSxBQUNaLEFBR1E7QUFIUixBQUNFLENBRlU7TUFNWixBQUNNLEFBQ0o7U0FGRixBQUVTLEFBQ1A7UUFUVSxBQU1aLEFBR1E7QUFIUixBQUNFO01BSUYsQUFDTSxBQUNKO1NBRkYsQUFFUyxBQUNQO1FBZEosQUFBYyxBQVdaLEFBR1E7QUFIUixBQUNFOztBQU1KLElBQU0sa0JBQVksQUFBTSxJQUFJLFVBQUEsQUFBQyxNQUFEO3lCQUMxQixjQUFBLFFBQUksS0FBSyxLQUFULEFBQWMsSUFBSSxPQUFsQixBQUF5QjtnQkFBekI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFFRTtBQUZGO0FBQUEsNENBRU8sa0JBQWdCLEtBQWhCLEFBQXFCLFFBQTFCO2dCQUFBO2tCQUZGLEFBRUUsQUFDQztBQUREO1dBSnNCLEFBQzFCLEFBQ0UsQUFHUTtBQUxaLEFBQWtCLENBQUE7O2tCQVVILFlBQUE7eUJBQ1gsdUJBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQSxRQUFJLE9BQUosQUFBVztnQkFBWDtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUNBLDBCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEtBSk8sQUFDWCxBQUVFLEFBQ0U7QSIsImZpbGUiOiJ3b3Jrcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamVubnliZWhhbi9oZWxsby1uZXh0In0=