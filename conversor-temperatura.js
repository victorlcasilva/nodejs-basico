const converterF = function(temperaturaC) {
    return temperaturaC * 9/5 + 32;
}

console.log('   0C =   ' +  converterF(0), 'F')
console.log('  10C =   ' + converterF(10), 'F')
console.log('36.5C = ' + converterF(36.5), 'F')