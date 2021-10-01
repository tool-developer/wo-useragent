import UserAgent from '../esm/index';

describe('UserAgent.checkVersion test:', () => {
  //
  it('check version test', done => {
    //
    expect(UserAgent.checkVersion('1.1.1','1.1.1')).toEqual(true)
    expect(UserAgent.checkVersion('1.1.2','1.1.1')).toEqual(true)
    expect(UserAgent.checkVersion('1.2.1','1.1.1')).toEqual(true)
    expect(UserAgent.checkVersion('2.1.1','1.1.1')).toEqual(true)

    //
    expect(UserAgent.checkVersion('1.1.1',[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion('1.1.2',[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion('1.2.1',[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion('2.1.1',[1,1,1])).toEqual(true)
    //
    expect(UserAgent.checkVersion([1,1,1],[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion([1,1,2],[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion([1,2,1],[1,1,1])).toEqual(true)
    expect(UserAgent.checkVersion([2,1,1],[1,1,1])).toEqual(true)

    //
    expect(UserAgent.checkVersion('1.1.1','2.2.2')).toEqual(false)
    expect(UserAgent.checkVersion('1.1.2','2.2.2')).toEqual(false)
    expect(UserAgent.checkVersion('1.2.1','2.2.2')).toEqual(false)
    expect(UserAgent.checkVersion('2.1.1','2.2.2')).toEqual(false)
    //
    expect(UserAgent.checkVersion('1.1.1',[1,0,1])).toEqual(true)
    expect(UserAgent.checkVersion('1.1.1',[1,0])).toEqual(true)
    expect(UserAgent.checkVersion('1.1.1','1.1')).toEqual(true)
    expect(UserAgent.checkVersion('1.1.1','1.0')).toEqual(true)

    //
    done();
  })
})