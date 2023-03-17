import './contact.scss';

function Contact() {
    return (
        <section className="form-contact">
            <form>
                <h3>Nous contacter</h3>
                <input type="text" placeholder="Nom et prénom" />
                <input placeholder="Adresse email" />
                <textarea rows="5" placeholder="Message"></textarea>
                <button>Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;