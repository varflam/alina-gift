import src from '../../../assets/aboutPage/alina.jpg';

import './aboutPage.sass';

const AboutPage = () => {
    return (
        <section className="about">
            <div className='about__wrapper'>
                <img src={src} alt="Alina Khalieva" />
                <div className="about__info">
                    <h1 className="title about__title">Обо мне</h1>
                    <p className="about__descr">
                    Tell us all about your expectations, plans or concerns. We are open for any questions you might have. Let's discuss them face to face or over the phone/email- you pick.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;