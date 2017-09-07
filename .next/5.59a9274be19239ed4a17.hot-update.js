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

var _publy = __webpack_require__(578);

var _publy2 = _interopRequireDefault(_publy);

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
      lineNumber: 28
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('img', { src: item.image, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), item.text));
});

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'WORKS'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
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

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/jennybehan/hello-next/pages/assets/publy.jpeg Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41OWE5Mjc0YmUxOTIzOWVkNGExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvd29ya3MuanM/ZjBlMDZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCdcbmltcG9ydCBwdWJseUltYWdlIGZyb20gJy4vYXNzZXRzL3B1Ymx5LmpwZWcnXG5cbi8vU3RhdGVsZXNzIGZ1bmN0aW9uIHN5bnRheFxuLy8gY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGNoaWxkcmVuKSB7XG4vLyAgIHJldHVybiAoPHVsPntjaGlsZHJlbn08L3VsPilcbi8vIH1cbmNvbnN0IEl0ZW1zID0gW1xuICAgICAgICAge1xuICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgaW1hZ2U6ICdwdWJseUltYWdlJyxcbiAgICAgICAgICAgdGV4dDogJ2ZpcnN0J1xuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgIGltYWdlOiAncHVibHlJbWFnZScsXG4gICAgICAgICAgIHRleHQ6ICdzZWNvbmQnXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgaW1hZ2U6ICdwdWJseUltYWdlJyxcbiAgICAgICAgICAgdGV4dDogJ3RoaXJkJ1xuICAgICAgICAgfVxuICAgICAgIF1cblxuY29uc3QgTGlzdCA9IEl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICA8YT5cbiAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfS8+XG4gICAgICB7aXRlbS50ZXh0fVxuICAgIDwvYT5cbiAgPC9saT5cbikpXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgyPldPUktTPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7TGlzdH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuXG4vKmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDI+V09SS1M8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGE+UHVibHkgUmVwb3J0PC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLCBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjOTZkZWRhIDAlLCAjNTBjOWMzIDEwMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjdcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbikqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3dvcmtzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=