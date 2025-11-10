import { NotImplementedError } from "../extensions/index.js";

import { Node } from '../extensions/list-tree.js';

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
export default class BinarySearchTree {
  constructor(){
    this.core = null
  }

  root() {
    return this.core;
  }

  add(data) {
    let node = new Node(data)
    if (this.core === null)
      this.core = node;
    else
      this.addNode(this.core, node)
  }
  addNode(core, node){
    if(node.data < core.data){
      if(core.left === null){
        core.left = node
      }else{
        this.addNode(core.left,node)
      }
    }else{
      if(core.right === null){
        core.right = node
      }else{
        this.addNode(core.right,node)
      }
    }
  }

  has(data) {
    return this.hasData(data,this.core)
  }
  hasData(data,core){
    if(core === null){
      return false
    }else if(data < core.data){
      return this.hasData(data,core.left)
    }else if(data > core.data){
      return this.hasData(data,core.right)
    }
    return true
  }
  

  find(data) {
    return this.findData(data,this.core)
    // remove line with error and write your code here
  }
  findData(data,core){
    if(core === null){
      return null
    }else if(data < core.data){
      return this.findData(data,core.left)
    }else if(data > core.data){
      return this.findData(data,core.right)
    }
    return core
  }
  remove(data) {
    this.core = this.removeNode(this.core, data)
  }
  removeNode(core, data){
    if(core === null){
      return null
    }else if(data < core.data){
      core.left = this.removeNode(core.left,data)
      return core
    }else if(data > core.data){
      core. right = this.removeNode(core.right,data)
      return core
    }else{
        if(core.left === null && core.right === null){
          core = null
          return core
        }

        if(core.left === null){
          core = core.right
          return core
        }else if(core.right === null){
          core = core.left
          return core
        }

        let temp = this.findMinNode(core.right)
        core.data = temp.data
        core.right = this.removeNode(core.right,temp.data)
        return core
    }
  }

  min() {
    return this.findMinNode(this.core).data
    // remove line with error and write your code here
  }

findMinNode(core){
    if(core.left === null)
        return core;
    else
        return this.findMinNode(core.left);
  }

  max() {
    return this.findMaxNode(this.core).data
    // remove line with error and write your code here
  }
  findMaxNode(core){
    if(core.right === null)
        return core;
    else
        return this.findMaxNode(core.right);
  }
};
