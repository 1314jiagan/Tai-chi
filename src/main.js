let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let str = `
/*你好我是一个前端新人，
接下来我要加样式了*/

body {
    margin: 0;
    padding: 0;
  }
  /*将div1做出一个太极，先设置宽高，固定位置*/
  .div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
    position: fixed;
    left:50%;
    transform: translateX(-50%);
   
    top: 20px;
  }
  /* 将其变成一个圆形，加阴影，去除边框 */
  .div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
  }
  /* 将左边变成白色右边变成黑色 */
  
  .div1 {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  /* 在div1的第一个子元素内容为空，伪元素，可以看做span，所以将其变成block */
  .div1::before {
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    content: "";
  
    background-color: white;
    position: absolute;
    top: 0;
    left: 50%;
    /* 横向居中 */
    transform: translateX(-50%);
    /* 利用镜像渐变将白色变成白黑白 */
    background: rgb(0, 0, 0);
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  /* 同样类似在div1的最后一个元素做此处理 */
  .div1::after {
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    content: "";
    position: absolute;
    background-color: black;
    left: 50%;
    top: 50%;
    /* 横向居中 */
    transform: translateX(-50%);
    /* 利用镜像渐变将白色变成黑白黑 */
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  /*设置换行*/
  #demo {
    word-break: break-all;
  }
`;
let str2 = "";

let n = 0;

let step = () => {
  setTimeout(() => {
    if (str[n] === "\n") {
      str2 += "</br>";
    } else if (str[n] === " ") {
      str2 += "&nbsp;";
    } else {
      str2 += str[n];
    }
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 9999999); //window向下滚动99999行；
    demo.scrollTo(0, 99999999);
    demo.innerHTML = str2;
    if (n + 1 < str.length) {
      n += 1;
      step();
    } else {
    }
  }, 50);
};
step();
