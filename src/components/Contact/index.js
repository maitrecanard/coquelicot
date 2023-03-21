import './contact.scss';
import { useMediaQuery } from 'react-responsive'

function Contact() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
    return (
        <>
        { isDesktop && <section className="form-contact">
            <form>
                <h3>Nous contacter</h3>
                <input type="text" placeholder="Nom et prénom" />
                <input placeholder="Adresse email" />
                <textarea rows="5" placeholder="Message"></textarea>
                <button>Envoyer</button>
            </form>
        </section>}
        {isMobile && <section className="form-contact--mob">
            <form>
                <h3>Nous contacter</h3>
                <input type="text" placeholder="Nom et prénom" />
                <input placeholder="Adresse email" />
                <textarea rows="5" placeholder="Message"></textarea>
                <button>Envoyer</button>
            </form>
        </section>}
        </>
    );
}

export default Contact;