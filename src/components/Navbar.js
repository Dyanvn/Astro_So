import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Astro Số</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/numerology">Thần số học</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Đăng nhập</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Đăng ký</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;