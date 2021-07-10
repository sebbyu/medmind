import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div></div>
      <div className="nav_bar">
        <div className="fas fa-dna"> MedMind</div>
        <nav className="menu_bar">
          <ul id="menu">
            <li id="element"><span>About</span></li>
            <li id="element"><span>Product</span></li>
            <li id="element"><span>Resource</span></li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar;