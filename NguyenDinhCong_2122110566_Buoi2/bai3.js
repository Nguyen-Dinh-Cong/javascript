/*function URL_Friendly(str)
{
    str=str.replace(/<[^>]*>/g,""); //xóa tag html
    str=str.trim();//xóa ký tự khoảng trắng 2 bên 
    str=str.replace(/\s+/g,"-");//xóa khoảng trắng chỉ để 1 khoảng tráng giữa hai từ
    str=str.replace(/[^a-zA-Z0-9-_-]/g,"");//xóa ký tự đặc biệt
    str = str.toLowerCase();//Chuyển chuỗi về in thường
    return str;
}
let str=" Cung cấp các chức năng toán học cơ bản ";
str=URL_Friendly(str);
console.log(str);*/

function convertString() {
    const inputString = document.getElementById('inputString').value.trim();
    const urlFriendlyString = inputString
        .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
        .replace(/<[^>]*>/g,"")//Loại bỏ thẻ tag
        .replace(/[^a-zA-Z0-9-_-]/g, '') // Loại bỏ các ký tự đặc biệt
        .toLowerCase(); // Chuyển đổi thành chữ thường

    document.getElementById('output').innerHTML = `URL thân thiện: ${urlFriendlyString}`;
}