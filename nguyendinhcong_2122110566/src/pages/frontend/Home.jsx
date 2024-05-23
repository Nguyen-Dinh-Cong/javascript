import React from 'react'
import ChinhSachItem from "../../components/ChinhSachItem"
import Slider from "../../components/slider"
import product from "../../assets/images/m5039-drake1-650x650-cb07a70df0a7475f9b55a08019cf3be9-jpeg.webp"
import "../../layoutStyle.css"

const Home = () => {
    return (
        <div>
            <main>
                <div className="section-slider">
                    <Slider />
                </div>
                <div className="section-chinhsach">
                    <div className="container py-5">
                        <div className="row">
                            <div class="col-md-3">
                                <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_1.png?1713464283843" title="Giao hàng nhanh, miễn phí" des="Đơn hàng lớn hơn 900K hoặc đăng ký tài khoản" />
                            </div>
                            <div class="col-md-3">
                                <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_2.png?1713464283843"
                                    title="Trả hàng, bảo hành" des="Trả hàng, đổi hàng miến phí trong vòng 15 ngày" />
                            </div>
                            <div class="col-md-3">
                                <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_3.png?1713464283843"
                                    title="Thành viên" des="Ưu đãi theo từng cấp bậc hạng thành viên. Sinh nhật quà tặng thành viên" />
                            </div>
                            <div class="col-md-3">
                                <ChinhSachItem image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_4.png?1713464283843"
                                    title="Chính hãng" des="Sản phẩm chính hãng. Được nhập 100% từ hãng" />
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
                                                <img src={product} className="img-fluid" alt=""
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
                                                <img src={product} className="img-fluid" alt=""
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
        </div>
    )
}

export default Home