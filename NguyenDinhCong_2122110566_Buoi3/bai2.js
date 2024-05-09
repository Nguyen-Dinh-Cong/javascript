function addMonHoc() {
    var monHocInput = document.getElementById("monHocInput");
    var monHocValue = monHocInput.value.trim();

    // Kiểm tra xem người dùng đã nhập tên môn học chưa
    if (monHocValue === "") {
        alert("Vui lòng nhập tên môn học.");
        return;
    }

    var monHocList = document.getElementById("monHocList");

    // Tạo một phần tử <li> mới
    var li = document.createElement("li");

    // Tạo nội dung cho phần tử <li>
    li.textContent = monHocValue;

    // Tạo nút xóa môn học
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        monHocList.removeChild(li);
    };

    // Thêm nút xóa vào phần tử <li>
    li.appendChild(deleteButton);

    // Thêm phần tử <li> vào danh sách môn học
    monHocList.appendChild(li);

    // Đặt lại giá trị của input về rỗng
    monHocInput.value = "";
}