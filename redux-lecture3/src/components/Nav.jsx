import { Link } from "react-router-dom";
const Nav = (props) => (
  <ul>
    <li>
      <Link to="/">Anasayfa</Link>
    </li>
    <li>
      <Link to="/products">Ürünler</Link>
    </li>
    <li>
      <Link to="/query-products">Q-Ürünler</Link>
    </li>
    <li>
      <Link to="/contact">İletişim</Link>
    </li>
  </ul>
);

export default Nav;
