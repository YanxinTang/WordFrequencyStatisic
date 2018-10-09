export default class {
  constructor() {
    this.heap = [];       // 单词堆
  }

  /**
   * 反序遍历单词堆
   * @param callback
   */
  each(callback){
    const length = this.heap.length;
    for (let i = length-1; i >= 0; i--) {
      callback(this.heap[i]);
    }
  }

  /**
   * 堆排序
   */
  sort(){
    const length = this.heap.length;
    for (let i = Math.floor(length/2)-1; i >= 0; i--) {
      this.maxHeapify(i, length);
    }
    for (let i = length-1; i >= 0; i--) {
      this.swap(0, i);
      this.maxHeapify(0, i);
    }
  }

  /**
   * 构建最大堆
   * @param start
   * @param end
   */
  maxHeapify(start, end){

    let lChild = 2*start+1;
    if(lChild > end)
      return ;

    let rChild = 2*start+2;
    let maxChild = this.heap[lChild].frequency > this.heap[rChild].frequency?lChild:rChild;
    if(this.heap[start].frequency < this.heap[maxChild].frequency){
      this.swap(start, maxChild);
      this.maxHeapify(maxChild, end);
    }
  }

  val(n){
    return this.heap[n].frequency;
  }

  /**
   * 向堆添加节点
   * @param heapnode
   */
  push(heapnode){
    this.heap.push(heapnode)
  }

  /**
   * 交换堆中的i， j节点
   * @param i
   * @param j
   */
  swap(i, j){
    let tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp
  }
}
