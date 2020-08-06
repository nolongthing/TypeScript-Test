
function take<T>(arr: T[], n: number) {
  if (n >= arr.length) {
    return arr;
  }
  const newArr: T[] = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const arr = take(['abc', 111, 222, 'lll', 'abc'], 4)


const a = arr[0];