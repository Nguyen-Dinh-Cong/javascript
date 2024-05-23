import React from 'react'
import "../../layoutStyle.css"

const Product = () => {
    return (
        <div className='container-menu-product'>
            <div class="breadcrumb-wrap">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/" aria-label="Trang chủ" title="Trang chủ">Trang chủ</a></li>
                    <li class="breadcrumb-item active"><span>Tất cả sản phẩm</span></li>
                </ol>
            </div>
            <div className='col'>
                <div className='row-md-3'>

                    <div class="shop-filter">
                        <h5>Thương hiệu sản phẩm</h5>
                        <ul>
                            <li><a href='#'>Converse</a></li>
                        </ul>
                    </div>
                    <div class="shop-filter" data-type="type">
                        <h5>Loại sản phẩm</h5>
                        <div class="shop-filter-list">
                            <ul>
                                <li><a href='#'>Giày cổ cao</a></li>
                                <li><a href='#'>Giày cổ thấp</a></li>
                                <li><a href='#'>Tất</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="shop-filter" data-type="price">
                        <h5>Giá sản phẩm</h5>
                        <div class="shop-filter-list">
                            <div class="shop-filter-item">
                                <label>
                                    <input type="checkbox" id="shop-filter-price-item1" />
                                    Dưới 1.000.000₫
                                </label>
                            </div>
                            <div class="shop-filter-item">
                                <label>
                                    <input type="checkbox" id="shop-filter-price-item2" />
                                    Từ 1.000.000₫ - 3.000.000₫
                                </label>
                            </div>
                            <div class="shop-filter-item">
                                <label>
                                    <input type="checkbox" id="shop-filter-price-item3" />
                                    Từ 3.000.000₫ - 5.000.000₫
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product