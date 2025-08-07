const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const childList = document.getElementById('text');
        childList.textContent = 'ボタンをクリックしました';
    }, 2000);
});