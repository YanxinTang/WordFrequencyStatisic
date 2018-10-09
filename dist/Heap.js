"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.heap = []; // 单词堆
  }

  /**
   * 反序遍历单词堆
   * @param callback
   */


  _createClass(_class, [{
    key: "each",
    value: function each(callback) {
      var length = this.heap.length;
      for (var i = length - 1; i >= 0; i--) {
        callback(this.heap[i]);
      }
    }

    /**
     * 堆排序
     */

  }, {
    key: "sort",
    value: function sort() {
      var length = this.heap.length;
      for (var i = Math.floor(length / 2) - 1; i >= 0; i--) {
        this.maxHeapify(i, length);
      }
      for (var _i = length - 1; _i >= 0; _i--) {
        this.swap(0, _i);
        this.maxHeapify(0, _i);
      }
    }

    /**
     * 构建最大堆
     * @param start
     * @param end
     */

  }, {
    key: "maxHeapify",
    value: function maxHeapify(start, end) {

      var lChild = 2 * start + 1;
      if (lChild > end) return;

      var rChild = 2 * start + 2;
      var maxChild = this.heap[lChild].frequency > this.heap[rChild].frequency ? lChild : rChild;
      if (this.heap[start].frequency < this.heap[maxChild].frequency) {
        this.swap(start, maxChild);
        this.maxHeapify(maxChild, end);
      }
    }
  }, {
    key: "val",
    value: function val(n) {
      return this.heap[n].frequency;
    }

    /**
     * 向堆添加节点
     * @param heapnode
     */

  }, {
    key: "push",
    value: function push(heapnode) {
      this.heap.push(heapnode);
    }

    /**
     * 交换堆中的i， j节点
     * @param i
     * @param j
     */

  }, {
    key: "swap",
    value: function swap(i, j) {
      var tmp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = tmp;
    }
  }]);

  return _class;
}();

exports.default = _class;