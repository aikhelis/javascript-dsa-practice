class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
	constructor(value) {
        const node = new Node(value);
        this.first = node;
        this.last = node;
        this.length = 1;
    }

    printQueue() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.first) { 
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        if (!this.first) return undefined;
        const node = this.first;
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) this.last = null;
        node.next = null;
        return node;
    }
}
 
 

let myQueue = new Queue(4);

myQueue.getFirst();
myQueue.getLast();
myQueue.getLength();

console.log("\nQueue:");
myQueue.printQueue();


/*
    EXPECTED OUTPUT:
    ----------------
    First: 4
    Last: 4
    Length: 1
    
    Queue:
    4

*/