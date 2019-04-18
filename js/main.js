'use strict'

// 0,1,2のランダム整数値を生成
// Math.floor(Math.random(()*3))

// 0 ... nのランダム整数値を生成
// Math.floor(Math.random() * (n+1))

// min ... maxのランダム整数値を生成
// min + Math.floor(Math.random() * (max + 1 - min))

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', ()=>{
        // const results = ['大吉','中吉','凶','末吉'];
        // const n = Math.floor(Math.random() * results.length);
        // btn.textContent = results[n];
       const n = Math.random();
       if(n < 0.05){
        btn.textContent = '大吉'; //5%
       }else if(n < 0.2){
        btn.textContent = '中吉'; //15%
       }else{
        btn.textContent = '凶'; //80%
       }
    });
    btn.addEventListener('mousedown', ()=>{
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', ()=>{
        btn.classList.remove('pressed');
    });
}