var allElements;
var allImg;
var allFrame;
var allStyle;
var textMode;
var textTipsState;
var pinyinState;
var textbState;
var allFlag;
var allTextNode;
var backgroundColorVal;
var abtGuides = false;
var ABTjsUrl;
var ABTcssUrl;
var pinyinjsUrl;
var gbkjsUrl;
var helpHtml;
var parameter;
var reading;
var voice;
var protocol = window.location.protocol
var iconStyleUrl = protocol + '//at.alicdn.com/t/font_1825756_k8336yoov2i.css';
var cursorUrl = protocol + '//pic.yun.jeecms.com/reading/allaw.ico'
var data = {
  parameter: '',
  spd: 5,
  text: '',
  vol: 5
};
var readingMode = 1;
var voicePlay;
var docEl = document.documentElement || document.body;
var bodyEl = document.getElementsByTagName('body')[0];
var scaleNum = 1.0;

// 放大缩小兼容写法
function setScale(num) {
  docEl.style['transform'] = `scale(${num})`;
  docEl.style['transform-origin'] = 'top left';
  docEl.style['-moz-transform'] = `scale(${num})`;
  docEl.style['-moz-transform-origin'] = 'top left';
  docEl.style['-ms-transform'] = `scale(${num})`;
  docEl.style['-ms-transform-origin'] = 'top left';
  docEl.style['-webkit-transform'] = `scale(${num})`;
  docEl.style['-webkit-transform-origin'] = 'top left';
  docEl.style['-o-transform'] = `scale(${num})`;
  docEl.style['-o-transform-origin'] = 'top left';
}

function init(params) {
  allElements = docEl.getElementsByTagName("*");
  allImg = document.getElementsByTagName("img");
  allFrame = document.getElementsByTagName("iframe");
  allStyle = document.getElementsByTagName("link");
  textMode = false
  textTipsState = false
  pinyinState = false
  textbState = false
  allTextNode = new Array()
  getTextNode(docEl)
  AddTag()
  allFlag = gc('abtFlag')
  docEl.style.paddingTop = "100px";
  docEl.style.height = "100vh";
  docEl.style.overflow = "hidden";
  docEl.style.boxSizing = "border-box";
  bodyEl.style.height = '100%'
  bodyEl.style.overflowY = 'auto'
  setScale(scaleNum)
  var div = document.createElement('div')
  div.id = 'ABTInterface'
  ABTcssUrl = params.skinCssUrl
  // ABTcssUrl = './../css/skin.css'
  pinyinjsUrl = params.pinyinJsUrl
  gbkjsUrl = params.gbkJsUrl
  helpHtml = params.helpHtmlUrl
  data.parameter = params.encryptionStr
  reading = params.reading
  // reading = true
  voice = params.voice
  // voice = true
  if (reading) {
    docEl.appendChild(div)
  }
  var string1 =
    '<div class="ABTInterface_box">' +
    '<ul style="display: inline-block;width:auto">' +
    '<li onclick="ABTReset()" style="display: inline-block;">' +
    '<i class="iconfont icon-refresh-line"></i>' +
    '<p>重置</p>' +
    '</li>' +
    '<li onclick="ABTRetreat()" style="display: inline-block;">' +
    '<i class="iconfont icon-arrow-left-line"></i>' +
    '<p>后退</p>' +
    '</li>' +
    '<li onclick="ABTMakeProgress()" style="display: inline-block;">' +
    '<i class="iconfont icon-arrow-right-line"></i>' +
    '<p>前进</p>' +
    '</li>' +
    '<li onclick="ABTBigMouse()" style="display: inline-block;">' +
    '<i class="iconfont icon-Mousearrow"></i>' +
    '<p>大鼠标</p>' +
    '</li>' +
    '<li onclick="ABTGuides()" style="display: inline-block;">' +
    '<i class="iconfont icon-fuzhuxian"></i>' +
    '<p>辅助线</p>' +
    '</li>' +
    '<li style="display: inline-block;">' +
    '<i class="iconfont icon-zoom-in-line" onclick="ABTChangeScreen(1)"></i>' +
    '<i class="iconfont icon-zoom-out-line" onclick="ABTChangeScreen(2)"></i>' +
    '<p class="percentage">页面100%</p>' +
    '</li>' +
    '<li id="jia" onclick="showABTChangeColor()" style="display: inline-block;">' +
    '<i class="iconfont icon-palette-line"></i>' +
    '<i class="iconfont icon-arrow-drop-down-fill"></i>' +
    '<p>页面配色</p>' +
    '<div class="changeColor" onmouseover="mouseoverABTChangeColor()" onmouseout="mouseoutABTChangeColor()">' +
    '<p onclick="ABTChangeColor(1)">' +
    '<span style="color: #FFFFFF">黑底，白字，</span>' +
    '<span style="color: #FFFD38">黄链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(2)">' +
    '<span style="color: #FFFFFF">蓝底，白字，</span>' +
    '<span style="color: #FFFD38">黄链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(3)">' +
    '<span style="color: #1A1A1A">黄底，黑字，</span>' +
    '<span style="color: #0061FF">蓝链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(4)">' +
    '<span style="color: #1A1A1A">白底，黑字，</span>' +
    '<span style="color: #0061FF">蓝链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(5)">页面原始配色</p>' +
    '</div>' +
    ' </li>' +
    '<li onclick="ABTText()" style="display: inline-block;">' +
    '<i class="iconfont icon-font-size-"></i>' +
    '<p>纯文本</p>' +
    '</li>' +
    '<li onclick="ABTScreen()" style="display: inline-block;">' +
    '<i class="iconfont icon-monitor"></i>' +
    '<p>显示屏</p>' +
    '</li>' +
    '<li onclick="ABTHelp()" style="display: inline-block;">' +
    '<i class="iconfont icon-question-line"></i>' +
    '<p>帮助</p>' +
    '</li>' +
    '<li onclick="ABTOut()" style="display: inline-block;">' +
    '<i class="iconfont icon-login-box-line"></i>' +
    '<p>退出</p>' +
    '</li>' +
    '</ul>' +
    '</div>'
  var string2 =
    '<div class="ABTInterface_box">' +
    '<ul style="display: inline-block;width:auto">' +
    '<li onclick="ABTReset()" style="display: inline-block;">' +
    '<i class="iconfont icon-refresh-line"></i>' +
    '<p>重置</p>' +
    '</li>' +
    '<li onclick="ABTRetreat()" style="display: inline-block;">' +
    '<i class="iconfont icon-arrow-left-line"></i>' +
    '<p>后退</p>' +
    '</li>' +
    '<li onclick="ABTMakeProgress()" style="display: inline-block;">' +
    '<i class="iconfont icon-arrow-right-line"></i>' +
    '<p>前进</p>' +
    '</li>' +
    '<li onclick="ABTBigMouse()" style="display: inline-block;">' +
    '<i class="iconfont icon-Mousearrow"></i>' +
    '<p>大鼠标</p>' +
    '</li>' +
    '<li onclick="ABTGuides()" style="display: inline-block;">' +
    '<i class="iconfont icon-fuzhuxian"></i>' +
    '<p>辅助线</p>' +
    '</li>' +
    '<li style="display: inline-block;">' +
    '<i class="iconfont icon-zoom-in-line" onclick="ABTChangeScreen(1)"></i>' +
    '<i class="iconfont icon-zoom-out-line" onclick="ABTChangeScreen(2)"></i>' +
    '<p class="percentage">页面100%</p>' +
    '</li>' +
    '<li id="jia" onclick="showABTChangeColor()" style="display: inline-block;">' +
    '<i class="iconfont icon-palette-line"></i>' +
    '<i class="iconfont icon-arrow-drop-down-fill"></i>' +
    '<p>页面配色</p>' +
    '<div class="changeColor" onmouseover="mouseoverABTChangeColor()" onmouseout="mouseoutABTChangeColor()">' +
    '<p onclick="ABTChangeColor(1)">' +
    '<span style="color: #FFFFFF">黑底，白字，</span>' +
    '<span style="color: #FFFD38">黄链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(2)">' +
    '<span style="color: #FFFFFF">蓝底，白字，</span>' +
    '<span style="color: #FFFD38">黄链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(3)">' +
    '<span style="color: #1A1A1A">黄底，黑字，</span>' +
    '<span style="color: #0061FF">蓝链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(4)">' +
    '<span style="color: #1A1A1A">白底，黑字，</span>' +
    '<span style="color: #0061FF">蓝链接</span>' +
    '</p>' +
    '<p onclick="ABTChangeColor(5)">页面原始配色</p>' +
    '</div>' +
    ' </li>' +
    '<li class="audioIcon" onclick="showABTTogglarAudios()" style="display: inline-block;">' +
    '<i class="iconfont icon-volume-copy"></i>' +
    '<i class="iconfont icon-arrow-drop-down-fill"></i>' +
    '<p>声音</p>' +
    '<div class="changeAudio" onmouseover="mouseoverAudios()" onmouseout="mouseoutAudios()">' +
    '<p onclick="ABTTogglarAudios(1)">开启声音</p>' +
    '<p onclick="ABTTogglarAudios(2)">关闭声音</p>' +
    '<p onclick="ABTTogglarAudios(3)">降低音量</p>' +
    '<p onclick="ABTTogglarAudios(4)">增加音量</p>' +
    '</div>' +
    '</li>' +
    '<li onclick="showABTSpeedRegulation()" style="display: inline-block;">' +
    '<i class="iconfont icon-zhongwen"></i>' +
    '<i class="iconfont icon-arrow-drop-down-fill"></i>' +
    '<p>语速调节</p>' +
    '<div class="SpeedRegulation" onmouseover="mouseoverABTSpeedRegulation()" onmouseout="mouseoutABTSpeedRegulation()">' +
    '<p onclick="ABTSpeedRegulation(1)">降低语速</p>' +
    '<p onclick="ABTSpeedRegulation(2)">增加语速</p>' +
    '</div>' +
    '</li>' +
    '<li onclick="showABTReadingMode()" style="display: inline-block;">' +
    '<i class="iconfont icon-mic-line"></i>' +
    '<i class="iconfont icon-arrow-drop-down-fill"></i>' +
    '<p>朗读模式</p>' +
    '<div class="readingModeCheck" onmouseover="mouseoverABTReadingMode()" onmouseout="mouseoutABTReadingMode()">' +
    '<p onclick="ABTReadingMode(1)">指读</p>' +
    '<p onclick="ABTReadingMode(2)">连读</p>' +
    '</div>' +
    '</li>' +
    '<li onclick="ABTText()" style="display: inline-block;">' +
    '<i class="iconfont icon-font-size-"></i>' +
    '<p>纯文本</p>' +
    '</li>' +
    '<li onclick="ABTScreen()" style="display: inline-block;">' +
    '<i class="iconfont icon-monitor"></i>' +
    '<p>显示屏</p>' +
    '</li>' +
    '<li onclick="ABTHelp()" style="display: inline-block;">' +
    '<i class="iconfont icon-question-line"></i>' +
    '<p>帮助</p>' +
    '</li>' +
    '<li onclick="ABTOut()" style="display: inline-block;">' +
    '<i class="iconfont icon-login-box-line"></i>' +
    '<p>退出</p>' +
    '</li>' +
    '</ul>' +
    '</div>'

  var iconStyle = document.createElement("link");
  iconStyle.setAttribute("rel", "stylesheet");
  iconStyle.setAttribute("type", "text/css");
  iconStyle.setAttribute("href", iconStyleUrl);
  document.getElementsByTagName("head")[0].appendChild(iconStyle);
  var textModeStyle = document.createElement("link");
  textModeStyle.setAttribute("rel", "stylesheet");
  textModeStyle.setAttribute("type", "text/css");
  textModeStyle.setAttribute("href", ABTcssUrl);
  document.getElementsByTagName("head")[0].appendChild(textModeStyle);
  if (voice) {
    div.innerHTML = string2
  } else {
    div.innerHTML = string1
  }

  var pinyinjs = document.createElement("script");
  pinyinjs.setAttribute("type", "text/javascript");
  pinyinjs.setAttribute("charset", "gb2312");
  pinyinjs.setAttribute("src", pinyinjsUrl);
  docEl.appendChild(pinyinjs);
  var gbkjs = document.createElement("script");
  gbkjs.setAttribute("type", "text/javascript");
  gbkjs.setAttribute("charset", "UTF-8");
  gbkjs.setAttribute("src", gbkjsUrl);
  docEl.appendChild(gbkjs);
  document.getElementsByClassName('changeColor')[0].style.display = 'none'
  if (voice) {
    document.getElementsByClassName('SpeedRegulation')[0].style.display = 'none'
    document.getElementsByClassName('readingModeCheck')[0].style.display = 'none'
    document.getElementsByClassName('changeAudio')[0].style.display = 'none'
  }
  var audio = document.createElement("audio");
  if (audio) {
    audio.setAttribute("id", "audio");
    audio.setAttribute("src", "");
    audio.setAttribute("muted", "true");
    docEl.appendChild(audio);
    voicePlay = true
    audio.play()
  }

  if (voice) {
    for (var a = 0; a < allFlag.length; a++) {
      eventOperate.add(allFlag[a], "mouseover", readingMouseEvent);
      eventOperate.add(allFlag[a], "mouseout", clearTextbg);
    }
    for (var b = 0; b < allElements.length; b++) {
      var nodeName = allElements[b].nodeName;
      if (nodeName == "A" || nodeName == "INPUT" || nodeName == "SELECT" || nodeName == "OBJECT") {
        eventOperate.add(allElements[b], "focus", readingMouseEvent);
        eventOperate.add(allElements[b], "blur", clearTextbg);
      }
    }
  }
}
var flagShift = 0, flagAlt = 0, flagQ = 0, flag = 0, flag0 = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0, flag7 = 0, flag8 = 0, flag9 = 0, flagtop = 0, flagdown = 0, flagleft = 0, flagright = 0, num = 0;
document.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  switch (e && e.keyCode) {
    case 16:
      flagShift = 1;
      break;
    case 18:
      flagAlt = 1;
      break;
    case 81:
      flagQ = 1;
      break;
    case 191:
      flag = 1;
      break;
    case 48:
      flag0 = 1;
      break;
    case 49:
      flag1 = 1;
      break;
    case 50:
      flag2 = 1;
      break;
    case 51:
      flag3 = 1;
      break;
    case 52:
      flag4 = 1;
      break;
    case 53:
      flag5 = 1;
      break;
    case 54:
      flag6 = 1;
      break;
    case 55:
      flag7 = 1;
      break;
    case 56:
      flag8 = 1;
      break;
    case 57:
      flag9 = 1;
      break;
    case 38:
      flagtop = 1;
      break;
    case 40:
      flagdown = 1;
      break;
    case 37:
      flagleft = 1;
      break;
    case 39:
      flagright = 1;
      break;
  }

  var timers = setTimeout(function () {
    flagShift = 0, flagAlt = 0, flagQ = 0, flag = 0, flag0 = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag5 = 0, flag6 = 0, flag7 = 0, flag8 = 0, flag9 = 0, flagtop = 0, flagdown = 0, flagleft = 0, flagright = 0;
  }, 1000)
  if (flagShift && flagAlt && flagQ) {
    ABTOut()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag1) {
    ABTReset()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag2) {
    ABTBigMouse()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag3) {
    ABTGuides()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag4) {
    if (num == 5) {
      num = 0
      ABTChangeColor(num)
    } else {
      num = num + 1
      ABTChangeColor(num)
    }
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag5) {
    ABTTogglarAudios(voicePlay ? 2 : 1)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag6) {
    ABTSpeedRegulation(1)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag7) {
    ABTSpeedRegulation(2)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag8) {
    ABTReadingMode(readingMode == 1 ? 2 : 1)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag9) {
    ABTText()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag0) {
    ABTScreen()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flagtop) {
    ABTChangeScreen(1)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flagdown) {
    ABTChangeScreen(2)
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flagleft) {
    ABTRetreat()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flagright) {
    ABTMakeProgress()
    clearTimeout(timers);
  }
  if (flagShift && flagAlt && flag) {
    ABTHelp()
    clearTimeout(timers);
  }
}

function ABTshow(data) {
  init(data)
}

// 点击重置
function ABTReset() {
  setCookie('ABTUI', 1, 5)
  window.location.href = window.location.href
  window.location.reload()
}

// 点击后退
function ABTRetreat() {
  history.go(-1)
}

// 点击前进
function ABTMakeProgress() {
  history.go(1)
}

// 点击大鼠标
function ABTBigMouse() {
  var body = document.getElementsByTagName('body')[0]
  if (body.style.cursor.indexOf('url') !== -1) {
    body.style.cursor = 'auto'
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cursor = "auto"
    }
    return
  }
  if (backgroundColorVal == 1 || backgroundColorVal == 2) {
    body.style.cursor = "url(" + cursorUrl + "),auto"
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cursor = "url(" + cursorUrl + "),auto"
    }
  } else if (backgroundColorVal == 3 || backgroundColorVal == 4 || backgroundColorVal == 5 || !backgroundColorVal) {
    body.style.cursor = "url(" + cursorUrl + "),auto"
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cursor = "url(" + cursorUrl + "),auto"
    }
  }
}

// 点击辅助线
function ABTGuides() {
  if (abtGuides) {
    window.onmousemove = null;
    var line = document.getElementsByClassName('ABTline')[0]
    line.parentNode.removeChild(line);
    abtGuides = false
    return
  }
  node = document.createElement('div');
  node.setAttribute('class', 'ABTline');
  node.setAttribute('style', 'z-index: 9999;');

  var horizontalLine = document.createElement('div');
  var verticalLine = document.createElement('div');
  node.appendChild(horizontalLine);
  node.appendChild(verticalLine);

  docEl.appendChild(node);

  window.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;

    verticalLine.style.top = y + 5 + 'px'
    horizontalLine.style.left = x + 5 + 'px'
  }
  abtGuides = true
}

// 点击页面放大，缩小
function ABTChangeScreen(val) {

  var big = Number(scaleNum) + 0.1
  var sm = Number(scaleNum) - 0.1
  if (val == 1 && scaleNum < 2) {
    scaleNum = big;
    document.getElementsByClassName('percentage')[0].innerText = '页面' + (big * 100).toFixed(0) + '%'
  } else if (val == 1 && scaleNum >= 2) {
    alert('已放到最大')
  }
  if (val == 2 && scaleNum > 1) {
    scaleNum = sm;
    document.getElementsByClassName('percentage')[0].innerText = '页面' + (sm * 100).toFixed(0) + '%'
  } else if (val == 2 && scaleNum <= 1) {
    alert('已缩到最小')
  }
  docEl.style.overflow = 'auto';
  setScale(scaleNum)
}

// 鼠标点击页面配色
function showABTChangeColor() {
  document.getElementsByClassName('changeColor')[0].style.display = 'block'
}

function mouseoverABTChangeColor() {
  document.getElementsByClassName('changeColor')[0].style.display = 'block'
}

function mouseoutABTChangeColor() {
  document.getElementsByClassName('changeColor')[0].style.display = 'none'
}

// 选择页面配色
function ABTChangeColor(val) {
  backgroundColorVal = val
  var abt = document.getElementById('ABTInterface')
  var mess = document.getElementsByClassName('m-message')[0]
  console.log(mess);
  if (mess) {
    mess.style.cssText += 'display:none'
  }

  docEl.removeChild(abt)
  var allElements = docEl.getElementsByTagName('*')
  if (val == 1) {
    docEl.style.cssText += 'background-color:black !important'
    console.log(111);
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cssText += 'color:#ffffff !important;background-color:black !important'
    }
    var alink = document.getElementsByTagName('a')
    for (var j = 0; j < alink.length; j++) {
      alink[j].onmouseover = function (e) {
        this.style.cssText += 'color:#fffd38 !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#fffd38 !important;background-color:black !important'
        }
      }
      alink[j].onmouseout = function (e) {
        this.style.color = '#ffffff !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#ffffff !important;background-color:black !important'
        }
      }
    }
    docEl.appendChild(abt)
    if (voice) {
      data.text = '当前页面配色为黑底白字黄链接,按Alt + Shift + 4可切换配色'
      audioPlay()
    }
  }
  if (val == 2) {
    docEl.style.cssText += 'background-color:#0061ff !important'
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cssText += 'color:#ffffff !important;background-color:#0061ff !important'
    }
    var alink = document.getElementsByTagName('a')
    for (var j = 0; j < alink.length; j++) {
      alink[j].onmouseover = function (e) {
        this.style.cssText += 'color:#fffd38 !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#fffd38 !important'
        }
      }
      alink[j].onmouseout = function (e) {
        this.style.cssText += 'color:#ffffff !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#ffffff !important'
        }
      }
    }
    docEl.appendChild(abt)
    if (voice) {
      data.text = '当前页面配色为蓝底白字黄链接,按Alt + Shift + 4可切换配色'
      audioPlay()
    }
  }
  if (val == 3) {
    docEl.style.cssText += 'background-color:#fffd38 !important'
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cssText += 'color:#1a1a1a !important;background-color:#fffd38 !important'
    }
    var alink = document.getElementsByTagName('a')
    for (var j = 0; j < alink.length; j++) {
      alink[j].onmouseover = function (e) {
        this.style.cssText += 'color:#0061ff !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style += 'color:#0061ff !important'
        }
      }
      alink[j].onmouseout = function (e) {
        this.style.cssText += 'color:#1a1a1a !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#1a1a1a !important'
        }
      }
    }
    docEl.appendChild(abt)
    if (voice) {
      data.text = '当前页面配色为黄底黑字蓝链接,按Alt + Shift + 4可切换配色'
      audioPlay()
    }
  }
  if (val == 4) {
    docEl.style.cssText += 'background-color:#fff !important'
    for (var i = 0; i < allElements.length; i++) {
      allElements[i].style.cssText += 'color:#1a1a1a !important;background-color:#fff !important'
    }
    var alink = document.getElementsByTagName('a')
    for (var j = 0; j < alink.length; j++) {
      alink[j].onmouseover = function (e) {
        this.style.cssText += 'color:#0061ff !important'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#0061ff !important'
        }
      }
      alink[j].onmouseout = function (e) {
        this.style.cssText = 'color:#1a1a1a'
        for (var i = 0; i < this.getElementsByTagName('*').length; i++) {
          this.getElementsByTagName('*')[i].style.cssText += 'color:#1a1a1a !important'
        }
      }
    }
    docEl.appendChild(abt)
    if (voice) {
      data.text = '当前页面配色为白底黑字蓝链接,按Alt + Shift + 4可切换配色'
      audioPlay()
    }
  }
  if (val == 5) {
    // if (voice) {
    //   data.text = '当前页面配色为页面原始配色'
    //   audioPlay()
    // }

    setCookie('ABTUI', 1, 5)
    window.location.href = window.location.href
    window.location.reload()
  }
  console.log(111);

}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 鼠标点击声音
function showABTTogglarAudios() {
  document.getElementsByClassName('changeAudio')[0].style.display = 'block'
}

function mouseoverAudios(e) {
  document.getElementsByClassName('changeAudio')[0].style.display = 'block'
}

function mouseoutAudios(e) {
  document.getElementsByClassName('changeAudio')[0].style.display = 'none'
}

// 点击声音开关
function ABTTogglarAudios(val) {
  var audio = document.getElementById('audio')
  if (val == 1) {
    document.getElementsByClassName('audioIcon')[0].children[0].className = 'iconfont icon-volume-copy'
    audio.play()
    voicePlay = true
    data.text = '已开启声音，按Alt + Shift + 5可关闭'
    audioPlay()
  }
  if (val == 2) {
    document.getElementsByClassName('audioIcon')[0].children[0].className = 'iconfont icon-volume-mute-line'
    data.text = '已关闭声音，按Alt + Shift + 5可开启'
    audioPlay()
    audio.pause()
    voicePlay = false
  }
  if (val == 3 && data.vol > 0) {
    data.vol--
    audioPlay()
  }
  if (val == 4 && data.vol < 15) {
    data.vol++
    audioPlay()
  }
}

// 鼠标点击语速调节
function showABTSpeedRegulation() {
  document.getElementsByClassName('SpeedRegulation')[0].style.display = 'block'
}

function mouseoverABTSpeedRegulation() {
  document.getElementsByClassName('SpeedRegulation')[0].style.display = 'block'
}

function mouseoutABTSpeedRegulation() {
  document.getElementsByClassName('SpeedRegulation')[0].style.display = 'none'
}

// 选择语速
function ABTSpeedRegulation(params) {
  if (params == 1 && data.spd > 0) {
    data.spd--
  } else if (params == 2 && data.spd < 15) {
    data.spd++
  }
  data.text = '当前语速为' + data.spd + '，按Alt + Shift + 6可降低语速，按Alt + Shift + 7可增加语速'
  audioPlay()
}

// 鼠标点击朗读模式
function showABTReadingMode() {
  document.getElementsByClassName('readingModeCheck')[0].style.display = 'block'
}

function mouseoverABTReadingMode() {
  document.getElementsByClassName('readingModeCheck')[0].style.display = 'block'
}

function mouseoutABTReadingMode() {
  document.getElementsByClassName('readingModeCheck')[0].style.display = 'none'
}
var timer2 = ''
// 选择朗读模式
function ABTReadingMode(val) {
  readingMode = val
  data.text = val == 1 ? '当前为指读模式,按Alt + Shift + 8可切换为连读模式' : '当前为连读模式,按Alt + Shift + 8可切换为指读模式'
  audioPlay()
}
var indexA = 0
var indexB = 0
var indexC = 1
var aryA = []
var ary = [];
var numA = 0
function audioPlay() {
  if (timer2) {
    console.log(1111);
    clearInterval(timer2)
  }
  indexA = 0//只有第一次才直接
  indexB = 0//当前播放到第几段
  indexC = 1//调用接口
  aryA = []//清空接口存储的数据
  ary = [];//清空字符串的数据
  numA = 0
  if (!voicePlay) {
    return
  }
  var len = Math.ceil(data.text.length / 200)
  numA = len - 1
  var str = data.text
  var num = [0, 200]
  for (var i = 0; i < len; i++) {
    ary[i] = str.substring(num[0], num[1])
    num[0] += 200
    num[1] += 200
  }
  if (len > 1) {
    audioP(ary[0])
    audioP(ary[1])
  } else {
    audioP(ary[0])
  }
}

function audioP(str) {
  data.text = str
  var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
  xml.open('POST', protocol + '//api.jeecms.com/MODULE-ONLINE-VOICE/front/voice/use/voice');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.send(JSON.stringify(data));
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      var res = JSON.parse(xml.responseText);
      if (res.code == 200) {
        aryA[indexA] = res.data
        indexA++
        if (indexA == 1) {
          var audio = document.getElementById('audio')
          audio.src = res.data
          audio.play()
          if (numA > 1) {
            timer2 = setInterval(function () {
              var audio = document.getElementById('audio')
              if (audio.ended) {
                indexB++
                audioP(ary[indexC])
                indexC++
                audio.src = aryA[indexB]
                audio.play()
                if (numA == indexB) {
                  indexA = 0//只有第一次才直接
                  indexB = 0//当前播放到第几段
                  indexC = 1//调用接口
                  aryA = []//清空接口存储的数据
                  ary = [];//清空字符串的数据
                  numA = 0//清空是否调用完
                  clearInterval(timer2)
                }
              }
            }, 500)
          } else {
            indexA = 0
          }
        }

      } else if (res.code == 500) {
        alert(res.message);
      }
    }
  }
}
// 点击纯文本
function ABTText() {
  if (textMode) {
    textMode = false;
    setCookie('ABTUI', 1, 5)
    window.location.href = window.location.href
    window.location.reload()
    return
  }
  var abt = document.getElementById('ABTInterface')
  docEl.removeChild(abt)
  // docEl.removeChild(head)
  for (var c = 0; c < allFrame.length; c++) {
    var iframeDOM = allFrame[c].contentWindow;
    var newFrameContainer = document.createElement("div");
    try { newFrameContainer.innerHTML = iframeDOM.docEl.innerHTML; } catch (z) { }
    allFrame[c].parentNode.insertBefore(newFrameContainer, allFrame[c]);
  }
  while (allFrame.length) { allFrame[0].parentNode.removeChild(allFrame[0]); }
  for (var d = 0; d < allImg.length; d++) {
    var newImgContainer = document.createElement("span");
    newImgContainer.innerHTML = getText(allImg[d]);
    allImg[d].parentNode.insertBefore(newImgContainer, allImg[d]);
  }
  while (allImg.length) { allImg[0].parentNode.removeChild(allImg[0]); }
  for (var a = 0; a < allStyle.length; a++) {
    if (allStyle[a].getAttribute('rel') == 'stylesheet' && allStyle[a].getAttribute('href') != ABTcssUrl && allStyle[a].getAttribute('href') != iconStyleUrl) {
      allStyle[a].setAttribute("href", "#");
    }
  }
  for (var b = 0; b < allElements.length; b++) {
    if (allElements[b].id != 'ABTInterface') {
      allElements[b].removeAttribute('style');
      allElements[b].setAttribute('style', 'list-style: none');
    }
  };
  var head = document.getElementsByClassName('header')[0]
  head.style.display = 'none'
  if (document.getElementsByClassName('header-children')[0]) {
    var headC = document.getElementsByClassName('header-children')[0]
    headC.style.display = 'none'
  }
  docEl.appendChild(abt)
  if (voice) {
    data.text = '已开启纯文本模式，按Alt + Shift + 9可关闭'
    audioPlay()
  }
  textMode = true;
}

// 点击显示屏
function ABTScreen() {
  if (!textTipsState) {
    var newMessageBox = document.createElement("div");
    newMessageBox.setAttribute("id", "gettextmessagebox");
    newMessageBox.innerHTML = "<div id=\"gettextmessagecontent\"></div><div id=\"gettextmessagebutton\"><button onclick=\"subMethod(1)\">拼音</button><button  id=\"gettextmessagecontent2\" onclick=\"subMethod(2)\">繁体</button></div><div id=\"closetextmessagebox\"><i class=\"iconfont icon-guanbi\" onclick=\"ABTScreen()\"></i></div>";
    docEl.appendChild(newMessageBox);
    docEl.style.paddingBottom = 140 + "px";
    docEl.style.lineHeight = 1;
    var gett = document.getElementById('gettextmessagecontent')
    gett.style.lineHeight = 1;
    for (var a = 0; a < allFlag.length; a++) {
      eventOperate.add(allFlag[a], "mouseover", mouseEvent);
      eventOperate.add(allFlag[a], "mouseout", clearTextbg);
    }
    for (var b = 0; b < allElements.length; b++) {
      var nodeName = allElements[b].nodeName;
      if (nodeName == "A" || nodeName == "INPUT" || nodeName == "SELECT" || nodeName == "OBJECT") {
        eventOperate.add(allElements[b], "focus", mouseEvent);
        eventOperate.add(allElements[b], "blur", clearTextbg);
      }
    }
    if (voice) {
      data.text = '已开启显示屏，按Alt + Shift + 0可关闭'
      audioPlay()
    }
    textTipsState = true;
  }
  else {
    docEl.removeChild(document.getElementById("gettextmessagebox"));
    docEl.style.paddingBottom = 0 + "px";
    if (voice) {
      data.text = '已关闭显示屏，按Alt + Shift + 0可开启'
      audioPlay()
    }
    textTipsState = false;
  }
}

// 点击帮助
function ABTHelp() {
  window.open(helpHtml)
}

// 点击退出
function ABTOut() {
  localStorage.setItem("close", false);
  console.log(localStorage.getItem("close"));
  setCookie('ABTUI', 0, 5)
  window.location.href = window.location.href
  window.location.reload()
}

function getText(element) {
  var elementText;
  if (element.nodeName == "#text") { elementText = element.nodeValue; }
  else if (element.nodeName == "IMG") {
    if (element.getAttribute("alt")) { elementText = element.getAttribute("alt"); }
    else if (element.getAttribute("title")) { elementText = element.getAttribute("title"); }
    else { elementText = document.title; }
  }
  else if (element.nodeName == "A") { elementText = getDomText(element.firstChild); }
  else if (element.nodeName == "INPUT" || element.nodeName == "SELECT" || element.nodeName == "OBJECT") {
    elementText = getDomText(element.parentNode);
  }
  else { elementText = element.innerText || element.textContent; }
  return elementText;
}

var timer = null
function readingMouseEvent() {
  newText = ""
  var text = ""
  if (this.className == "abtFlag" || this.getAttribute("class") == "abtFlag") { text = getDomText(this); }
  else { text = getText(this); }
  for (var a = 0; a < allFlag.length; a++) {
    newText += allFlag[a].innerText
  }
  if (readingMode == 1) {
    data.text = text
  } else {
    data.text = newText.substring(newText.indexOf(text))
  }
  timer = setTimeout(function () {
    audioPlay()
  }, 500);
}
var newText = ""
function mouseEvent() {
  if (!document.getElementById("gettextmessagecontent")) { return; }
  newText = ""
  if (this.className == "abtFlag" || this.getAttribute("class") == "abtFlag") { newText = getDomText(this); }
  else { newText = getText(this); }

  if (pinyinState) { newText = pinyinText(newText); }
  if (textbState) { newText = gbkText(newText); }
  document.getElementById("gettextmessagecontent").innerHTML = newText;
}

function pinyinText(text) {
  var messayArray = text.split("");
  var newString = "";
  for (var a = 0; a < messayArray.length; a++) {
    var testVar = "";
    if (pinyin[messayArray[a]]) { testVar = pinyin[messayArray[a]]; }
    else { testVar = "&nbsp;"; }
    if (messayArray[a] == " ") { messayArray[a] = "&nbsp;"; }
    newString += "<span>" + messayArray[a] + "<sup>" + testVar + "</sup></span>";
  }
  return newString;
}

function gbkText(text) {
  var messayArray = text.split("");
  var newString = "";
  for (var a = 0; a < messayArray.length; a++) {
    var testVar = "";
    if (gbk[messayArray[a]]) { testVar = gbk[messayArray[a]]; }
    else { testVar = messayArray[a]; }
    if (messayArray[a] == " ") { messayArray[a] = "&nbsp;"; }
    newString += testVar;
  }
  return newString;
}

function clearTextbg() {
  this.style.backgroundColor = "";
  this.style.color = "";
  clearTimeout(timer)
}

var eventOperate = {
  add: function (elem, type, fn) {
    if (elem.attachEvent) {
      var typeRef = "_" + type;
      if (!elem[typeRef]) { elem[typeRef] = []; }
      for (var i in elem[typeRef]) { if (elem[typeRef][i] == fn) { return; } }
      elem[typeRef].push(fn);
      elem["on" + type] = function () { for (var i in this[typeRef]) { this[typeRef][i].apply(this, arguments); } }
    } else { elem.addEventListener(type, fn, false); }
  },
  remove: function (elem, type, fn) {
    if (elem.detachEvent) { if (elem["_" + type]) { for (var i in elem["_" + type]) { if (elem["_" + type][i] == fn) { elem["_" + type].splice(i, 1); break; } } } }
    else { elem.removeEventListener(type, fn, false); }
  }
}

function getDomText(flagNode) {
  var textMessage = "";
  if (flagNode.firstChild.nodeName == "IMG") {
    if (flagNode.parentNode.parentNode.nodeName == "A" || flagNode.parentNode.nodeName == "A") {
      textMessage = "图片链接：" + getText(flagNode.firstChild);
    }
    else { textMessage = "图片：" + getText(flagNode.firstChild); }
  }
  else if (flagNode.firstChild.nodeName == "OBJECT") { textMessage = "媒体：" + flagNode.firstChild.getAttribute("title"); }
  else if (flagNode.firstChild.nodeName == "SELECT") { textMessage = "下拉菜单"; }
  else if (flagNode.firstChild.nodeName == "INPUT") {
    var inputType = flagNode.firstChild.getAttribute("type");
    switch (inputType) {
      case "button":
        textMessage = "表单按钮：" + flagNode.firstChild.getAttribute("value");
        break;
      case "image":
        textMessage = "图形按钮：" + flagNode.firstChild.getAttribute("alt");
        break;
      case "submit":
        textMessage = "提交按钮：" + flagNode.firstChild.getAttribute("value");
        break;
      case "reset":
        textMessage = "重置按钮：" + flagNode.firstChild.getAttribute("value");
        break;
      case "file":
        textMessage = "文件域：" + flagNode.firstChild.getAttribute("title");
        break;
      case "password":
        textMessage = "密码域：" + flagNode.firstChild.getAttribute("title");
        break;
      case "radio":
        textMessage = "单选框：" + flagNode.firstChild.getAttribute("title");
        break;
      case "checkbox":
        textMessage = "复选框：" + flagNode.firstChild.getAttribute("title");
        break;
      case "text":
        textMessage = "文本域：" + flagNode.firstChild.getAttribute("title");
        break;
    }
  }
  else if (flagNode.parentNode.parentNode.nodeName == "A" || flagNode.parentNode.nodeName == "A") {
    var flagNodeContent;
    if (flagNode.parentNode.parentNode.nodeName == "A") {
      if (flagNode.parentNode.parentNode.getAttribute("title")) { flagNodeContent = flagNode.parentNode.parentNode.getAttribute("title"); }
      else { flagNodeContent = flagNode.innerText || flagNode.textContent; }
    }
    else if (flagNode.parentNode.nodeName == "A") {
      if (flagNode.parentNode.getAttribute("title")) { flagNodeContent = flagNode.parentNode.getAttribute("title"); }
      else { flagNodeContent = flagNode.innerText || flagNode.textContent; }
    }
    textMessage = "链接：" + flagNodeContent;
  }
  else if (flagNode.parentNode.nodeName == "H1" || flagNode.parentNode.nodeName == "H2" || flagNode.parentNode.nodeName == "H3" || flagNode.parentNode.nodeName == "H4" || flagNode.parentNode.nodeName == "H5" || flagNode.parentNode.nodeName == "H6") {
    var thisContent = flagNode.innerText || flagNode.textContent;
    textMessage = "标题：" + thisContent;
  }
  else {
    var thisContent = flagNode.innerText || flagNode.textContent;
    textMessage = "" + thisContent;
  }
  return textMessage;
}

function subMethod(branchNum) {
  if (branchNum == 1) {
    pinyinState = pinyinState ? false : true;
    document.getElementById('gettextmessagecontent').style.lineHeight = pinyinState ? 'normal' : '1'
  }
  else if (branchNum == 2) {
    textbState = textbState ? false : true;
    if (textbState) {
      document.getElementById('gettextmessagecontent2').innerHTML = '简体'
    } else {
      document.getElementById('gettextmessagecontent2').innerHTML = '繁体'
    }
  }
  var textT = ''
  if (pinyinState && textbState) {
    textT = pinyinText(newText);
    textT = gbkText(textT);
  } else if (pinyinState) {
    textT = pinyinText(newText)
  } else if (textbState) {
    textT = gbkText(newText);
  } else {
    textT = newText
  }
  document.getElementById("gettextmessagecontent").innerHTML = textT;
}

function gc(className) {
  if (!className) { return false; }
  var allElement = docEl.getElementsByTagName("*");
  var result = new Array();
  for (var a = 0; a < allElement.length; a++) {
    if (allElement[a].className == className || allElement[a].getAttribute("class") == className) { result.push(allElement[a]); }
  }
  return result;
}

function getTextNode(element) {
  if (element.nodeName == 'SCRIPT' || element.nodeName == 'STYLE') {
    return
  }
  var childNodes = element.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    var thisChild = childNodes[i];
    switch (thisChild.nodeType) {
      case 1:
        getTextNode(thisChild);
        break;
      case 3:
        if (thisChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "").length == 0) { break; }
        if (thisChild.nodeValue != "") { allTextNode.push(thisChild); }

        break;
    }
    if (thisChild.nodeName == "IMG" || thisChild.nodeName == "INPUT" || thisChild.nodeName == "OBJECT" || thisChild.nodeName == "SELECT") { allTextNode.push(thisChild); }
  }
}

function AddTag() {
  if (this.firstRun) { return; }
  for (var a = 0; a < allTextNode.length; a++) {
    var tagNode = document.createElement("em");

    if (allTextNode[a].nodeName == "IMG" || allTextNode[a].nodeName == "INPUT" || allTextNode[a].nodeName == "SELECT") {
      tagNode.setAttribute("class", "abtFlag");
      var newNode = allTextNode[a].cloneNode(true);
      tagNode.appendChild(newNode);
    }
    else if (allTextNode[a].nodeName == "OBJECT" && allTextNode[a].parentNode.nodeName != "OBJECT") {
      tagNode.setAttribute("class", "abtFlag");
      var newNode = allTextNode[a].cloneNode(true);
      tagNode.appendChild(newNode);
    }
    else {
      var newString = allTextNode[a].nodeValue;
      var reg = /[，。！？；、：]/;
      if (reg.exec(newString) == null) {
        tagNode.setAttribute("class", "abtFlag");
        tagNode.innerHTML = newString;
      } else {
        tagNode.setAttribute("class", "abtFlagGroup");
        tagNode.innerHTML = mySplit(newString, /[，。！？；、：]/);
      }
    }
    if (allTextNode[a].parentNode) { allTextNode[a].parentNode.insertBefore(tagNode, allTextNode[a]); }
  }
  for (var b = 0; b < allTextNode.length; b++) {
    allTextNode[b].parentNode.removeChild(allTextNode[b]);
  }
  var allOption = docEl.getElementsByTagName("option");
  for (var c = 0; c < allOption.length; c++) {
    var thisMessage = allOption[c].firstChild.cloneNode(true);
    allOption[c].innerHTML = "";
    allOption[c].appendChild(thisMessage);
  }
  this.firstRun = true;
}

function mySplit(str, reg) {
  var result, x = str, y, zzz = true;
  var stringArray = new Array();
  do {
    result = reg.exec(x);
    if (result != null) {
      var stringIndex = result.index;
      stringArray.push(x.substring(0, stringIndex + 1));
      x = x.substring(stringIndex + 1);
    }
    else {
      stringArray.push(x)
      zzz = false;
    }
  }
  while (zzz)
  var yy = "<em class=\"abtFlag\">";
  for (var a = 0; a < stringArray.length; a++) {
    yy += (a < stringArray.length - 1) ? (stringArray[a] + "</em><em class=\"abtFlag\">") : (stringArray[a]);
  }
  yy += "</em>";
  return yy;
}