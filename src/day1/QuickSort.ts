function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let currIdx = low;
    for (let i = low; i < high; i++) {
        if (pivot > arr[i]) {
            const temp = arr[i];
            arr[i] = arr[currIdx];
            arr[currIdx] = temp;
            currIdx++;
        }
    }

    arr[high] = arr[currIdx];
    arr[currIdx] = pivot;
    return currIdx;
}

function quickSort(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    const idx = partition(arr, low, high);
    quickSort(arr, low, idx - 1);
    quickSort(arr, idx + 1, high);
}

export default function quick_sort(arr: number[]): void {
    const low = 0;
    const high = arr.length - 1;
    quickSort(arr, low, high);
}
