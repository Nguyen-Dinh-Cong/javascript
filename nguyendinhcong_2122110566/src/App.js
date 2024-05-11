import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./assets/images/shop_logo_image.webp";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import slide1 from "./assets/images/slider_lg_1.webp";
import slide2 from "./assets/images/slider_lg_2.webp";
import slide3 from "./assets/images/slider_lg_3.webp";
function App() {
  return (
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3' >
              <img src={logo} alt="logo" />
            </div>
            <div className='col-md-7'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-2'>
              <CiSearch/>
              <CiUser/>
              <CiHeart/>
              <CiShoppingCart/>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='slider'>
          <img src={slide1} alt="slide1" />
          
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
