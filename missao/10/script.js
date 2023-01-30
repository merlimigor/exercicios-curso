function divisivel (numero) {

    if (numero % 3 != 0) {
        return false;
    }
    return true;

}

console.log(divisivel(3));
console.log(divisivel(4));
console.log(divisivel(12));
console.log(divisivel(20));