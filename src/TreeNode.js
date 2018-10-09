export default class TreeNode {
  constructor(char = ''){
    this.value = char;
    this.frequency = 0;
    this.children = [];
  }

  /**
   * 如果子节点存在，返回对应子节点，否则返回false
   * @param node
   * @returns {*}
   */
  child (node){
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if(node.value === this.children[i].value){
        return this.children[i];
      }
    }
    return false;
  }

  /**
   * 向该节点添加子节点
   * @param node
   */
  addChild(node){
    this.children.push(node);
  }
}
