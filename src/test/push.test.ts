import { assert } from 'chai';
import { TestCircularBuffer } from './testUtils';

describe('push', () => {
  it('should push onto the buffer', () => {
    const buffer = new TestCircularBuffer(4);
    buffer.push(1);
    buffer.push(2);
    buffer.push(3);
    buffer.push(4);
    assert.deepEqual(Array.from(buffer.data), [1, 2, 3, 4]);
  });

  it('should throw when capacity is reached', () => {
    const buffer = new TestCircularBuffer(1);
    buffer.push(1);
    assert.throws(() => buffer.push(2));
  });
});
