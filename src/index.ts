import { Dictionary } from "./dictionary";

const dictionary = new Dictionary<string, number>();

dictionary.set('a', 11);
dictionary.set('b', 22);
dictionary.set('c', 33);

dictionary.forEach((k, v) => {
  console.log(`${k}:${v}`);
})

console.log(dictionary.has('c'))
console.log(dictionary.size);
dictionary.delete('c');
console.log(dictionary.has('c'))
console.log(dictionary.size);