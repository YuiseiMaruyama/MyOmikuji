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
        btn.textContent = 'hit!';
        // btn.classList.toggle('pressed');
    });
    btn.addEventListener('mousedown', ()=>{
        btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', ()=>{
        btn.classList.remove('pressed');
    });
}