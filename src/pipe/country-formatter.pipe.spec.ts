import { CountryFormatterPipe } from './country-formatter.pipe';

describe('CountryFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
