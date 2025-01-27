class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.makeEmpty();
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
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--; 
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;   
        temp.next = null;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head; 
        let i = index;
        while (i > 0) {
            temp = temp.next; i--;
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
        
        const newNode = new Node(value);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;   
        this.length++;
        return this;        
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        
        const prev = this.get(index - 1);
        const temp = prev.next;
        
        prev.next = temp.next;
        temp.next = null;
        
        this.length--;
        return temp;        
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        
        let prev = null;
        while(temp) {
            const next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;        
    }

}


let ll = new LinkedList();
