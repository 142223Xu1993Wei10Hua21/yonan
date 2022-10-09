
// let baseUrl = 'http://hczhfw.hzchwy.com/hardware'  // 接口域名 
let baseUrl = 'http://192.168.0.39:8002'  // 接口域名 

// let baseUrl = 'http://10.45.88.20:8002'  // 接口域名 

// let baseUrl = 'http://xc-test.yafco.com:8080/api'

function randomString() {
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
      a = t.length,
      n = "";
    for (let i = 0; i < 16; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
  }
  // 后端提供
  const only = '@1245874158_@ZLOSHENRCK_@2147854854_#END';//普通接口请求的KEY，
  const business = '@2549625845_@USJDHEYSFL_@9014258749_#END';//业务接口请求的KEY，
  /**
   * 判断是否为空
   */
  function empty(value) {
    switch (typeof value) {
      case 'undefined':
        return true;
      case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
        break;
      case 'boolean':
        if (!value) return true;
        break;
      case 'number':
        // if (0 === value || isNaN(value)) return true;
        if (isNaN(value)) return true;
        break;
      case 'object':
        if (null === value || value.length === 0) return true;
        for (var i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  
  /**
   * 是否对象
   */
  function object(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  // 业务签名 字典排序 生成字符串
  const ObjSort = function (arys) {
    var str = "", newStr = "";
    // 判断是否为formData实例
    if (arys instanceof FormData) {
      str = 'moduleName' + '=' + arys.get('moduleName') + '&'
      newStr = md5(str + business).toLowerCase()
    } else {
      if (object(arys)) {
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
        var newkey = Object.keys(arys).sort();
        for (var i = 0; i < newkey.length; i++) {
          if (!empty(arys[newkey[i]])) {
            str += newkey[i] + "=" + arys[newkey[i]] + '&'
            //向新创建的对象中按照排好的顺序依次增加键值对
          }
        }
        newStr = md5(str + business).toLowerCase()
      } else {
        newStr = md5(business).toLowerCase()
      }
    }
    // console.log(str + business)
    return newStr;
  }
  const configure = function (data,contentType) {
    // 时间戳
    const timestamp = new Date().getTime();//获取时间戳
    const verificationStr = randomString();//获取16位随机字符串
    const sign_ordinary = md5(verificationStr + only + timestamp).toLowerCase(); //普通接口签名
    const headers = {}
    headers.timestamp = timestamp //时间戳
    headers.verificationStr = verificationStr //16位随机字符串
    headers.apiSign = sign_ordinary //MD5加密字符串 
    if (contentType == 'application/json') {
      headers.parameterSign = ObjSort(config.params)
    } else {
      // 业务签名
      headers.parameterSign = ObjSort(data)
    //   if (type == "post") {
    //     if (config.data instanceof FormData) {
    //       headers.parameterSign = ObjSort(data)
    //     } else {
    //       headers.parameterSign = ObjSort(qs.parse(data))
    //     }
    //   } else if (type == "get") {
    //     headers.parameterSign = ObjSort(data)
    //   }
    }
  
    return headers
  }
// Ajax请求封装
// callback：请求返回，
// data：请求参数，
// url:请求路径，
// type，请求类型 post/get。
// contentType:请求头类型 application/json   ||   application/x-www-form-urlencoded    不是要求json格式可以不用传
function Ajax(callback, data ,url,type,contentType) {
  $.ajax({
    type,
    url: baseUrl + url,
    data,
    headers: configure(data,contentType),
    dataType: "json",
    success: callback
  });
}