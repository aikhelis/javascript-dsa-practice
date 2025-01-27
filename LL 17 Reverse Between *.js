class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}

    /*
Pseudo code:
0. return if list is empty
1. create a dummy node and set its next to the head of the list
2. create 3 pointers:  onlooker (index = m-1), loco (index = m up to n)
3. set onlooker in position: start at dummy and traverse m nodes 
4. set loco = onlooker.next
5. do the swapping: loop (n-m) times
- create movable
- set movable = loco.next
- set loco.next = movable.next
- set movable.next = onlooker.next
- set onlooker.next = movable
6. set head = dummy.next.
    */
    reverseBetween(m, n) {
        if (this.head === null) return;
        
        const dummy = new Node(0);
        dummy.next = this.head;

        let onlooker = dummy;
        for (let i = 0; i < m; ++i) {
            onlooker = onlooker.next;
        }
        const loco = onlooker.next;

        for (let i = 0; i < (n-m); ++i) {
            const movable = loco.next;
            loco.next = movable.next;
            movable.next = onlooker.next;
            onlooker.next = movable;
        }
        
        this.head = dummy.next;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
