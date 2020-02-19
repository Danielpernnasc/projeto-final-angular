import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2018-10-14 para 14/10/2018', () => {
  	const pipe = new DataBrPipe();
  	expect(pipe.transform('2018-10-14')).toEqual('14/10/2018');
  });
});

