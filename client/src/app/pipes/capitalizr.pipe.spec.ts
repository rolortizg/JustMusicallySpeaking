import { CapitalizrPipe } from './capitalizr.pipe';

describe('CapitalizrPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizrPipe();
    expect(pipe).toBeTruthy();
  });
});
