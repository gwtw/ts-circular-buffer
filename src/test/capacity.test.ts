import { assert } from 'chai';
import { TestCircularBuffer } from './testUtils';

describe('capacity', () => {
  it('should return correct capacity', () => {
    const buffer = new TestCircularBuffer(4);
    assert.equal(buffer.capacity, 4);
    buffer.push(1);
    assert.equal(buffer.capacity, 4);
  });

  it('should retain data when resized', () => {
    const buffer = new TestCircularBuffer(3);
    buffer.push(1);
    buffer.push(2);
    buffer.push(3);
    assert.equal(buffer.pop(), 1);
    buffer.push(4);
    assert.equal(buffer.get(0), 2);
    assert.equal(buffer.get(1), 3);
    assert.equal(buffer.get(2), 4);
    buffer.capacity = 4;
    assert.equal(buffer.get(0), 2);
    assert.equal(buffer.get(1), 3);
    assert.equal(buffer.get(2), 4);
  });

  it('should throw when resizing below length', () => {
    const buffer = new TestCircularBuffer(3);
    buffer.push(1);
    buffer.push(2);
    buffer.push(3);
    assert.throws(() => buffer.capacity = 2);
  });
});
