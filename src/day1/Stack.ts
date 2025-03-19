type Node<T> = {
    item: T;
    next?: Node<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode: Node<T> = { item: item }
        this.length++;

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const item = this.head.item;
        this.length--;
        if (this.length === 0) {
            this.head = undefined;
        } else {
            this.head = this.head.next;
        }
        return item;
    }

    peek(): T | undefined {
        if (this.head) {
            return this.head.item;
        }
        return undefined;
    }
}
