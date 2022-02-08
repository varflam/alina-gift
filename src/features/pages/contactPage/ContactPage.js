import src from '../../../assets/contactPage/pic.jpg';
import insta from '../../../assets/contactPage/inst.svg';
import email from '../../../assets/contactPage/email.svg';
import phone from '../../../assets/contactPage/phone.svg';

import './contactPage.sass';

const ContactPage = () => {
    return (
        <section className="contact">
            <div className='contact__wrapper'>
                <h1 className="title contact__title">Мои контакты</h1>
                <div className="contact__socials__wrapper">
                    <ul className="contact__socials">
                        <li className="contact__social">
                            <img src={email} alt="email" />
                            <p className="contact__social__descr">info@taraings.ca</p>
                        </li>
                        <li className="contact__social">
                            <img src={insta} alt="insta" />
                            <p className="contact__social__descr">@taraweddings</p>
                        </li>
                        <li className="contact__social">
                            <img src={phone} alt="phone" />
                            <p className="contact__social__descr">+1(888)699-9</p>
                        </li>
                    </ul>
                    <p className="contact__descr">
                    Tell us all about your expectations, plans or concerns. We are open for any questions you might have. Let's discuss them face to face or over the 
                    phone/email- you pick.
                    </p>
                </div>
            </div>
            <img src={src} alt="Contact me" />
        </section>
    )
}

export default ContactPage;