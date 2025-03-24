type Node<T> = {
    value: T;
    next: Node<T> | undefined;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item, next: undefined }

        if (this.length < 1) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length > idx) {
            return;
        }

        const newNode: Node<T> = { value: item, next: undefined };
        let counter = 0;
        let curr = this.head;

        while (curr) {
            if (counter === idx) {
                if (curr.next) {
                    curr.next.next = newNode;
                }
                curr.next = newNode;
                this.length++;
                break;
            }

            curr = curr.next;
            counter++;
        }
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item, next: undefined };

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        if (item === this.head?.value) {
            const item = this.head.value;
            this.head = this.head.next? this.head.next : undefined;
            this.length--;
            return item;
        }

        let curr = this.head;
        while (curr) {
            if (curr.value === item) {
                const item = curr.value;
                if (curr.next) {
                    curr.next = curr.next.next;
                }
                this.length--;
                return item;
            }
            curr = curr.next;
        }
        return;
    }

    get(idx: number): T | undefined {
        let counter = 0;
        let curr = this.head;
        while (curr) {
            if (counter === idx) {
                return curr.value;
            }
            counter++;
            curr = curr.next;
        }
        return;
    }

    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            if (this.length < 1) {
                return;
            }

            const item = this.head ? this.head.value : undefined;
            this.head = this.head ? this.head.next : undefined;
            this.length--;
            return item;
        }

        let curr = this.head;
        let counter = 0;
        while (curr) {
            if (counter === idx - 1) {
                const item = curr.next ? curr.next.value : undefined;
                curr.next = curr.next ? curr.next.next : undefined;
                this.length--;
                return item;
            }

            curr = curr.next ;
            counter++
        }
        return;
    }
}
