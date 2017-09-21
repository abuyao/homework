'use strict';
  
var test = function () {
       var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                     while (1) {
                            switch (_context.prev = _context.next) {
                                   case 0:
                                          return _context.abrupt('return', axios.post("/api/thumb"));

                                   case 1:
                                   case 'end':
                                          return _context.stop();
                            }
                     }
              }, _callee, this);
       }));

       return function test() {
              return _ref.apply(this, arguments);
       };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('测试点赞函数', function () {
       it('点赞函数 执行一次 PraiseButton praise() 返回值就+1', function () {
              expect(test().data).toBe(1);
              expect(test().data).toBe(2);
              expect(test().data).toBe(3);
              expect(test().data).toBe(4);
              expect(test().data).toBe(5);
              expect(test().data).toBe(6);
              expect(test().data).toBe(7);
              expect(test().data).toBe(8);
              expect(test().data).toBe(9);
              expect(test().data).toBe(10);
       });
});
