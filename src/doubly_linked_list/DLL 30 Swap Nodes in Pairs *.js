class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
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
        if (this.length === 0) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        this.length++;
    }

    /*
    return if length < 2
    const dummy = new Node(0); dummy.next = this.head;
    let first = this.head;
    this.head.prev = dummy;
    while(first && first.next)
        let left = first.prev;
        let second = first.next;
        let right = second.next;
        set next and prev of left, first, second, and right nodes to link together after the swap of first and second
        with exception check that we only set right.prev if right !== null
        first = right;
    end 
    head = dummy.next;
    dummy.next = null;
    */
    swapPairs() {
        if (this.length < 2) return;
        
        const dummy = new Node(0); 
        dummy.next = this.head;
        this.head.prev = dummy;
        
        let first = this.head;
        while(first && first.next) {
            let left = first.prev;
            let second = first.next;
            let right = second.next;

            left.next = second;
            second.prev = left;
            
            second.next = first;
            first.prev = second;
            
            first.next = right;
            if (right) right.prev = first;

            first = right;
        }
        this.head = dummy.next;
        this.head.prev = null;
        dummy.next = null;
    }

}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original List 1:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log("\nList 1 after swapping pairs:");
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original List 1:
    1
    2
    3
    4
    5

    List 1 after swapping pairs:
    2
    1
    4
    3
    5

    Original List 2:
    1
    2
    3
    4
    5
    6

    List 2 after swapping pairs:
    2
    1
    4
    3
    6
    5
*/
