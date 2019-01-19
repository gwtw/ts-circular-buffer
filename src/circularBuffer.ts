/**
 * @license
 * Copyright Daniel Imms <http://www.growingwiththeweb.com>
 * Released under MIT license. See LICENSE in the project root for details.
 */

import { CircularBuffer as CircularBufferApi } from '@tyriar/circular-buffer';

export class CircularBuffer implements CircularBufferApi {
  protected _data: Uint32Array;
  protected _start: number = 0;
  protected _length: number = 0;

  constructor(
    private _capacity: number
  ) {
    this._data = new Uint32Array(this._capacity);
  }

  public get capacity(): number {
    return this._capacity;
  }

  public set capacity(newCapacity: number) {
    if (newCapacity < this._length) {
      throw new Error('Cannot reduce capacity below length');
    }
    const newData = new Uint32Array(newCapacity);
    for (let i = this._start; i < this._start + this._length; i++) {
      newData[i - this._start] = this._data[i % this._capacity];
    }
    this._data = newData;
    this._start = 0;
  }

  public push(value: number): void {
    if (this._length === this._capacity) {
      throw new Error('Cannot push, the buffer is full');
    }
    this._data[(this._start + this._length++) % this._capacity] = value;
  }

  public pop(): number {
    if (this._length === 0) {
      throw new Error('Cannot pop, the buffer is empty');
    }
    this._length--;
    return this._data[this._start++];
  }

  public get(index: number): number {
    if (index < 0 || index >= this._length) {
      throw new Error ('Cannot get, index out of bounds');
    }
    return this._data[(this._start + index) % this._capacity];
  }
}
