import './header.scss'
import fond from '../../assets/images/fond.jpg'; 

function Header() {
    return (
      <header>
         <nav></nav>
         <div  style={{ backgroundImage: `url(${fond})` }}></div>
      </header>
    );
  }

export default Header;