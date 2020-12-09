import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ContactForm() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    function changeHandler(e) {
        if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "phone") {
            setPhone(e.target.value)
        } else if (e.target.name === "message") {
            setMessage(e.target.value)
        }

    }

    function submitHandler(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            name,
            email,
            phone,
            message
        }

        const config = {
            method: form.method,
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(data)
        }

        fetch(form.action, config)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    setSuccess(true);
                }
            })

        e.target.reset();
    }

    return (
        <Form as="form" onSubmit={submitHandler} action={process.env.GATSBY_FORMAPI} method="POST">
            <Row>
                <Col md={6} sm={12} className="contact-form-input-container d-flex flex-column justify-content-between">
                    <Form.Control className="contact-form__input" placeholder="Name*" onChange={changeHandler} name="name" />
                    <Form.Control className="contact-form__input my-4 my-md-0" placeholder="Email*" onChange={changeHandler} name="email" />
                    <Form.Control className="contact-form__input" placeholder="Phone*" onChange={changeHandler} name="phone" />
                </Col>
                <Col md={6} sm={12} className="mt-4 mt-md-0">
                    <Form.Control className="contact-form__message" as='textarea' placeholder="Message*" onChange={changeHandler} name="message" />
                </Col>
            </Row>
            {!success && <button rel="noopener noreferrer" className="cta-btn form-btn mt-5" type="submit">Send Message</button>}
            {success && <p className="mt-5 form-success">Thank You!</p>}
        </Form>
    )
}

export default ContactForm;