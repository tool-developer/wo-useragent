import UserAgent from '../esm/index';

describe('UserAgent test:', () => {

  // Internet Explorer
  const msie = {
    'windows': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
    '360': 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko',
    'qq': 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Core/1.63.5680.400 QQBrowser/10.2.1852.400; rv:11.0) like Gecko',
    'maxthon': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)',
    'theword': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)',
    'avant': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)',
    '9.0': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;',
    '8.0': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
    '7.0': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
    '6.0': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
  };
  //
  it('msie.windows test', done => {
    const ua = new UserAgent(msie.windows);
    //console.log(ua)
    expect(ua.mobile).toEqual(true)
    expect(ua.msie).toEqual(true)
    expect(ua.ie).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('9.0')
    expect(ua.browser.major).toEqual(9)
    expect(ua.windowsphone).toEqual(true)
    expect(ua['windowsphone-version']).toEqual('7.5')
    expect(ua.trident).toEqual(true)
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windowsphone')
    expect(ua.device.version).toEqual('7.5')
    expect(ua.device.major).toEqual(7)
    done();
  })

  it('msie.360 test', done => {
    const ua = new UserAgent(msie['360']);
    //console.log(unescape)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('11.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.qq test', done => {
    const ua = new UserAgent(msie['qq']);
    //console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('10.2.1852.400')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.maxthon test', done => {
    const ua = new UserAgent(msie['maxthon']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('7.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('5.1')
    expect(ua.device.major).toEqual(5)
    expect(ua['windows-version']).toEqual('5.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.theword test', done => {
    const ua = new UserAgent(msie['theword']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('7.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('5.1')
    expect(ua.device.major).toEqual(5)
    expect(ua['windows-version']).toEqual('5.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.avant test', done => {
    const ua = new UserAgent(msie['avant']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('7.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('5.1')
    expect(ua.device.major).toEqual(5)
    expect(ua['windows-version']).toEqual('5.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.9.0 test', done => {
    const ua = new UserAgent(msie['9.0']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('9.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('6.1')
    expect(ua.device.major).toEqual(6)
    expect(ua['windows-version']).toEqual('6.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.8.0 test', done => {
    const ua = new UserAgent(msie['8.0']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('8.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('6.0')
    expect(ua.device.major).toEqual(6)
    expect(ua['windows-version']).toEqual('6.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.7.0 test', done => {
    const ua = new UserAgent(msie['7.0']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('7.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('6.0')
    expect(ua.device.major).toEqual(6)
    expect(ua['windows-version']).toEqual('6.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('msie.6.0 test', done => {
    const ua = new UserAgent(msie['6.0']);
    // console.log(ua)
    expect(ua.trident).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('6.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('5.1')
    expect(ua.device.major).toEqual(5)
    expect(ua['windows-version']).toEqual('5.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  // Microsoft Edge
  const edge = {
    'windows': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299',
    'mac': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.52'
  }


  it('edge windows test', done => {
    const ua = new UserAgent(edge['windows']);
    //console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.edge).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('58.0.3029.110')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('edge mac test', done => {
    const ua = new UserAgent(edge['mac']);
    // console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.edge).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('93.0.4577.82')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('mac')
    expect(ua.device.version).toEqual('10.15.7')
    expect(ua.device.major).toEqual(10)
    expect(ua['mac-version']).toEqual('10.15.7')
    expect(ua.desktop).toEqual(true)
    done();
  })


  // Firefox
  const firefox = {
    'windows': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0',
    'mac': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0'
  };


  it('firefox windows test', done => {
    const ua = new UserAgent(firefox['windows']);
    //console.log(ua)
    expect(ua.firefox).toEqual(true)
    expect(ua.mozilla).toEqual(true)
    expect(ua.browser.name).toEqual('firefox')
    expect(ua.browser.version).toEqual('47.0')
    expect(ua.engine).toEqual('gecko')
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('6.1')
    expect(ua.device.major).toEqual(6)
    expect(ua['windows-version']).toEqual('6.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('firefox mac test', done => {
    const ua = new UserAgent(firefox['mac']);
    //console.log(ua)
    expect(ua.firefox).toEqual(true)
    expect(ua.mozilla).toEqual(true)
    expect(ua.browser.name).toEqual('firefox')
    expect(ua.browser.version).toEqual('91.0')
    expect(ua.engine).toEqual('gecko')
    expect(ua.device.name).toEqual('mac')
    expect(ua.device.version).toEqual('10.15')
    expect(ua.device.major).toEqual(10)
    expect(ua['mac-version']).toEqual('10.15')
    expect(ua.desktop).toEqual(true)
    done();
  })



  // Chrome
  const chrome = {
    'linux': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    'windows': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    'mac': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
    '360': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    'sogou': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 SE 2.X MetaSr 1.0',
    'qq': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.5680.400 QQBrowser/10.2.1852.400'
  };


  it('chrome linux test', done => {
    const ua = new UserAgent(chrome['linux']);
    // console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('51.0.2704.103')
    expect(ua.engine).toEqual('webkit')
    expect(ua.linux).toEqual(true)
    expect(ua.device.name).toEqual('linux')
    //expect(ua.device.version).toEqual('10.15')
    //expect(ua.device.major).toEqual(10)
    //expect(ua['mac-version']).toEqual('10.15')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('chrome windows test', done => {
    const ua = new UserAgent(chrome['windows']);
    // console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('67.0.3396.99')
    expect(ua.engine).toEqual('webkit')
    expect(ua.windows).toEqual(true)
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('chrome 360 test', done => {
    const ua = new UserAgent(chrome['360']);
    //console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('63.0.3239.132')
    expect(ua.engine).toEqual('webkit')
    expect(ua.windows).toEqual(true)
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('chrome sogou test', done => {
    const ua = new UserAgent(chrome['sogou']);
    //console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.browser.name).toEqual('chrome')
    expect(ua.browser.version).toEqual('58.0.3029.110')
    expect(ua.engine).toEqual('webkit')
    expect(ua.windows).toEqual(true)
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('chrome qq test', done => {
    const ua = new UserAgent(chrome['qq']);
    //console.log(ua)
    expect(ua.chrome).toEqual(true)
    expect(ua.qq).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('10.2.1852.400')
    expect(ua.engine).toEqual('webkit')
    expect(ua.windows).toEqual(true)
    expect(ua.device.name).toEqual('windows')
    expect(ua.device.version).toEqual('10.0')
    expect(ua.device.major).toEqual(10)
    expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })


  // Opera
  const opera = {
    'linux': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41',
    'mac': 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11',
    'windows': 'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11',
    'android': 'Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10',
  }


  it('opera linux test', done => {
    const ua = new UserAgent(opera['linux']);
    //console.log(ua)
    expect(ua.opera).toEqual(true)
    expect(ua.linux).toEqual(true)
    expect(ua['opera-version']).toEqual('38.0.2220.41')
    expect(ua.browser.name).toEqual('opera')
    expect(ua.browser.version).toEqual('38.0.2220.41')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('linux')
    //expect(ua.device.version).toEqual('10.0')
    //expect(ua.device.major).toEqual(10)
    //expect(ua['windows-version']).toEqual('10.0')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('opera mac test', done => {
    const ua = new UserAgent(opera['mac']);
    //console.log(ua)
    expect(ua.opera).toEqual(true)
    expect(ua.mac).toEqual(true)
    expect(ua['opera-version']).toEqual('11.11')
    expect(ua.browser.name).toEqual('opera')
    expect(ua.browser.version).toEqual('11.11')
    expect(ua.engine).toEqual('presto')
    expect(ua.device.name).toEqual('mac')
    expect(ua.device.version).toEqual('10.6.8')
    expect(ua.device.major).toEqual(10)
    //expect(ua['mac-version']).toEqual('10.6.8')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('opera windows test', done => {
    const ua = new UserAgent(opera['windows']);
    //console.log(ua)
    expect(ua.opera).toEqual(true)
    expect(ua.windows).toEqual(true)
    expect(ua.browser.name).toEqual('opera')
    expect(ua.browser.version).toEqual('11.11')
    expect(ua.engine).toEqual('presto')
    expect(ua.device.version).toEqual('6.1')
    expect(ua.desktop).toEqual(true)
    done();
  })

  it('opera android test', done => {
    const ua = new UserAgent(opera['android']);
    //console.log(ua)
    expect(ua.opera).toEqual(true)
    expect(ua.android).toEqual(true)
    expect(ua.browser.name).toEqual('opera')
    expect(ua.browser.version).toEqual('11.10')
    expect(ua.engine).toEqual('presto')
    expect(ua.device.version).toEqual('2.3.4')
    done();
  })



  // Safari
  const safari = {
    'mac': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
    'windows': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50',
    'iphone': '(iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    'ipod': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
    'ipad': 'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
    'android': 'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
  }

  it('safari mac test', done => {
    const ua = new UserAgent(safari['mac']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.mac).toEqual(true)
    expect(ua.desktop).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('14.1.2')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('10.15.7')
    done();
  })

  it('safari windows test', done => {
    const ua = new UserAgent(safari['windows']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.windows).toEqual(true)
    expect(ua.desktop).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('5.1')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('6.1')
    done();
  })

  it('safari iphone test', done => {
    const ua = new UserAgent(safari['iphone']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.iphone).toEqual(true)
    expect(ua.iphone10).toEqual(true)
    expect(ua.ios).toEqual(true)
    //expect(ua.desktop).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('10.0')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('10.3.1')
    done();
  })

  it('safari ipod test', done => {
    const ua = new UserAgent(safari['ipod']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.ipod).toEqual(true)
    expect(ua.iphone4).toEqual(true)
    expect(ua.ios).toEqual(true)
    //expect(ua.desktop).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('5.0.2')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('4.3.3')
    done();
  })

  it('safari ipad test', done => {
    const ua = new UserAgent(safari['ipad']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.ipad).toEqual(true)
    expect(ua.ios).toEqual(true)
    expect(ua.pad).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('5.0.2')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('4.3.3')
    done();
  })

  it('safari android test', done => {
    const ua = new UserAgent(safari['android']);
    //console.log(ua)
    expect(ua.safari).toEqual(true)
    expect(ua.android).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('4.0')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('2.3.7')
    done();
  })


  // 
  const qq = {
    'android1': 'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    'android2': 'Mozilla/5.0 (Linux; U; Android 5.1; zh-cn; OPPO R9tm Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/7.5 Mobile Safari/537.36',
    'android3': 'Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043128 Safari/537.36 V1_AND_SQ_7.0.0_676_YYB_D PA QQ/7.0.0.3135 NetType/4G WebP/0.3.0 Pixel/1080',
    'iphone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 QQ/6.7.1.416 V1_IPH_SQ_6.7.1_1_APP_A Pixel/750 Core/UIWebView NetType/4G QBWebViewType/1',
  }


  it('qq android1 test', done => {
    const ua = new UserAgent(qq['android1']);
    //console.log(ua)
    expect(ua.qq).toEqual(true)
    expect(ua.android).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('26')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('2.3.7')
    done();
  })

  it('qq android2 test', done => {
    const ua = new UserAgent(qq['android2']);
    //console.log(ua)
    expect(ua.qq).toEqual(true)
    expect(ua.android).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('7.5')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('5.1')
    done();
  })

  it('qq android3 test', done => {
    const ua = new UserAgent(qq['android3']);
    //console.log(ua)
    expect(ua.qq).toEqual(true)
    expect(ua.android).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('6.2')
    expect(ua.client.name).toEqual('qq')
    expect(ua.client.version).toEqual('7.0.0.3135')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('5.1')
    done();
  })

  it('qq iphone test', done => {
    const ua = new UserAgent(qq['iphone']);
    // console.log(ua)
    expect(ua.qq).toEqual(true)
    expect(ua.iphone).toEqual(true)
    expect(ua.mobile).toEqual(true)
    //expect(ua.browser.name).toEqual('qq')
    //expect(ua.browser.version).toEqual('6.7.1.416')
    expect(ua.client.name).toEqual('qq')
    expect(ua.client.version).toEqual('6.7.1.416')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.version).toEqual('10.2.1')
    done();
  })

  // blackberry
  const blackberry = {
    '1':'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+',
    '2':'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+',
    '3':'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
  };
  it('blackberry1 test', done => {
    const ua = new UserAgent(blackberry['1']);
    //console.log(ua)
    expect(ua.blackberry).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('6.0.0.337')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('blackberry')
    expect(ua.device.version).toEqual('9800')
    done();
  })
  it('blackberry2 test', done => {
    const ua = new UserAgent(blackberry['2']);
    //console.log(ua)
    expect(ua.blackberry).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('10.0.9.2372')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('blackberry')
    expect(ua.device.version).toEqual('10')
    done();
  })
  it('blackberry3 test', done => {
    const ua = new UserAgent(blackberry['3']);
    //console.log(ua)
    expect(ua.blackberry).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.pad).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('7.2.1.0')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('blackberry')
    expect(ua.device.version).toEqual('2.1.0')
    done();
  })
  
  /*//
  const touchpad = {
    'hp': 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
    'moto': 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13'
  }

  it('touchpad hp test', done => {
    const ua = new UserAgent(touchpad['hp']);
    // console.log(ua)
    expect(ua.touchpad).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.pad).toEqual(true)
    expect(ua.browser.name).toEqual('wos')
    expect(ua.browser.version).toEqual('233.70')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('hpw')
    expect(ua.device.version).toEqual('3.0.0')
    done();
  })

  it('touchpad moto test', done => {
    const ua = new UserAgent(touchpad['moto']);
    //console.log(ua)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('safari')
    expect(ua.browser.version).toEqual('4.0')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('android')
    expect(ua.device.version).toEqual('3.0')
    done();
  })
  */
  //
  /*const nokia = {
    'n97': 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124'
  }
  it('nokia n97 test', done => {
    const ua = new UserAgent(nokia['n97']);
    console.log(ua)
    expect(ua.symbian).toEqual(true)
    expect(ua.mobile).toEqual(true)
    //expect(ua.pad).toEqual(true)
    expect(ua.browser.name).toEqual('ng')
    expect(ua.browser.version).toEqual('7.1.18124')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('symbian')
    expect(ua.device.version).toEqual('9.4')
    done();
  })*/
  //
  const windowsphone = {
    'mango': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)',
  }

  it('windowsphone mango test', done => {
    const ua = new UserAgent(windowsphone['mango']);
    //console.log(ua)
    expect(ua.windowsphone).toEqual(true)
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('msie')
    expect(ua.browser.version).toEqual('9.0')
    expect(ua.engine).toEqual('trident')
    expect(ua.device.name).toEqual('windowsphone')
    expect(ua.device.version).toEqual('7.5')
    done();
  })
  //
  const micromessenger = {
    'android': 'Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043220 Safari/537.36 MicroMessenger/6.5.7.1041 NetType/4G Language/zh_CN',
    'iphone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 MicroMessenger/6.5.6 NetType/4G Language/zh_CN',
  }

  it('micromessenger android test', done => {
    const ua = new UserAgent(micromessenger['android']);
    //console.log(ua)
    expect(ua.micromessenger).toEqual(true)
    expect(ua.webchat).toEqual(true)
    expect(ua['micromessenger-version']).toEqual( '6.5.7.1041')
    expect(ua.mobile).toEqual(true)
    expect(ua.browser.name).toEqual('qq')
    expect(ua.browser.version).toEqual('6.2')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('android')
    expect(ua.device.version).toEqual('5.1')
    done();
  })  

  it('micromessenger iphone test', done => {
    const ua = new UserAgent(micromessenger['iphone']);
    //console.log(ua)
    expect(ua.micromessenger).toEqual(true)
    expect(ua.webchat).toEqual(true)
    expect(ua['micromessenger-version']).toEqual( '6.5.6')
    expect(ua.mobile).toEqual(true)
    //expect(ua.browser.name).toEqual('qq')
    //expect(ua.browser.version).toEqual('6.2')
    expect(ua.engine).toEqual('webkit')
    expect(ua.device.name).toEqual('iphone')
    expect(ua.device.version).toEqual('10.2.1')
    done();
  })  
  //
  const uc = {
    'uc': 'UCWEB7.0.2.37/28/999',
    'nokia': "NOKIA5700/ UCWEB7.0.2.37/28/999",
    'wave': ' Openwave/ UCWEB7.0.2.37/28/999',
    'opera': 'Mozilla/4.0 (compatible; MSIE 6.0; ) Opera/UCWEB7.0.2.37/28/999'
  }

  it('uc uc test', done => {
    const ua = new UserAgent(uc['uc']);
    //console.log(ua)
    expect(ua.uc).toEqual(true)
    expect(ua.browser.name).toEqual('uc')
    expect(ua.browser.version).toEqual('7.0.2.37')
    
    done();
  }) 
  it('uc nokia test', done => {
    const ua = new UserAgent(uc['nokia']);
    //console.log(ua)
    expect(ua.uc).toEqual(true)
    expect(ua.browser.name).toEqual('uc')
    expect(ua.browser.version).toEqual('7.0.2.37')
    
    done();
  }) 
  it('uc wave test', done => {
    const ua = new UserAgent(uc['wave']);
    //console.log(ua)
    expect(ua.uc).toEqual(true)
    expect(ua.browser.name).toEqual('uc')
    expect(ua.browser.version).toEqual('7.0.2.37')
    
    done();
  }) 
  it('uc opera test', done => {
    const ua = new UserAgent(uc['opera']);
    //console.log(ua)
    expect(ua.uc).toEqual(true)
    expect(ua.browser.name).toEqual('uc')
    expect(ua.browser.version).toEqual('7.0.2.37')
    
    done();
  }) 

  const taobao = {
    '1':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11',
  }
  //
  UserAgent.custom({
    taobao: {
      regex:/(?:tao|taobao)browser(?:.*version|)\/([\d.]+)/,
      browser:true
    }
  })
  it('taobao 1 test', done => {
    const ua = new UserAgent(taobao['1']);
    //console.log(ua)
    expect(ua.taobao).toEqual(true)
    expect(ua.browser.name).toEqual('taobao')
    expect(ua.browser.version).toEqual('2.0')
    
    done();
  }) 

  
  const liebao = {
    '1':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER',
    '2':'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)',
    '3':'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)'
  }

  it('liebao 1 test', done => {
    const ua = new UserAgent(liebao['1']);
    //console.log(ua)
    expect(ua.liebao).toEqual(true)
    expect(ua.browser.name).toEqual('liebao')
    //expect(ua.browser.version).toEqual('2.0')
    
    done();
  }) 
  it('liebao 2 test', done => {
    const ua = new UserAgent(liebao['2']);
    //console.log(ua)
    expect(ua.liebao).toEqual(true)
    expect(ua.browser.name).toEqual('liebao')
    //expect(ua.browser.version).toEqual('2.0')
    
    done();
  }) 
  it('liebao 3 test', done => {
    const ua = new UserAgent(liebao['3']);
    //console.log(ua)
    expect(ua.liebao).toEqual(true)
    expect(ua.browser.name).toEqual('liebao')
    //expect(ua.browser.version).toEqual('2.0')
    
    done();
  }) 
})