function RemovePlace(str)
{
    //xóa ký tự khoảng trắng 2 bên 
    str=str.trim();
    //xóa khoảng trắng chỉ để 1 khoảng tráng giữa hai từ
    str=str.replace(/\s+/g," ");
    //Chuyển chuỗi về in thường
    str = str.toLowerCase();
    //Chuyển chuỗi thành mảng
    str = str.split(" ");
    //Chuyển ký tự đầu về in hoa
    str = str.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
      });
    return str.join(' ');
}
let str=" Xin   cHao ";
console.log(str.length);

str = RemovePlace(str);
console.log(str.length);
console.log(str);
