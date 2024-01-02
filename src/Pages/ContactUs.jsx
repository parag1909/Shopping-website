import React from 'react'
import styles from './ContactUs.module.css'
import ContactForm from '../components/form/ContactForm'
import Button from '../components/button/Button'
import { MdMessage } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
const ContactUs = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , 
                YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            <div className={styles.section}>
                <div className={styles.left_section}>
                    <div className={styles.top_btn}>
                        <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px"/>}/>
                        <Button text='VIA CALL' icon={<BsTelephone fontSize="24px"/>}/>
                    </div>
                        <Button isOutline={true} text="VIA E-MAIL FORM" icon={<HiOutlineMail fontSize="24px"/>}/>
                        <ContactForm />
                        <Button text='Submit'/>
                </div>
                <div>
                    <img src='/images/service.png' alt='service-img'></img>
                </div>
            </div>
        </div>
    )
}

export default ContactUs