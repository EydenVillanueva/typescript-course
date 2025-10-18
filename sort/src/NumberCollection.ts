import type { ISortable } from './ISortable.js';

export class NumberCollection implements ISortable {
  constructor(public data: number[]) {}

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
