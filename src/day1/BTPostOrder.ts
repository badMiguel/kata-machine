function dfs(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return;
    }

    dfs(curr.left, path);
    dfs(curr.right, path);
    path.push(curr.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    dfs(head, path);
    return path;
}
