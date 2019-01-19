import { assert } from 'chai';
import { TestCircularBuffer } from './testUtils';

describe('pop', () => {
  it('should pop from the buffer', () => {
    const buffer = new TestCircularBuffer(4);
    buffer.push(1);
    buffer.push(2);
    buffer.push(3);
    buffer.push(4);
    assert.equal(buffer.pop(), 1);
    assert.equal(buffer.pop(), 2);
    assert.equal(buffer.pop(), 3);
    assert.equal(buffer.pop(), 4);
  });

  it('should throw when popping an empty buffer', () => {
    const buffer = new TestCircularBuffer(1);
    buffer.push(1);
    assert.equal(buffer.pop(), 1);
    assert.throws(() => buffer.pop());
  });

  it('should adjust start and length correctly', () => {
    const buffer = new TestCircularBuffer(1);
    buffer.push(1);
    assert.equal(buffer.start, 0);
    assert.equal(buffer.length, 1);
    assert.equal(buffer.pop(), 1);
    assert.equal(buffer.start, 1);
    assert.equal(buffer.length, 0);
  });
});
