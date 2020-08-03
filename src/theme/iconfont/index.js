import { createGlobalStyle } from 'styled-components/macro';

const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1596377724646'); /* IE9 */
  src: url('iconfont.eot?t=1596377724646#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1596377724646') format('woff'),
  url('iconfont.ttf?t=1596377724646') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1596377724646#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-Localdownload_fill:before {
  content: "\e765";
}

.icon-resetqingchu:before {
  content: "\e642";
}

.icon-add:before {
  content: "\e731";
}

.icon-save:before {
  content: "\e724";
}

.icon-el-icon-delete:before {
  content: "\e618";
}

.icon-xiangsuruqin:before {
  content: "\e67e";
}

.icon-undo:before {
  content: "\e604";
}

.icon-redo:before {
  content: "\e605";
}

.icon-setting:before {
  content: "\e600";
}

.icon-palette:before {
  content: "\e9c1";
}

.icon-xiangsuxiangpi:before {
  content: "\e638";
}

.icon-xiangsuhuabi:before {
  content: "\e639";
}
`;

export default Iconfont;
