import './header.scss'
import fond from '../../assets/images/fond.jpg'; 

function Header() {
    return (
      <header>
         <nav></nav>
         <div className='ban' style={{ backgroundImage: `url(${fond})`, backgroundPosition: '150px' }}>
            <h1>Pension le Coquelicot</h1>
         </div>
      </header>
    );
  }

export default Header;