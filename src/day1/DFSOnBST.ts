function walk(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (walk(curr.left, needle)) {
        return true;
    }
    if (walk(curr.right, needle)) {
        return true;
    }

    return false;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
