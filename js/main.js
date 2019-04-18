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
        const results = ['大吉','中吉','凶','末吉'];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
        // btn.textContent = n;
        // switch(n){
        //     case 0:
        //     btn.textContent = '大吉';
        //     break;

        //     case 1:
        //     btn.textContent = '中吉';
        //     break;

        //     case 2:
        //     btn.textContent = '凶';
        //     break;
        // }
        // btn.classList.toggle('pressed');
    });
    btn.addEventListener('mousedown', ()=>{
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', ()=>{
        btn.classList.remove('pressed');
    });
}