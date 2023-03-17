import './header.scss'
import fond from '../../assets/images/fond.jpg'; 
import wood from '../../assets/images/wood.jpg';

function Header() {
    return (
      <header style={{ backgroundImage: `url(${wood})`, 
                       backgroundPosition: 'top center', 
                       backgroundRepeat: 'no-repeat',
                       backgroundSize:'cover',
                       backgroundAttachment: 'fixed'}}>
         <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="">Notre métier</a></li>
            <li><a href="">Nos Services</a></li>
            <li><a href="">Où sommmes nous ?</a></li>
            <li><a href="">Nous contacter</a></li>
          </ul>
         </nav>
         <div className='ban' style={{ backgroundImage: `url(${fond})`, backgroundPosition: '150px' }}>
            <h1>Pension le <span className='coquelicot'>Coquelicot</span></h1>
         </div>
      </header>
    );
  }

export default Header;