class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
        // this.makeEmpty();
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        let s = ""; let temp = this.head;
        while (temp) {
            s += " " + temp.value; temp = temp.next;
        }
        return s;
    }
    
    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp;
        if (index < Math.trunc(this.length / 2)) {
            temp = this.head; 
            for (let i = 0; i < index; i++) temp = temp.next;
        } else {
            temp = this.tail; 
            for (let i = this.length - 1; i > index; i--) temp = temp.prev;
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if (!temp) return false;
        temp.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        
        const node = new Node(value);
        const prev = this.get(index - 1);
        node.next = prev.next;
        node.prev = prev;
        prev.next = node;   
        node.next.prev = node;
        this.length++;
        return this;        
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        const temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        
        this.length--;
        return temp;        
    }

    // reverse() {
    //     let temp = this.head;
    //     this.head = this.tail;
    //     this.tail = temp;
        
    //     let prev = null;
    //     while(temp) {
    //         const next = temp.next;
    //         temp.next = prev;
    //         prev = temp;
    //         temp = next;
    //     }
    //     return this;        
    // }

}


let dll = new DoublyLinkedList(0);
