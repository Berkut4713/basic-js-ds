const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
	constructor() {
		this.queue = [];
	}
	getUnderlyingList() {
		return this.queue[0];
	}

	enqueue(value) {
    const elemQueue = new ListNode(value);
		if (this.queue.length) {
			this.queue[this.queue.length-1].next = elemQueue;
			this.queue.push(elemQueue);
		} else {
			this.queue.push(elemQueue);
		}
	}
	dequeue() {
    const dequeueElem = this.queue.shift().value;
    return dequeueElem;
	}
}

module.exports = {
  Queue
};
