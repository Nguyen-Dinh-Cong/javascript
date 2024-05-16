import './layoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./assets/images/shop_logo_image.webp";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram} from "react-icons/fa";
import ChinhSachItem from "./components/ChinhSachItem.jsx"
import Slider from "./components/slider.jsx"
import product from "./assets/images/m5039-drake1-650x650-cb07a70df0a7475f9b55a08019cf3be9-jpeg.webp"
function App() {
  
  return (
    <>
      <header clasName='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img src={logo} alt="logo" style={{width:'200px', marginTop:'6px'}}  />
            </div>
            <div className='col-md-9'>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Converse All
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Converse All Style 1</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Converse All Style 2</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          classNameic
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Chuck Taylor</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Giày</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Túi xách</a></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Accessories - Phụ trang
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Thắt lưng</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Mắt kính</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Trang sức</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Mũ nón</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Khăn choàng</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Tin tức</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Liên hệ</a>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit" ><CiSearch /></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-1'>
              <div className="row">
                <div className="col-4 text-center" style={{fontSize:'25px'}}><CiUser /></div>
                <div className="col-4 text-center" style={{fontSize:'25px'}}><CiHeart /></div>
                <div className="col-4 text-center" style={{fontSize:'25px'}}><CiShoppingCart /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="section-slider">
          <Slider/>
        </div>
        <div className="section-chinhsach">
          <div className="container py-5">
            <div className="row">
              <div class="col-md-3">
                  <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_1.png?1713464283843" title="Giao hàng nhanh, miễn phí" des="Đơn hàng lớn hơn 900K hoặc đăng ký tài khoản"/>
              </div>
                <div class="col-md-3">                
                    <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_2.png?1713464283843"
                    title="Trả hàng, bảo hành" des="Trả hàng, đổi hàng miến phí trong vòng 15 ngày"/>
                </div>
                <div class="col-md-3">
                  <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_3.png?1713464283843"
                  title="Thành viên" des="Ưu đãi theo từng cấp bậc hạng thành viên. Sinh nhật quà tặng thành viên"/>
                </div>
                <div class="col-md-3">
                    <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_4.png?1713464283843"
                    title="Chính hãng" des ="Sản phẩm chính hãng. Được nhập 100% từ hãng"/>
                </div>
            </div>
            <div className='product_category'>
              <div className="row">
                <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img src={product} className="img-fluid" alt=""
                            id="img1" />                       
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Chuck Taylor All Star classNameic 1</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill"><del>1.200.000đ</del></div>
                        <div className="flex-fill text-end text-main">1.000.000đ</div>
                      </h3>
                  </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img src={product}  className="img-fluid" alt=""
                            id="img1" />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Chuck Taylor All Star classNameic 2</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill"><del>1.200.000đ</del></div>
                        <div className="flex-fill text-end text-main">1.000.000đ</div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img src={product}  className="img-fluid" alt=""
                            id="img1" />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Chuck Taylor All Star classNameic 3</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill"><del>1.200.000đ</del></div>
                        <div className="flex-fill text-end text-main">1.000.000đ</div>
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 mb-4">
                    <div className="product-item border">
                      <div className="product-item-image">
                        <a href="product_detail.html">
                          <img src={product} className="img-fluid" alt=""
                            id="img1" />
                        </a>
                      </div>
                      <h2 className="product-item-name text-main text-center fs-5 py-1">
                        <a href="product_detail.html">Chuck Taylor All Star classNameic 4</a>
                      </h2>
                      <h3 className="product-item-price fs-6 p-2 d-flex">
                        <div className="flex-fill"><del>1.200.000đ</del></div>
                        <div className="flex-fill text-end text-main">1.000.000đ</div>
                      </h3>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-dark text-white'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-4">
					    <a href="/" title="F1GENZ Shoes" aria-label="F1GENZ Shoes">
						    <img title="F1GENZ Shoes" src={logo} alt="F1GENZ Shoes" style={{width:'200px'}}/>
					    </a>
					    <p>F1GENZ SHOES luôn cam kết, đảm bảo đưa sản phẩm trực tiếp từ nhà sản xuất đến tay người
                  dùng và kiểm soát được chất lượng để đáp ứng được nhu cầu ngày càng cao của khách hàng.
                  Tất cả các sản phẩm tại F1GENZ SHOES đều có nguồn gốc xuất xứ rõ ràng, chất lượng.</p>
              <h4>
                Liên hệ:
                <i className="fa fa-chevron-down"></i>
              </h4>
              <div className="footer-content">
                <p> Tư vấn dịch vụ:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ sử dụng:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ vận chuyển:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Email:
                    <a aria-label="liên hệ" title="liên hệ" href="mailto:support@sapo.vn"> support@sapo.vn</a><br></br>
                  </p>
                </div>
				    </div>
            <div className="col-md-4 pt-4">
					    <h4>Về chúng tôi <i className="fa fa-chevron-down"></i></h4>
					    <div className="footer-content">
						    <ul>
							    <li><a href="/gioi-thieu">Giới thiệu</a></li>
							    <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
							    <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
							    <li><a href="/dieu-khoan-dich-vu">Điều khoản dịch vụ</a></li>
						    </ul>
					    </div>
              <h4>Danh mục nổi bật <i className="fa fa-chevron-down"></i></h4>
					    <div className="footer-content">
						    <ul>
							    <li><a href="/chuck-2" aria-label="Chuck 2" title="Chuck 2">Chuck 2</a></li>
							    <li><a href="/converse-all" aria-label="Converse All" title="Converse All">Converse All</a></li>
							    <li><a href="/socks" aria-label="Socks" title="Socks">Socks</a></li>
							    <li><a href="/jack-purcell" aria-label="Jack Purcell" title="Jack Purcell">Jack Purcell</a></li>
							    <li><a href="/converse-seasonal" aria-label="Converse Seasonal" title="Converse Seasonal">Converse Seasonal</a></li>
						    </ul>
					    </div>
				    </div>
            <div className="col-md-4 pt-4">
					    <h4>Liên hệ với chúng tôi <i className="fa fa-chevron-down"></i></h4>
						  <p>Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả khách hàng của mình.</p>
              <div className="row">
                <div className="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px'}}>
                    <FaFacebook />
                  </a>
                </div>
                <div className="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'black'}}>
                    <FaTiktok />
                  </a>
                </div>
                <div className="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'red'}}>
                    <FaYoutube />
                  </a>
                </div>
                <div className="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color:'pink'}}>
                    <FaInstagram />
                  </a>
                </div>
                <div>
                  <h3 className="fs-5">
                    <strong>Lượt truy cập</strong>
                  </h3>
                  <p className="my-1">9888 lượt</p>
                </div>
	            </div>
				    </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
