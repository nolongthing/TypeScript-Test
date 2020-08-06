import { Pokers, Poker } from "./types";
import { Color } from "./enums";

export class Deck {
  private _pokers: Pokers = [];
  constructor(cards?: Poker[]) {
    if (cards) {
      this._pokers = cards;
    } else {
      this.init();
    }
  }
  private init() {
    const colors = Object.keys(Color);
    console.log(colors);
    for (let i = 1; i < 14; i++) {
      colors.forEach(item => {
        this._pokers.push({
          color: item,
          num: `${i}`,
        })
      })
    }
  }

  printPoker() {
    let str = '';
    this._pokers.forEach(item => {
      str += (item.color + item.num + '\t');
    })
    console.log(str);
  }

  /* 洗牌 */
  Shuffle() {
    for (let i = 0; i < this._pokers.length; i++) {
      const num = this.createRandom(0, this._pokers.length);
      const temp = this._pokers[i];
      this._pokers[i] = this._pokers[num];
      this._pokers[num] = temp;
    }
  }

  /* 发牌 */
  Licensing() {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck;
    player1 = this.takeCards(16);
    player2 = this.takeCards(16);
    player3 = this.takeCards(16);
    left = this.takeCards(3);
    return {
      player1,
      player2,
      player3,
      left
    }
  }

  /* 重新整理牌组 */
  resetDeck() {
    const temp = {};
    this._pokers.forEach(item => { 
      if (temp[item.num]) {
        temp[item.num].push(item);
      } else {
        temp[item.num] = [item];
      }
    })
    this._pokers = [];
    for (const key in temp) {
      temp[key].sort((a, b) => Color[a.color] - Color[b.color]);
      this._pokers.push(...temp[key])
    }
  }

  private takeCards(n: number): Deck {
    const cards: Poker[] = [];
    for (let i = 0; i < n; i++) {
      cards.push(this._pokers.shift() as Poker);
    }
    return new Deck(cards);
  }

  private createRandom(min: number, max: number) {
    return Math.floor(Math.random() * max + min);
  }
}