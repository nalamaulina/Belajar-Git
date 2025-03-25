export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
    case "+":
    return angka1 + angka2;
    break;
    case "-":
    return angka1 - angka2
    break;
    case "*":
    return angka1 * angka2
    break;
    case "/":
    return angka1 / angka2
    break;

    // tambahkan case untuk pengurangan
    // tambahkan case untuk pembagian
    // tambahkan case untuk perkalian
    // tambahkan case untuk pembagian
    default:
    return "Operator tidak valid!";
    }
    }