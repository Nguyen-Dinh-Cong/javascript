import React from 'react'
import "../../../src/layoutStyle.css"
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div class="container-contact">
            <div class="row">
                <div class="col-md-8">
                    <div class="section-title-all">
                        <h2>Về Chúng Tôi</h2>
                        <p>F1GENZ BABIE chính là nơi hội tụ những thương hiệu uy tín, những sản phẩm dành cho mẹ và bé chính hãng, chất lượng hàng đầu tại Việt Nam. Không những thế, F1GENZ BABIE mang đến cho Ba/mẹ những trải nghiệm mua sắm tuyệt vời, đáng tin cậy và cam kết cung cấp các dịch vụ chăm sóc khách hàng, tư vấn bán hàng, tư vấn sử dụng sản phẩm và các dịch vụ giao nhận hàng tốt nhất.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="page-about-new-main-item-left">
                        <img title="Về Chúng Tôi" width={'400px'} height={'400px'} src="//bizweb.dktcdn.net/100/493/370/themes/940719/assets/page-about-new-image-1.jpg?1713464283843" alt="Về Chúng Tôi" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="page-about-new-main-item-left">
                        <img title="Liên hệ" width={'400px'} height={'400px'} src="//bizweb.dktcdn.net/100/493/370/themes/940719/assets/page-about-new-image-2.jpg?1713464283843" alt="Liên hệ" />
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="section-title-all">
                        <h2>Liên hệ</h2>
                        <p>Con càng lớn lên, thời gian con ở bên cha mẹ ngày càng ít dần, những người bạn bên cạnh chơi đùa cùng con ngày nào dần bị thay thế bằng những trò chơi, video trên các sản phẩm công nghệ.
                        Khi con bước sang độ tuổi thôi nôi, là lúc con bị cuốn hút nhiều hơn từ những Video, trò chơi trên ipad. Thời gian tiếp xúc với con đã ít rồi lại còn ít hơn nữa và dần dần con chỉ có thể tìm được những người bạn, niềm vui từ những trò công nghệ này. Tình cảm, kỹ năng, sự năng động của đứa bé 1 tuổi cũng dần giảm xuống thay vì phát triển như những đứa trẻ bình thường khác.

                        Rất may mắn cho gia đình, khi chúng tôi sớm nhìn nhận ra được vấn đề với con. Nhờ những tư vấn, lời khuyên từ bạn bè, người thân tôi cũng đã nhận ra được mình phải làm gì để mang lại niềm vui và tuổi thơ cho con trẻ.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div class="col-md-6">
                    <h2>Kết nối ngay với chúng tôi:</h2>
                    <input required="" type="text" id="contactFormName" class="form-control input-lg" name="contact[name]" placeholder="Tên của bạn" autocapitalize="words" value=""></input>
                    <input required="" type="number" id="contactFormPhone" class="form-control input-lg" name="contact[phone]" placeholder="Số điện thoại của bạn" autocapitalize="words" value=""></input>
                    <input required="" type="email" name="contact[email]" placeholder="Email của bạn" id="contactFormEmail" class="form-control input-lg" autocapitalize="off" value=""></input>
                    <textarea required="" rows="6" name="contact[body]" class="form-control" placeholder="Viết bình luận" id="contactFormMessage"></textarea>
                    <button type="submit" class="btn btn-outline insButton" title="Gửi thông tin">Gửi thông tin</button>               
                </div>
                <div className='col-md-6'>
                    <h2>Liên hệ với chúng tôi qua:</h2>
                    <ul>
                        <li>
                            <p><SiGooglemaps/> 120 Tăng Nhơn Phú, phường Phước Long B, thành phố Thủ Đức</p>
                        </li>
                        <li>
                            <p><FaPhoneSquareAlt/> 0375358640</p>                          
                        </li>
                        <li>
                            <p><MdEmail/> nguyencong30042001@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>               
)
}

export default Contact