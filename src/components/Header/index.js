import './header.scss'
import fond from '../../assets/images/fond.jpg'; 

function Header() {
    return (
      <header>
         <nav>
          <ul>
            <li>Accueil</li>
            <li>Notre métier</li>
            <li>Nos Services</li>
            <li>Où sommmes nous ?</li>
            <li>Nous contacter</li>
          </ul>
         </nav>
         <div className='ban' style={{ backgroundImage: `url(${fond})`, backgroundPosition: '150px' }}>
            <h1>Pension le <span className='coquelicot'>Coquelicot</span></h1>
         </div>
      </header>
    );
  }

export default Header;