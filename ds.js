export function extractDiscount(discountString) {
let numbericString = discountString.replace(/[^0-9]/g, ''); // Hapus semua kecuali angka
return parseInt(numbericString); // Ubah ke integer

}

 