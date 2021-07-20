import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-main--null"></div>
      <div className="navbar-main--navigation_bar">
        <div className="navbar-main--navigation_bar--logo">
          <div className="fas fa-dna" id="logo_title"> MedMind</div>
        </div>
        <nav className="navbar-main--navigation_bar--menu_bar">
          <ul id="menu">
            <li id="element"><span>Home</span></li>
            <li id="element"><span>About</span></li>
            <li id="element"><span>Product</span></li>
            <li id="element"><span>Resource</span></li>
          </ul>
        </nav>
      </div>
      <div className="navbar-main--null">
      </div>
    </div>
  )
}

export default Navbar;