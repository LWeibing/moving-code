let html = document.querySelector('#html')
let style = document.querySelector('#style')
let str1 = `/*大家好,今天我给大家演示一个小案列
*首先,先准备一个 div
*/
#div1{
    border:1px solid red;
    width:100px;
    height:100px;
}
/*接下来,要把 div 变成一个跳动的爱心
*好好看,好好学
*首先,先把 div 旋转
*/
#div1{
    transform: rotate(45deg);
}
/*
*加上背景色
*/
#div1{
    background: red;
    border: none;
}
/*
*加上爱心两个顶端
*/
#div1::before{
    width: 100px;
    height: 100px;
    background: red;
    transform:translate(40px,100px);
    bottom: 100%;
    right: 100%;
    border-radius: 50%;
    border-radius: 50% 0 0 50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    background: red;
    transform:rotate(90deg) translate(40px,100px);
    bottom: 100%;
    left: 100%;
    border-radius: 50%;
    border-radius: 50% 0 0 50%;
}
/*
*现在,我们让爱心跳动起来吧
*/
#div1Box{
    animation: 0.6s infinite heart;
}

@keyframes heart {
    0% {
        transform: none;
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: none;
    }
}
/*
*打完收工
*感谢观看
*/
`
let str2 = ''
let n = 0
let step = () => {
    setTimeout(() => {
        if (str1[n] === '\n') {
            str2 += '<br>'
        } else if (str1[n] === ` `) {
            str2 += '&nbsp'
        } else {
            str2 += str1[n]
        }
        html.innerHTML = str2;
        style.innerHTML = str1.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < str1.length - 1) {
            n += 1
            step()
        } else {

        }
    }, 50)
}

step()