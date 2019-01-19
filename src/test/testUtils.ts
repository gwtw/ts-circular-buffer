import { CircularBuffer } from '../circularBuffer';

export class TestCircularBuffer extends CircularBuffer {
  public get data(): Uint32Array { return this._data; }
  public get start(): number { return this._start; }
  public get length(): number { return this._length; }
}
