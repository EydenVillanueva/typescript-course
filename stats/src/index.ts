import { MatchReader } from './MatchReader.js';
import { MatchResult } from './MatchResult.js';

const reader = new MatchReader('src/football.csv');
reader.read();

let mainUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    mainUnitedWins++;
  else if (match[1] === 'Man United' && match[5] === MatchResult.Awaywin)
    mainUnitedWins++;
}

console.log(`Man United won ${mainUnitedWins} games`);
