/**
 * @license
 * Copyright Daniel Imms <http://www.growingwiththeweb.com>
 * Released under MIT license. See LICENSE in the project root for details.
 */

declare module '@tyriar/circular-buffer' {
  export class CircularBuffer {
    public capacity: number;

    constructor(capacity: number);

    public push(value: number): void;
    public pop(): number;
    public get(index: number): number;
  }
}
