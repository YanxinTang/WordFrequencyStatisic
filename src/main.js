import Tree from './Tree';
import fs from 'fs'
import readline from 'readline'
import Heap from './Heap'
import path from 'path'

class WFS {
  constructor(file){
    this.input = file;
    this.tree = new Tree();       // 单词树
    this.heap = new Heap();       // 单词堆
  }

  start(){
    const rl = readline.createInterface({
      input: fs.createReadStream(path.resolve(__dirname, 'example.txt'))
    });
    rl.on('line', (line)=> {
      this.tree.addWord(line);
    }).on('close', () => {
      // 构建完成单词树
      this.tree.traversal(this.tree.root, (heapnode) => {
        this.heap.push(heapnode);
      });
      // 堆排序
      this.heap.sort();
      this.heap.each((heapnode) => {
        console.log(heapnode.word, heapnode.frequency);
      });
    });
  }
}

const wfs = new WFS('example.txt');
wfs.start();

