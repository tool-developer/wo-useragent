function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 规则处理
 */
var DefaultRules = {
  //
  mobile: /mobile\/\d+/,
  //
  pad: /ipad|touchpad|tablet\sos/,
  //
  // maxthon:/maxthon/,
  // theword:/the\sword/,
  firefox: {
    alias: 'mozilla',
    regex: /firefox\/([\d.]+)/,
    browser: true
  },
  chrome: {
    regex: /(?:chrome|crios)\/([\d.]+)/,
    browser: true
  },
  safari: {
    regex: /version\/([\d.]+).*?\ssafari/,
    browser: true
  },
  opera: {
    regex: /(?:opera|opr)(?:.*version|)\/([\d.]+)/,
    browser: true
  },
  msie: {
    alias: 'ie',
    regex: /(?:msie\s|trident.*?\srv:)([\d.]+)/,
    browser: true
  },
  edge: {
    regex: /edge?\/([\d.]+)/
  },
  qq: {
    regex: /m?qq(?:browser)?\/([\d.]+)/,
    browser: /m?qq(?:browser)\/([\d.]+)/,
    filter: ['safari'],
    client: /qq\/([\d.]+)/
  },

  /*wos:{
    regex:/wosbrowser\/([\d.]+)/,
    browser:true,
    filter:['safari']
  },
  dolfin: {
    regex:/dolfin(?:.*version|)\/([\d.]+)/,
    browser:true
  }, //
  silk: {
    regex:/silk(?:.*version|)\/([\d.]+)/,
    browser:true
  }, //
  */
  uc: {
    regex: /(?:uc)(?:web|browser)(?:.*version|\/)?([\d.]+)/,
    browser: true,
    mobile: true
  },
  //

  /*taobao: {
    regex:/(?:tao|taobao)browser(?:.*version|)\/([\d.]+)/,
    browser:true
  },*/
  liebao: {
    regex: /(?:lb)browser(?:.*? rv:([\d.]+)|)/,
    browser: true
  },

  /*ng:{
    regex:/browserng\/([\d.]+)/,
    browser:true
  },*/
  //
  micromessenger: {
    regex: /micromessenger\/([\d.]+)/,
    alias: 'webchat',
    devtools: 'wechatdevtools',
    desktop: 'windowswechat'
  },
  //engine
  webkit: {
    regex: /webkit\/(?:[\d.]+)/,
    engine: true
  },
  gecko: {
    regex: /gecko\/(?:[\d.]+)/,
    engine: true
  },
  // opera
  presto: {
    regex: /presto\/(?:[\d.]+)/,
    engine: true
  },
  //
  trident: {
    regex: /trident\/(?:[\d.]+)/,
    engine: true
  },
  //
  mac: {
    regex: /(?:mac os x)\s+([\w.]+)/,
    device: true
  },
  //
  windows: {
    regex: /(?:windows\snt)\s+([\d.]+)/,
    device: true
  },
  //
  linux: {
    regex: /linux/,
    device: true
  },
  chromeos: {
    regex: /cromeos/,
    device: true
  },
  //
  ios: /(i(?:pad|phone|pod))(?:.*)cpu(?: i(?:pad|phone|pod))? os (\d+(?:[\.|_]\d+){1,})/,
  android: {
    regex: /(?:android)\s+([\d.]+)/,
    device: true,
    mobile: true
  },
  windowsphone: {
    regex: /windows\sphone\sos\s([\d.]+)/,
    device: true,
    mobile: true
  },
  //
  ipad: {
    regex: /(?:ipad).*os\s([\d_]+)/,
    device: true,
    mobile: true
  },
  iphone: {
    regex: /(?:iphone\sos)\s(\w+)/,
    device: true,
    major: true,
    mobile: true
  },
  ipod: {
    regex: /(?:ipod)(?:.*)cpu(?: iphone)?\sos\s(\w+)/,
    device: true,
    mobile: true
  },
  touchpad: {
    regex: /touchpad\/([\d.]+)/,
    device: true,
    mobile: true
  },
  blackberry: {
    regex: /(?:playbook|blackberry|bb).*?(?:tablet\sos)?\s?([\d.]+)/,
    device: true,
    mobile: true //filter:['safari']

  }
  /*rimtablet:{
    regex: /rimtablet/,
    device:true,
    mobile:true
  }, //
  bada: {
    regex:/bada/,
    device:true,
    mobile:true
  }, //
  hpw: {
    alias:'hp',
    regex:/(?:webos|hpwos)[\s\/]([\d.]+)/,
    device:true,
    mobile:true
  },*/

  /*symbian:{
    regex:/symbianos\/([\d.]+)/,
    device:true,
    mobile:true
  },*/

};

function UserAgent(ua) {
  //
  ua = (ua || navigator.userAgent).toLowerCase();
  var res = {}; //

  function handle(rule) {
    //
    if (rule instanceof RegExp) {
      if (rule.test(ua)) {
        //
        return true;
      }
    } else if (typeof rule === 'string') {
      //
      return ua.indexOf(rule) !== -1;
    } //


    return !!rule;
  } //


  function handleVersion(name, value) {
    //
    if (value) {
      var version = value.replace(/_/g, '.');

      var _version$split = version.split('.'),
          _version$split2 = _slicedToArray(_version$split, 3),
          major = _version$split2[0],
          minor = _version$split2[1],
          patch = _version$split2[2]; //


      return {
        name: name,
        version: version,
        major: parseInt(major),
        minor: minor !== undefined ? parseInt(minor) : minor,
        patch: patch !== undefined ? parseInt(patch) : patch
      };
    }

    return {
      name: name
    };
  }

  function handleRule(key, rule, r) {
    //
    r = rule instanceof RegExp ? rule.exec(ua) : r;

    if (r) {
      //
      return handleVersion(key, r[1]);
    }
  } //


  var keys = Object.keys(DefaultRules);
  var correction = [];
  keys.forEach(function (key) {
    //
    var rule = DefaultRules[key]; // [rule]:/regex/

    if (rule instanceof RegExp) {
      //
      rule = {
        regex: rule
      };
    } //


    var _rule = rule,
        regex = _rule.regex,
        browser = _rule.browser,
        alias = _rule.alias,
        engine = _rule.engine,
        device = _rule.device,
        devtools = _rule.devtools,
        desktop = _rule.desktop,
        major = _rule.major,
        mobile = _rule.mobile,
        filter = _rule.filter,
        client = _rule.client; //

    var r = regex.exec(ua);

    if (r) {
      var v = handleVersion(key, r[1]); //

      res[key] = true; //

      if (alias) {
        res[alias] = true;
      }

      if (filter) {
        correction.push.apply(correction, _toConsumableArray(filter));
      } //


      if (mobile && !res['mobile']) {
        //
        res['mobile'] = true;
      } // iphone6 = true


      if (major && r[1]) {
        //
        var name = v.name,
            _major = v.major; //

        res[[name, _major].join('')] = true;
      } // [iphone-version] = 6.0.1


      if (r[1]) {
        //
        var _name = v.name,
            version = v.version; //

        res[[_name, 'version'].join('-')] = version;
      }
    } // {chrome:true,version:'79.0.1',major:79,minor:0,patch:1}


    if (browser) {
      var t = handleRule(key, browser, r);

      if (t) {
        //
        res['browser'] = t;
      }
    } // client


    if (client) {
      var _t = handleRule(key, client, r);

      if (_t) {
        //
        res['client'] = _t;
      }
    } // {iphone:true,device:'iphone',version:'9.0.1',major:9,minor:0,patch:1}


    if (device) {
      var _t2 = handleRule(key, device, r);

      if (_t2) {
        //
        res['device'] = _t2;
      }
    } // {webkit:true,engine:'webkit'}


    if (engine) {
      var _t3 = handleRule(key, engine, r);

      if (_t3) {
        //
        res['engine'] = _t3.name;
      }
    } // devtools = true


    if (devtools) {
      //
      var _r = handle(devtools);

      if (_r) {
        //
        res['devtools'] = _r;
      }
    } // desktop = true


    if (desktop) {
      //
      var _r2 = handle(desktop);

      if (_r2) {
        //
        res['desktop'] = _r2;
      }
    }
  }); //

  if (!res.mobile) {
    //
    res.desktop = true;
  } // 数据修正处理


  correction.forEach(function (rule) {
    //
    delete res[rule];
    delete res[[rule, 'version'].join('-')];
  }); //

  if (res.trident) {
    //
    res['msie'] = res['msie'] || true;
    res['ie'] = res['ie'] || true;
    res['browser'] = res['browser'] || {};
    res['browser']['name'] = res['browser']['name'] || 'msie';
  } else if (res.msie) {
    //
    res['trident'] = true;
    res['engine'] = 'trident';
  } //


  var DOMWindow = DOMWindow || {};

  if (DOMWindow && DOMWindow.UCNewsJSController) {
    res['uc'] = true;
    res['browser'] = 'uc';
  } //


  return res;
}
/**
 * 自定义规则处理
 * 
 * {
 *  micromessager:{
 *    micromessager:/micromessenger\/([\d.]+)/,
 *    devtools:'wechatdevtools'
 *  }
 * }
 * @param {*} rules 
 */


UserAgent.custom = function (rules) {
  //
  DefaultRules = _objectSpread(_objectSpread({}, DefaultRules), rules || {});
}; //


var checkV = function checkV(cv, v) {
  cv = parseInt(cv, 10) || 0;
  v = parseInt(v, 10) || 0; //

  if (cv > v) {
    //
    return true;
  }

  if (cv < v) {
    //
    return false;
  }

  return -1;
};
/**
 * 大于或等于某个版本
 * @param {*} currentVersion 
 * @param {*} checkVersion 
 * @returns 
 */


UserAgent.checkVersion = function (currentVersion, checkVersion) {
  // 外部调用传入为undefine
  if (!(currentVersion && checkVersion)) {
    //
    return false;
  } //


  if (typeof currentVersion === 'string') {
    //
    currentVersion = currentVersion.split('.');
  } //


  if (typeof checkVersion === 'string') {
    //
    checkVersion = checkVersion.split('.');
  } //


  var _checkVersion = checkVersion,
      _checkVersion2 = _slicedToArray(_checkVersion, 3),
      v1 = _checkVersion2[0],
      v2 = _checkVersion2[1],
      v3 = _checkVersion2[2];

  var _currentVersion = currentVersion,
      _currentVersion2 = _slicedToArray(_currentVersion, 3),
      cv1 = _currentVersion2[0],
      cv2 = _currentVersion2[1],
      cv3 = _currentVersion2[2]; //


  var r1 = checkV(cv1, v1);

  if (r1 !== -1) {
    //
    return r1;
  }

  var r2 = checkV(cv2, v2);

  if (r2 !== -1) {
    //
    return r2;
  }

  var r3 = checkV(cv3, v3);

  if (r3 !== -1) {
    //
    return r3;
  } // =


  return true;
};

export { UserAgent as default };
