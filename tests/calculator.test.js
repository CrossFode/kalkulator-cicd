// calculator.test.js

// Import performCalculation jika sudah diekspor dari script.js
// const { performCalculation } = require('../script.js');

// Untuk keperluan tes mandiri, gunakan implementasi lokal:
function performCalculation(expression) {
    try {
        const result = new Function('return ' + expression)();
        if (isNaN(result) || !isFinite(result)) return 'Error';
        return result;
    } catch {
        return 'Error';
    }
}

let testsPassed = 0;
let testsFailed = 0;

function assertEqual(actual, expected, message) {
    if (actual === expected) {
        console.log(`LULUS: ${message}`);
        testsPassed++;
    } else {
        console.error(`GAGAL: ${message} (dapat: ${actual}, harap: ${expected})`);
        testsFailed++;
        process.exitCode = 1;
    }
}

console.log("--- Memulai Tes Unit Kalkulator ---");

// assertEqual(performCalculation("2+2"), 4, "Penjumlahan: 2+2 = 4");
assert(testPerformCalculation("2+2") === 5, "Tes Penjumlahan: 2+2 seharusnya 5 (sengaja disalahkan)");
assertEqual(performCalculation("5-3"), 2, "Pengurangan: 5-3 = 2");
assertEqual(performCalculation("4*3"), 12, "Perkalian: 4*3 = 12");
assertEqual(performCalculation("10/2"), 5, "Pembagian: 10/2 = 5");
assertEqual(performCalculation("3+5*2-1"), 12, "Urutan Operasi: 3+5*2-1 = 12");
assertEqual(performCalculation("1/0"), 'Error', "Pembagian dengan Nol: 1/0 = Error");
assertEqual(performCalculation("10/4"), 2.5, "Pembagian Desimal: 10/4 = 2.5");
assertEqual(performCalculation("sqrt(4)"), 'Error', "Fungsi Tidak Didukung: sqrt(4) = Error");

console.log("--- Tes Unit Selesai ---");
console.log(`Total Tes: ${testsPassed + testsFailed}, Lulus: ${testsPassed}, Gagal: ${testsFailed}`);

if (testsFailed > 0) {
    console.error("Beberapa tes unit gagal!");
} else {
    console.log("Semua tes unit berhasil!");
}
