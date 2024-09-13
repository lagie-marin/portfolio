import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css"

export function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_x2xtvgn', 'template_ew48ydw', form.current, {
                publicKey: 'TMlwj6p8LKNT7MFOs',
            })
                .then(
                    () => {
                        (e.target as HTMLFormElement).reset();
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    }
                );
        }
    };

    return (
        <>
            <section id="contact" className="contact">
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Contact</h2>
                    <div className="input-box">
                        <label>Nom Complet</label>
                        <input type="text" className="field" placeholder="Entrer votre Nom" name="name" required />
                    </div>
                    <div className="input-box">
                        <label>Adresse Email</label>
                        <input type="email" className="field" placeholder="Entrer votre Email" name="email" required />
                    </div>
                    <div className="input-box">
                        <label>Votre message</label>
                        <textarea name="message" className="field mess" placeholder="Entrer votre message" required></textarea>
                    </div>
                    <div className="g-recaptcha" data-sitekey="6LeytkEqAAAAADsN2Fgcep0_Mshwt5LiUvlHYmeQ" data-action="LOGIN"></div>
                    <br />
                    <button type="submit">Envoyer Message</button>
                </form>
            </section>
        </>
    );
}