type Node<T> = {
    item: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { item: item };

        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const item = this.head.item;
        this.length--;
        if (this.length === 0) {
            this.tail = this.head = undefined;
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
