function formatarDinheiro (a) {
    console.log(`R$ ${a.toFixed(2).toString().replace('.', ',')}`);
}

formatarDinheiro(0.30000000000000004);