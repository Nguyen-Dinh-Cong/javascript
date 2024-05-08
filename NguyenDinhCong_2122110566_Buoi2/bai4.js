function tinhToan() {
    const so1 = parseFloat(document.getElementById("so1").value);
    const so2 = parseFloat(document.getElementById("so2").value);
    const phepToan = document.getElementById("pheptoan").value;
    let ketQua;

    switch (phepToan) {
        case "+":
            ketQua = so1 + so2;
            break;
        case "-":
            ketQua = so1 - so2;
            break;
        case "*":
            ketQua = so1 * so2;
            break;
        case "/":
            if (so2 === 0) {
                ketQua = "Lỗi: Chia cho 0";
            } else {
                ketQua = so1 / so2;
            }
            break;
        case "sqrt":
            if (so1 < 0) {
                ketQua = "Lỗi: Căn bậc hai của số âm";
            } else {
                ketQua = Math.sqrt(so1);
            }
            break;
        case "pow":
            ketQua = Math.pow(so1, so2);
            break;
        default:
            ketQua = "Lỗi: Phép toán không hợp lệ";
    }

    document.getElementById("output").innerHTML = `Kết quả: ${ketQua}`;
}