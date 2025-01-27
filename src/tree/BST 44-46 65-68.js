class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        
        let temp = this.root;
        
        while (true) {
            if (value === temp.value) return;
            if (value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return;
                }
                temp = temp.left;
            } else if (value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return;
                } 
                temp = temp.right;
            }
        }
    }

    #rInsert(value, currentNode = this.root) {
        if (currentNode === null) return new Node(value);

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }

    rInsert(value) {
        if (this.root === null) this.root = new Node(value);
        this.#rInsert(value);
    }

    contains(value) {
        let temp = this.root;
        while(temp) { 
            if (value === temp.value) return true;
            if (value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;
        if (value === currentNode.value) return true;
        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
        
    }

    minValue(currentNode = this.root) {
        if (currentNode === null) return null;
        if (currentNode.left !== null) return this.minValue(currentNode.left);
        return currentNode.value;
    }

        BFS() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length) {
           currentNode = queue.shift();
           results.push(currentNode.value);
           if(currentNode.left) queue.push(currentNode.left);
           if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    DFSPreOrder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results = [];
        function traverse(currentNode){
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }

    DFSInOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }
      
}

function test_contains() {
    let myBST = new BST();
    
    myBST.rInsert(47);
    myBST.rInsert(21);
    myBST.rInsert(76);
    myBST.rInsert(18);
    myBST.rInsert(27);
    myBST.rInsert(52);
    myBST.rInsert(82);
    myBST.rInsert(27);
    
    console.log("BST Contains 27:");
    console.log(myBST.rContains(27));
    
    console.log("\nBST Contains 17:");
    console.log(myBST.rContains(17));
    
    console.log("\nBST minValue from root:");
    console.log(myBST.minValue());
    
    console.log("\nBST minValue from root.right:");
    console.log(myBST.minValue(myBST.root.right));
    
    console.log("\nBST minValue from root.left:");
    console.log(myBST.minValue(myBST.root.left));
    
    /*
        EXPECTED OUTPUT:
        ----------------
        BST Contains 27:
        true
        
        BST Contains 17:
        false
    */ 
}

function test_BFS() {
    console.log( myTree.BFS() );
    /*
    EXPECTED OUTPUT:
    ----------------
    [ 47, 21, 76, 18, 27, 52, 82 ]
    */  
} 

function test_DFSPreOrder() {
    console.log( myTree.DFSPreOrder() );
    /*
    EXPECTED OUTPUT:
    ----------------
    [ 47, 21, 18, 27, 76, 52, 82 ]
    */ 
}

function test_DFSPostOrder() {
    console.log( myTree.DFSPostOrder() );
    /*
    EXPECTED OUTPUT:
    ----------------
    [ 18, 27, 21, 52, 82, 76, 47 ]
    */
}

function test_DFSInOrder() {
    console.log( myTree.DFSInOrder() );
    /*
    EXPECTED OUTPUT:
    ----------------
    [ 18, 21, 27, 47, 52, 76, 82 ]
    */   
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

test_BFS();
test_DFSPreOrder()
test_DFSPostOrder()
test_DFSInOrder()
