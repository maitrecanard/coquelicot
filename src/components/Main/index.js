import Presentation from "./Presentation";
import Services from "../Services";
import wood from '../../assets/images/wood.jpg';
import Contact from '../Contact'

function Main() {
    return (
        <main style={{ backgroundImage: `url(${wood})`, 
                        backgroundPosition: 'top center', 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',
                        backgroundAttachment: 'fixed'}}>
            <Presentation />
            <Services />
            <Contact />
        </main>
    )
}

export default Main;