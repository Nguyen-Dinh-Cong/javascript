function validateForm() {
    let maSV = document.getElementById("maSV").value;
    let hoTen = document.getElementById("hoTen").value;
    let email = document.getElementById("email").value;
    let dienThoai = document.getElementById("dienThoai").value;
    let lop = document.getElementById("lop").value;
    // Kiểm tra Mã SV
    if (!maSV.match(/^21\d{8}$/)) {
        alert("Mã sinh viên không hợp lệ");
        return false;
    }
    // Kiểm tra Họ Tên
    if (hoTen.lenght() == 0) {
        alert("Họ Tên không được để trống.");
        return false;
    }

    // Kiểm tra Email
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        alert("Email không hợp lệ.");
        return false;
    }

    // Kiểm tra Điện Thoại
    if (!dienThoai.match(/(0[3|5|7|8|9])+([0-9]{8})\b/g)) {
        alert("Điện Thoại không hợp lệ. Điện thoại phải có 10 số và đúng với các đầu số của các nhà mạng Việt Nam.");
        return false;
    }

    // Kiểm tra Lớp
    if (!lop.match(/^CCQ\w{5,6}$/)) {
        alert("Lớp không hợp lệ. Lớp phải có 8 hoặc 9 ký tự, bắt đầu bằng CCQ và kết thúc bằng 1 hoặc 2 ký tự.");
        return false;
    }
    return true;
}
