'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../comps/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _publy = require('../assets/publy.jpeg');

var _publy2 = _interopRequireDefault(_publy);

var _pubpub = require('../assets/pubpub.jpg');

var _pubpub2 = _interopRequireDefault(_pubpub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jennybehan/hello-next/pages/works.js?entry';


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
  image: 'publyImage',
  text: 'first'
}, {
  id: 1,
  image: 'pubpubImage',
  text: 'second'
}, {
  id: 2,
  image: 'publyImage',
  text: 'third'
}];

var listItems = Items.map(function (item) {
  return _react2.default.createElement('li', { key: item.id, style: listStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('img', { src: '../assets/publy.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), item.text));
});

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('h2', { style: pageTitle, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'WORKS'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, listItems)));
};