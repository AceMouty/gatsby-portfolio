import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactForm() {

    const [firstName, setFirstName] = React.useState("");

    function changeHandler(e) {
        console.log(e.target.name)
        setFirstName(e.target.value)
        console.log("value changed")
    }

    return (
        <Form>
            <Row>
                <Col md={6} sm={12} className="contact-form-input-container d-flex flex-column justify-content-between">
                    <Form.Control className="contact-form__input" placeholder="First name*" value={firstName} onChange={changeHandler} name="firstName" />
                    <Form.Control className="contact-form__input my-4 my-md-0" placeholder="Last name*" />
                    <Form.Control className="contact-form__input" placeholder="Phone*" />
                </Col>
                <Col md={6} sm={12} className="mt-4 mt-md-0">
                    <Form.Control className="contact-form__message" as='textarea' placeholder="Message*" />
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                    <a
                        href="#"
                        rel="noopener noreferrer"
                        className="cta-btn form-btn"
                    >
                        Send Message
                    </a>
                </Col>
            </Row>
        </Form>
    )
}

export default ContactForm;