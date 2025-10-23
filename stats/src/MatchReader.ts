import { CsvFileReader } from './CsvFileReader.js';
import { MatchResult } from './MatchResult.js';
import { dateStringToDate } from './utils.js';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow<MatchData>(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ] as MatchData;
  }
}
