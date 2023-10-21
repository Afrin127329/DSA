class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
     }
}
 
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return newNode;
    }
}

const list = new SinglyLinkedList();
console.log(list.push(10));
console.log(list.push(15));
console.log(list.push(20));

console.log(list);