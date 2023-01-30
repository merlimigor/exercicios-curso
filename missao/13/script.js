function diasDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Fim de samana';
        case 2:
            return 'Dia útil';
        case 3:
            return 'Dia útil';
        case 4:
            return 'Dia útil';
        case 5:
            return 'Dia útil';
        case 6:
            return 'Dia útil';
        case 7:
            return 'Fim de samana';
        default:
            return 'Dia inválido'
    }
}

console.log(diasDaSemana(0));
console.log(diasDaSemana(1));
console.log(diasDaSemana(2));
console.log(diasDaSemana(3));
console.log(diasDaSemana(4));
console.log(diasDaSemana(5));
console.log(diasDaSemana(6));
console.log(diasDaSemana(7)); 
console.log(diasDaSemana(8));