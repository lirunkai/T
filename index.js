var toString = Object.prototype.toString;

var T = {
  // 是否是数组
  isArray: function(val) {
    return toString.call(val) ===  '[object Array]';
  },
  // 是否是原始二进制数据缓冲区
  isArrayBuffer: function(val){
    return toString.call(val) === '[object ArrayBuffer]';
  },
  // FormData
  isFormData: function(val){
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  },
  // string
  isString: function(val){
    return typeof val === 'string';
  },
  isNumber: function(val){
    return typeof val === 'number';
  },
  isUndefined: function(val){
    return typeof val === 'undefined'
  },
  isObject: function(val){
    return val !== null && typeof val === 'object'
  },
  isDate: function(val){
    return toString.call(val) === '[object Date]';
  },
  isFile: function(val){
    return toString.call(val) === '[object File]';
  },
  isBlob: function(val){
    return toString.call(val) === '[object Blob]';
  },
  isFunction: function(val){
    return toString.call(val) === '[object Function]';
  },
  isURLSearchParams: function(val){
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
}

module.exports = {
  T
}