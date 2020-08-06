import { Deck } from "./pokers";


const decks = new Deck();


decks.printPoker();

console.log('=========洗牌之前=========')
decks.Shuffle();
console.log('=========洗牌之后=========')
decks.printPoker();
console.log('=========发牌之前=========')
const results = decks.Licensing();
console.log('=========发牌之后=========')
decks.printPoker();
console.log('=========玩家1的牌=========')
results.player1.printPoker();
console.log('=========玩家2的牌=========')
results.player2.printPoker();
console.log('=========玩家3的牌=========')
console.log('=========玩家3的牌整理之前=========')
results.player3.printPoker();
results.player3.resetDeck();
console.log('=========玩家3的牌整理之后=========')
results.player3.printPoker();
console.log('=========剩余的牌=========')
results.left.printPoker();



