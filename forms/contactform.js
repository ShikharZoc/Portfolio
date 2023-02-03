import { FormatAlignCenter, FormatAlignJustify } from "@material-ui/icons";
import emailjs from "emailjs-com";
import React from 'react';

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_um3vauc', e.target, 'user_nesHEfvC1iOCMd2b9qCRg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="contact_form">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                    <div className="txt2" style={{color: "#dc3545bf"}}>
						Send us a Message!
					</div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}