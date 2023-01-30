function aumentoSalario (planoTrabalho, salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            console.log(`O novo salário é R$ ${salarioAtual * 1.1}`);
            break;
        case 'B':
            console.log(`O novo salário é R$ ${salarioAtual * 1.15}`);
            break;
        case 'C':
            console.log(`O novo salário é R$ ${salarioAtual * 1.2}`);
            break;
        default:
            console.log(`Plano inválido`);
    }
}

aumentoSalario('A', 100); 
aumentoSalario('B', 100); 
aumentoSalario('C', 100); 
aumentoSalario('D', 100); 