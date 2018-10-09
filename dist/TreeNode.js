'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function () {
  function TreeNode() {
    var char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, TreeNode);

    this.value = char;
    this.frequency = 0;
    this.children = [];
  }

  /**
   * 如果子节点存在，返回对应子节点，否则返回false
   * @param node
   * @returns {*}
   */


  _createClass(TreeNode, [{
    key: 'child',
    value: function child(node) {
      var length = this.children.length;
      for (var i = 0; i < length; i++) {
        if (node.value === this.children[i].value) {
          return this.children[i];
        }
      }
      return false;
    }

    /**
     * 向该节点添加子节点
     * @param node
     */

  }, {
    key: 'addChild',
    value: function addChild(node) {
      this.children.push(node);
    }
  }]);

  return TreeNode;
}();

exports.default = TreeNode;