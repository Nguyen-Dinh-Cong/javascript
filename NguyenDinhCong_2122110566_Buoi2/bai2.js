function Str_Limit(str,limit=10)
{
    //xóa tag html
    str=str.replace(/<[^>]*>/g,"");
    //xóa ký tự khoảng trắng 2 bên 
    str=str.trim();
    //xóa khoảng trắng chỉ để 1 khoảng tráng giữa hai từ
    str=str.replace(/\s+/g," ");
    //Chuyển chuỗi về in thường
    str = str.toLowerCase();
    //Chuyển chuỗi thành mảng
    const mang = str.split(" ");
    //
    const mangmoi = mang.slice(0,limit);
    str = mangmoi.join(" ");
    return str;
}
let str=`<p> W3Schools is optimized for learning and training Examples might be simplified to improve reading and learning.
Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
of all content</p>`;
str = Str_Limit(str);
console.log(str);
