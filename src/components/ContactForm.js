import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm }  from '../utils/validateContactForm';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components/ContactForm.css'

const ContactForm = () => {
    const handleSubmitReset = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik            
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
            onSubmit={handleSubmitReset}
            validate={validateContactForm}            
        >
            <Form className='formBody'>
                <FormGroup row className='formBody'>
                    <Label htmlFor='firstName' md='2'>
                    </Label>
                    <Col md='12'>
                        <Field
                            name='firstName'
                            placeholder='FIRST NAME'
                            className='form-control formText'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger errorMes'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                    </Label>
                    <Col md='12'>
                        <Field
                            name='lastName'
                            placeholder='LAST NAME'
                            className='form-control formText'
                            
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger errorMes'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                    </Label>
                    <Col md='12'>
                        <Field
                            name='phoneNum'
                            placeholder='PHONE NUMBER'
                            className='form-control formText'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger errorMes'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                    </Label>
                    <Col md='12'>
                        <Field
                            name='email'
                            placeholder='EMAIL ADDRESS'
                            type='email'
                            className='form-control formText' 
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger errorMes'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check className='formText' md={{size: 5, offset: -1}}>
                        <Field
                            name='agree'
                            type='checkbox'
                            className='form-check-input formText'
                        />{' '}
                        MAY WE CONTACT YOU?
                    </Label>
                    <Col md='4'>
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control formText'
                        >
                            <option>VIA PHONE</option>
                            <option>VIA EMAIL</option>
                        </Field>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        
                    </Label>
                    <Col md='12'>
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12' 
                            className='form-control formText'
                            placeholder='YOUR FEEDBACK'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{size: 10, offset: 1}}>
                        <Button type='submit' className='contactSubmitBtn'>
                            SUBMIT
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};

export default ContactForm;