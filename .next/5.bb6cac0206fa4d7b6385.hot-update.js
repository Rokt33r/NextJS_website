webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(553);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(571);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jennybehan/hello-next/pages/works.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jennybehan/hello-next/pages/works.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/works")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYjZjYWMwMjA2ZmE0ZDdiNjM4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvd29ya3MuanM/ZjRiMzZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcblxuLy9TdGF0ZWxlc3MgZnVuY3Rpb24gc3ludGF4XG4vLyBjb25zdCBMaXN0ID0gZnVuY3Rpb24oY2hpbGRyZW4pIHtcbi8vICAgcmV0dXJuICg8dWw+e2NoaWxkcmVufTwvdWw+KVxuLy8gfVxuY29uc3QgSXRlbXMgPSBbXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICBpbWFnZTogJ3B1Ymx5SW1hZ2UnLFxuICAgICAgICAgICB0ZXh0OiAnZmlyc3QnXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgaW1hZ2U6ICdwdWJseUltYWdlJyxcbiAgICAgICAgICAgdGV4dDogJ3NlY29uZCdcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICBpbWFnZTogJ3B1Ymx5SW1hZ2UnLFxuICAgICAgICAgICB0ZXh0OiAndGhpcmQnXG4gICAgICAgICB9XG4gICAgICAgXVxuXG5jb25zdCBMaXN0ID0gSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgIDxhPlxuICAgICAgPGltZyBzcmM9e2AvYXNzZXRzLyR7aXRlbS5pbWFnZX0uanBlZ2B9Lz5cbiAgICAgIHtpdGVtLnRleHR9XG4gICAgPC9hPlxuICA8L2xpPlxuKSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDI+V09SS1M8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtMaXN0fVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5cbi8qZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMj5XT1JLUzwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YT5QdWJseSBSZXBvcnQ8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEsIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM5NmRlZGEgMCUsICM1MGM5YzMgMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuN1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKSovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvd29ya3MuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFKQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9