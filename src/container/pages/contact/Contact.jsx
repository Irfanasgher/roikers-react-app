import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import Footer from "../../../components/common/footer/Footer";
import ContactForm from "../../../components/pages/contact/contact-form/ContactForm";
class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true}/>
                <Header text='Contact' changePosition={true} changeImage4={true}/>
                <ContactForm />
                <Footer />
            </div>
        );
    }
}

export default Contact;
