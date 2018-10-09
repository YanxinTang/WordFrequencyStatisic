import TreeNode from './TreeNode'

export default class {
  constructor() {
    this.root = new TreeNode();       // 单词树根节点
  }

  /**
   * 向单词树中添加单词
   * @param word
   */
  addWord(word){
    let wordArr = word.split('');
    let treeNode = this.root;
    while (wordArr.length){

      let char = wordArr.shift();
      let node = new TreeNode(char);
      let nextNode = treeNode.child(node);
      if(!nextNode){
        treeNode.addChild(node);
        treeNode = node;
      }else{
        treeNode = nextNode;
      }
      if(!wordArr.length){
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
  traversal(treenode, callback, word = treenode.value){
    let length = treenode.children.length;
    if(length){
      for (let i = 0; i < length; i++) {
        this.traversal(treenode.children[i], callback, word+treenode.value);
      }
    }else{
      callback({
        word: word+treenode.value,
        frequency: treenode.frequency
      });
      return ;
    }
  }

}
