import './contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="contact__container">
            <div className="contact__title title-name-section">Contact
                {/* NUMBERPAGE */}
                <div className="number__page">
                    <span className='text__page'>004</span>
                </div>
            </div>

            <div className="contact__content">
                <div 
                style={{ flex: 1 }}>
                    <ContactInfoCard 
                        iconUrl="../../src/assets/Logo/mail.png"
                        text="FransAr@gmail.com"
                    />

                    <ContactInfoCard 
                        iconUrl="../../src/assets/Logo/telegram.png"
                        text="Frans@16"
                    />
                </div>

                <div 
                style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>


        {/* BORDER LINE ======================================================================*/}
            <div className='shapes'>
                <i class="ri-add-line shape add3"></i>
                <i class="ri-add-line shape add4"></i>
            </div>
        </div>
    </section>
  )
}

export default Contact