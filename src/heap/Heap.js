class Heap {
    #heap = [];

    getHeap() {
        return [...this.#heap]
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    #bubbleUp(index) {
        let current = index;
        while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    #sinkDown(index) {
        let maxIndex = index;
        const size = this.#heap.length;
        
        while (true) {
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);
            
            if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
                maxIndex = leftIndex;
            }

            if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.#swap(index, maxIndex);
                index = maxIndex;
            } else {
                return;
            }
            
        }
    }

    insert(value) {
        this.#heap.push(value);
        this.#bubbleUp(this.#heap.length - 1);
    }

    remove() {
        const value = this.#heap[0];
        this.#heap[0] = this.#heap.pop();

        this.#sinkDown(0);
        return value;
    }


}

let h = new Heap();
h.insert(55);
console.log(h.getHeap());
h.insert(66);
console.log(h.getHeap());
h.insert(-10);
console.log(h.getHeap());
h.insert(99);
console.log(h.getHeap());