// ==UserScript==
// @name         AtCoder AC Icon Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://atcoder.jp/contests/*/submissions*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atcoder.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let style = document.createElement("style")
    style.innerHTML = `
.label{
    display: inline-block;;
    background-size: contain;
    width: 128px;
    height: 72px;
    background-repeat: no-repeat;
    color: rgba(0,0,0,0)
}
.label[data-original-title="正解"],.label[title="正解"],.label[title="Accepted"],.label[data-original-title="Accepted"]{
    background-image: url(https://kangping-git.github.io/meme/AC.png);
}
.label[data-original-title="不正解"],.label[title="不正解"],.label[title="Wrong Answer"],.label[data-original-title="Wrong Answer"]{
    background-image: url(https://kangping-git.github.io/meme/WA.png);
}
.label[data-original-title="実行時間制限超過"],.label[title="実行時間制限超過"],.label[data-original-title="Time Limit Exceeded"],.label[title="Time Limit Exceeded"]{
    background-image: url(https://kangping-git.github.io/meme/TLE.png);
}
.label[data-original-title="メモリ制限超過"],.label[title="メモリ制限超過"],.label[data-original-title="Memory Limit Exceeded"],.label[title="Memory Limit Exceeded"]{
    background-image: url(https://kangping-git.github.io/meme/MLE.png);
}
.label[data-original-title="実行時エラー"],.label[title="実行時エラー"],.label[data-original-title="Runtime Error"],.label[title="Runtime Error"]{
    background-image: url(https://kangping-git.github.io/meme/RE.png);
}
.label[data-original-title="コンパイルエラー"],.label[title="コンパイルエラー"],.label[data-original-title="Compilation Error"],.label[title="Compilation Error"]{
    background-image: url(https://kangping-git.github.io/meme/CE.png);
}
.label[data-original-title="ジャッジ待ち"],.label[title="ジャッジ待ち"],.label[data-original-title="ジャッジ中"],.label[title="ジャッジ中"],.label[title="Judging"],.label[title="Waiting for Judging"],.label[data-original-title="Judging"],.label[data-original-title="Waiting for Judging"]{
    background-image: url(https://kangping-git.github.io/meme/WJ.png);
}`
    document.head.appendChild(style)
})()
