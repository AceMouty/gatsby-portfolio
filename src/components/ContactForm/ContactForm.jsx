import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function ContactForm() {
    return (
        <Form>
            <Row>
                <Col md={6} sm={12} className="contact-form-input-container d-flex flex-column justify-content-between">
                    <Form.Control className="contact-form__input" placeholder="First name*" />
                    <Form.Control className="contact-form__input my-4 my-md-0" placeholder="Last name*" />
                    <Form.Control className="contact-form__input" placeholder="Phone*" />
                </Col>
                <Col md={6} sm={12} className="mt-4 mt-md-0">
                    <Form.Control className="contact-form__message" as='textarea' placeholder="Message*" />
                </Col>
            </Row>
        </Form>
    )
}

export default ContactForm;