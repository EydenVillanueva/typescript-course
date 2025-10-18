import type { ISortable } from './ISortable.js';
import { Sorter } from './Sorter.js';

export class NumberCollection extends Sorter implements ISortable {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (this.data === undefined) throw new Error('Data is undefined');
    return this.data[leftIndex]! > this.data[rightIndex]!;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex]!;
    this.data[rightIndex] = temp!;
  }

  get length(): number {
    return this.data.length;
  }
}
