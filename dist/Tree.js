'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.root = new _TreeNode2.default(); // 单词树根节点
  }

  /**
   * 向单词树中添加单词
   * @param word
   */


  _createClass(_class, [{
    key: 'addWord',
    value: function addWord(word) {
      var wordArr = word.split('');
      var treeNode = this.root;
      while (wordArr.length) {

        var char = wordArr.shift();
        var node = new _TreeNode2.default(char);
        var nextNode = treeNode.child(node);
        if (!nextNode) {
          treeNode.addChild(node);
          treeNode = node;
        } else {
          treeNode = nextNode;
        }
        if (!wordArr.length) {
          treeNode.frequency++;
        }
      }
    }

    /**
     * 遍历单词树
     * @param treenode
     * @param callback
     * @param word
     */

  }, {
    key: 'traversal',
    value: function traversal(treenode, callback) {
      var word = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : treenode.value;

      var length = treenode.children.length;
      if (length) {
        for (var i = 0; i < length; i++) {
          this.traversal(treenode.children[i], callback, word + treenode.value);
        }
      } else {
        callback({
          word: word + treenode.value,
          frequency: treenode.frequency
        });
        return;
      }
    }
  }]);

  return _class;
}();

exports.default = _class;