import { Sorter } from './Sorter.js';
import { NumberCollection } from './NumberCollection.js';
import { CharatersCollection } from './CharactersCollection.js';

// const numbersCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);

const charactersCollection = new CharatersCollection('sort');
const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(sorter.collection);
