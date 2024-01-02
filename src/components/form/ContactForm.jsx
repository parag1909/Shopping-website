import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../button/Button'


const ContactForm = () => {
  return (
    <section className={styles.section}>
      {/* <Button />s */}
      <div>
        <form name="contact" method="POST" >
          <div className={styles.form}>
            <label htmlFor="name" className={styles.label_name}>Name</label>
            <input type='text'/>
          </div>
          <div className={styles.form}> 
            <label htmlFor="email" className={styles.label_name}>E-mail</label>
            <input type='email'/>
          </div>
          <div className={styles.form}>
            <label htmlFor="name" className={styles.label_name}>Text</label>
            <textarea type='texts' rows={15} />
          </div>
        </form>
      </div>
 
    
    </section>
  )
}

export default ContactForm