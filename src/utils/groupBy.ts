export function groupBy<T>(
    list: Array<T>,
    keyGetter: (item: T) => any
): Map<keyof T, T[]> {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}
