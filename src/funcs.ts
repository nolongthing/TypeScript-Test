import { Pokers } from "./types";
import { Color } from "./enums";

export function creatPoker(): Pokers {
  const pokers: Pokers = [];
  const colors = Object.values(Color);
  for (let i = 1; i < 14; i++) {
    colors.forEach(item => {
      pokers.push({
        color: item,
        num: `${i}`,
      })
    })
  }
  return pokers;
}

export function printPoker(pokers: Pokers) {
  let str = '';
  pokers.forEach(item => {
    str += (item.color + item.num + '\t');
  })
  console.log(str);
}