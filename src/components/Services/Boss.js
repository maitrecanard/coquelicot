import './boss.scss';
import boss from '../../assets/images/Clair2.jpg'; 
import fond from '../../assets/images/chevaux.jpg';
function Boss() {
    return (
        <section className='boss__section' style={{ 
                                                    backgroundImage: `url(${fond})`, 
                                                    backgroundPosition: 'top center', 
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize:'cover',
                                                    backgroundAttachment: 'fixed' }}>
            <div className='boss__content'>
                <img src={boss} />
                <p><span className='coquelicot'>Clair Boudain</span> gérante</p>
            </div>
        </section>
    );
}

export default Boss;