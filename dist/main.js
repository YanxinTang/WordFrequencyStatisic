'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _Heap = require('./Heap');

var _Heap2 = _interopRequireDefault(_Heap);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WFS = function () {
  function WFS(file) {
    _classCallCheck(this, WFS);

    this.input = file;
    this.tree = new _Tree2.default(); // 单词树
    this.heap = new _Heap2.default(); // 单词堆
  }

  _createClass(WFS, [{
    key: 'start',
    value: function start() {
      var _this = this;

      var rl = _readline2.default.createInterface({
        input: _fs2.default.createReadStream(_path2.default.resolve(__dirname, 'example.txt'))
      });
      rl.on('line', function (line) {
        _this.tree.addWord(line);
      }).on('close', function () {
        // 构建完成单词树
        _this.tree.traversal(_this.tree.root, function (heapnode) {
          _this.heap.push(heapnode);
        });
        // 堆排序
        _this.heap.sort();
        _this.heap.each(function (heapnode) {
          console.log(heapnode.word, heapnode.frequency);
        });
      });
    }
  }]);

  return WFS;
}();

var wfs = new WFS('example.txt');
wfs.start();