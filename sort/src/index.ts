import { NumberCollection } from './NumberCollection.js';
import { CharatersCollection } from './CharactersCollection.js';
import { LinkedList } from './LinkedList.js';

const charactersCollection = new CharatersCollection('sort');
charactersCollection.sort();

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();

console.log(linkedList.print());
console.log(numbersCollection.data);
console.log(charactersCollection.data);
