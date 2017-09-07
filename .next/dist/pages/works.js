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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jennybehan/hello-next/pages/works.js?entry';


//Stateless function syntax
// const List = function(children) {
//   return (<ul>{children}</ul>)
// }
var Items = [{
  id: 0,
  image: 'publyImage',
  text: 'first'
}, {
  id: 1,
  image: 'publyImage',
  text: 'second'
}, {
  id: 2,
  image: 'publyImage',
  text: 'third'
}];

var List = Items.map(function (item) {
  return _react2.default.createElement('li', { key: item.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('img', { src: '/assets/' + item.image + '.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), item.text));
});

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'WORKS'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, List)));
};

/*export default () => (
  <Layout>
    <h2>WORKS</h2>
    <ul>
      <li>
        <a>Publy Report</a>
      </li>
    </ul>

    <style jsx>{`
          h1, a {
            font-family: "Arial";
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            width: 200px;
            height: 150px;
            background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
          }
          a {
            text-decoration: none;
          }
          a:hover {
            opacity: 0.7
          }
          `}</style>
  </Layout>
)*/