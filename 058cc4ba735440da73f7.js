import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import './style.css';
import './bootstrap.css';
import * as API from './apiData.js';

var refreshScores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var scores, ul;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return API.getScores();

          case 2:
            scores = _context.sent;
            ul = document.getElementById('score');
            ul.innerHTML = '';
            scores.result.forEach(function (score) {
              var li = document.createElement('li');
              li.innerText = "".concat(score.user, ": ").concat(score.score);
              ul.appendChild(li);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function refreshScores() {
    return _ref.apply(this, arguments);
  };
}();

window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
  var refreshBtn, form, nameInput, scoreInput;
  return _regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          refreshBtn = document.getElementById('refresh-btn');
          form = document.getElementById('add-a-score');
          nameInput = document.getElementById('name-input');
          scoreInput = document.getElementById('score-input');
          refreshBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    refreshScores();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })));
          form.addEventListener('submit', /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(event) {
              var user, score;
              return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      event.preventDefault();
                      user = nameInput.value;
                      score = Number(scoreInput.value);
                      _context3.next = 5;
                      return API.addScore(user, score);

                    case 5:
                      _context3.next = 7;
                      return refreshScores();

                    case 7:
                      form.reset();

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            return function (_x) {
              return _ref4.apply(this, arguments);
            };
          }());
          _context4.next = 8;
          return refreshScores();

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));