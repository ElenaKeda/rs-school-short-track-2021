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
    this.arr = [];
    this.front = null;
    this.back = null;
  }

  get size() {
    return this.arr.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    this.arr.push(element);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }

  dequeue() {
    this.front = this.front.next;
    return this.arr.shift();
  }
}

module.exports = Queue;
