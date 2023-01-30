function calculaFatorial (num) {
    return num == 0 ? 1 : num * calculaFatorial(num - 1);
}

function fatorial (num) {
    if (num < 0) {
        console.log('O número deve ser maior que 0 (zero).');
    } else {
        console.log(`${num}! = ${calculaFatorial(num)}`);
    }
}

fatorial(-1);
fatorial(0);
fatorial(1);
fatorial(2);
fatorial(3);
fatorial(4);
fatorial(5);
fatorial(6);
fatorial(7);
fatorial(8);
fatorial(9);
fatorial(10);