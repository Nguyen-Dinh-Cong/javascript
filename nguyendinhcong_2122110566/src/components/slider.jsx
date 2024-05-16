import slide1 from "../assets/images/slider_lg_1.webp";
import slide2 from "../assets/images/slider_lg_2.webp";
import slide3 from "../assets/images/slider_lg_3.webp";
function Slider(props){
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="slide1" />
                <div className='slide-text1'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Sale tất cả sản phẩm</strong></h1>
                  <p>Giảm 10% cho tất cả sản phẩm</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="slide2" />
                <div className='slide-text2 tex-center'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Mùa hè năng động</strong></h1>
                  <p>Nhập ngay mã F1CHAOHE</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="slide3" />
                <div className='slide-text text-end'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Bộ sưu tập mới</strong></h1>
                  <p>Chuck 70 luôn tươi</p>
                  <button>Xem ngay</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    );
}
export default Slider