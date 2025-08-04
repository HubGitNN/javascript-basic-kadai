let num = 30

// 変数numを3で割った余りが0かつnumを5で割った余りが0なら"3と5の倍数です”と表示
if (num % 3 == 0 && num % 5 == 0) {
    console.log('3と5の倍数です');
}
// 変数numを3で割った余りが0なら"3の倍数です”と表示
else if (num % 3 == 0) {
    console.log('3の倍数です');
}
// 変数numを5で割った余りが0なら"5の倍数です”と表示
else if (num % 5 == 0) {
    console.log('5の倍数です');
}
// それ以外のときは、numの値を出力する
else {
    console.log(num);
}
