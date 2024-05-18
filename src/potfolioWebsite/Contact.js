import { useFormik } from 'formik';
import * as yup from 'yup';
import React from "react"
import axios from 'axios';

export default function ContactMe() {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Subject: '',
            Message: ''
        },
        validationSchema: yup.object({
            Name: yup.string()
                     .required('Name required'),
            Email: yup.string()
                      .required('email required')
                      .email('invalid email'),
            Subject: yup.string()
                        .required('subject required'),
            Message: yup.string()
                        .required('message required')
        }),
        onSubmit: values =>{
            axios.post("http://127.0.0.1:8080/getmessage",values);
            alert("Registered Successfully");
            console.log(values)
        }
    })
    return (
        <div className='mt-5 text-white' style={{fontSize: '17px'}}>
            <h1 className='text-center pb-5'>CONTACT ME</h1>
            <div className='row m-0'>
                <div className='col ps-5 pe-5'>
                    <dl>
                        <dt className='mb-2'>Get in Touch</dt>
                        <dd>If You Want to contact me personally you can call me between 10 AM to 6 PM my mobile no. 8329093880</dd>
                        <dt><span className='bi bi-person-fill'></span> Name</dt>
                        <dd className='ms-4'> Akshay Rakhunde</dd>
                        <dt><span className='bi bi-geo-alt-fill'></span> Address</dt>
                        <dd className='ms-4'> Ward-1 At-Mangli Post-Dhanora TQ-Zari Jamni Dist-Yavatmal Maharashtra - 445305</dd>
                        <dt><span className='bi bi-envelope-fill'></span> Gmail</dt>
                        <dd className='ms-4'> rakhundeakshay29@gmail.com</dd>
                    </dl>
                </div>
                <form className='col pe-4 ps-4' onSubmit={formik.handleSubmit}>
                    <h5 className='mb-3'>Message me</h5>
                    <ol className='list-unstyled input-group row'>
                        <li className='input-group col mb-2'>
                            <span className='bi bi-person-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Name} {...formik.getFieldProps('Name')} name='Name' type='text' placeholder='Name' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Name && formik.touched.Name?formik.errors.Name:null}</div>
                        </li>
                        <li className='input-group col mb-2'>
                            <span className='bi bi-envelope-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Email} {...formik.getFieldProps('Enail')} name='Email' type='text' placeholder='Email' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Email && formik.touched.Email?formik.errors.Email:null}</div>
                        </li>
                        <li className='input-group mt-3 mb-2'>
                            <span className='bi bi-chat-left-quote-fill input-group-text'></span>
                            <input className='form-control' value={formik.values.Subject} {...formik.getFieldProps('Subject')} name='Subject' type='text' placeholder='Subject' />
                            <div className='text-danger position-absolute top-100'>{formik.errors.Subject && formik.touched.Subject?formik.errors.Subject:null}</div>
                        </li>
                        <li className='input-group mt-3 mb-2'>
                            <span className='bi bi-chat-left-dots-fill input-group-text'></span>
                            <textarea className='form-control' value={formik.values.Message} {...formik.getFieldProps('Message')} name='Message' placeholder='Message...'></textarea>
                            <div className='text-danger position-absolute top-100'>{formik.errors.Message && formik.touched.Message?formik.errors.Message:null}</div>
                        </li>
                        <li className='mt-3'><button type='submit' className='btn btn-danger p-2'>Send Message</button></li>
                    </ol>
                </form>
            </div>
        </div>
    )
}