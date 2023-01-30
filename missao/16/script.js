function calculadora (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            console.log(`${num1} ${operacao} ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} ${operacao} ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} ${operacao} ${num2} = ${num1 * num2}`);
            break;
        case '/':
            console.log(`${num1} ${operacao} ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log('Operação inválida');
    }
}

calculadora(5, '+', 10);
calculadora(10, '-', 5);
calculadora(6, '*', 8); 
calculadora(35, '/', 5);