import React from 'react'
import classes from "./ContactUsPage.module.css"
import { ContactUs } from '../../components/ContactUs/ContactUs'

const ContactUsPage = () => {
  return (
    <div className={classes.container}>
        <h1>If you are having troubles with the App, please contact Us</h1>
        <ContactUs/>

    </div>
  )
}

export default ContactUsPage