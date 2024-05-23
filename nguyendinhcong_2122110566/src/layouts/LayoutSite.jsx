import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../assets/images/shop_logo_image.webp";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import "../layoutStyle.css"

const LayoutSite = () => {
    return (
        <div>
            <header clasName='bg-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <img src={logo} alt="logo" style={{ width: '200px', marginTop: '6px' }} />
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
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Converse All Style 2</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    classic
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Chuck Taylor</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Giày</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Túi xách</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Accessories - Phụ trang
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Thắt lưng</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Mắt kính</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Trang sức</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><a className="dropdown-item" href="#">Mũ nón</a></li>
                                                    <li><hr className="dropdown-divider" /></li>
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
                                <div className="col-4 text-center" style={{ fontSize: '25px' }}><CiUser /></div>
                                <div className="col-4 text-center" style={{ fontSize: '25px' }}><CiHeart /></div>
                                <div className="col-4 text-center" style={{ fontSize: '25px' }}><CiShoppingCart /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer className='text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-4">
                            <a href="/" title="F1GENZ Shoes" aria-label="F1GENZ Shoes">
                                <img title="F1GENZ Shoes" src={logo} alt="F1GENZ Shoes" style={{ width: '200px' }} />
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
                                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0375358640</a><br></br>
                                    Hỗ trợ sử dụng:
                                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0375358640</a><br></br>
                                    Hỗ trợ vận chuyển:
                                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 0375358640</a><br></br>
                                    Email:
                                    <a aria-label="liên hệ" title="liên hệ" href="mailto:support@sapo.vn"> nguyencong30042001@gmail.com</a><br></br>
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
                                    <a href="/collections/all" style={{ fontSize: '30px' }}>
                                        <FaFacebook />
                                    </a>
                                </div>
                                <div className="col-3 text center">
                                    <a href="/collections/all" style={{ fontSize: '30px', color: 'black' }}>
                                        <FaTiktok />
                                    </a>
                                </div>
                                <div className="col-3 text center">
                                    <a href="/collections/all" style={{ fontSize: '30px', color: 'red' }}>
                                        <FaYoutube />
                                    </a>
                                </div>
                                <div className="col-3 text center">
                                    <a href="/collections/all" style={{ fontSize: '30px', color: 'pink' }}>
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
            
            <div class="dhl-copyright bg-dark py-3">
                <div class="container text-center text-white">
                    Thiết kế bởi: Nguyễn Đình Công - Phone: 0375358640
                </div>
            </div>
        </footer>
        </div >
    )
}

export default LayoutSite