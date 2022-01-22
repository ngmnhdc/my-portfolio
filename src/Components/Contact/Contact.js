import React, { useRef } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {
    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_i5q09zf',
            'template_j7logbk',
            form.current,
            'user_2X9MqJhi9frqvUEPTa04a'
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="contact" className="contact-wrapper">
            <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="contact-heading">Contact</h2>
                <div className="contact-item">
                    <PhoneAndroidIcon className="contact-icon" />
                    <p className="contact-text">0985 33 11 24</p>
                </div>
                <div className="contact-item">
                    <MailOutlineIcon className="contact-icon" />
                    <a className="contact-text" href="mailto:ngmnhdc@gmail.com">ngmnhdc@gmail.com</a>
                </div>
                <div className="contact-item">
                    <LocationOnOutlinedIcon className="contact-icon" />
                    <p className="contact-text">Thu Duc City, Ho Chi Minh City, Vietnam</p>
                </div>
            </div>
            <div className="contact-form">
                {/* <p className="contact-desc">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p> */ }
                <form className="contact-form-message" ref={ form } data-aos="fade-left" data-aos-duration="1000">
                    <label className="form-item" htmlFor="name">Name</label>
                    <input className="form-input" type="text" name="name" placeholder="Your name" required />
                    <label className="form-item" htmlFor="email">Email</label>
                    <input className="form-input" type="text" name="email" placeholder="Your email" required />
                    <label className="form-item" htmlFor="message">Message</label>
                    <textarea className="form-input" type="text" name="message" placeholder="Leave a message" rows="4" required />
                    <Stack className="contact-btns" direction="row" spacing={ 1 }>
                        <Button
                            className="btn btn-send"
                            variant="contained"
                            onClick={ handleSubmit }
                        >
                            Send message
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    )
}

export default Contact
    ;
