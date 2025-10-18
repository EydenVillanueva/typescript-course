import type { ISortable } from './ISortable.js';
import { Sorter } from './Sorter.js';

export class CharatersCollection extends Sorter implements ISortable {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex]?.toLocaleLowerCase()! >
      this.data[rightIndex]?.toLocaleLowerCase()!
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];

    characters[leftIndex] = characters[rightIndex]!;
    characters[rightIndex] = temp!;

    this.data = characters.join('');
  }
}
