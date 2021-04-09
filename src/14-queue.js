const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  get size() {
    const tempArr = [];
    let temp = this.front;
    while (temp) {
      tempArr.push(temp.value);
      temp = temp.next;
    }
    return tempArr.length;
  }

  isEmpty() {
    return !this.front;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.isEmpty()) {
      this.back = node;
      this.front = this.back;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    const node = this.front;
    if (this.front) {
      this.front = this.front.next;
    }
    if (!this.isEmpty()) {
      this.back = null;
    }
    return node;
  }
}

module.exports = Queue;
