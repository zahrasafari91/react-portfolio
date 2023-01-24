import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('gmail', 'template_sfnmq1x', form.current, '3xQ2owXF1Z6pcT-1g')
        .then(
            () => {
                alert('Message Successfully Sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to Send the Message, Please Try Again')
            }
        )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t', '', 'm','e']}
                        idx = {15}/>
                </h1>
                <p>I'm interested in bela bel
                I'm interested in bela bel bela
                I'm interested in bela bel bela
                I'm interested in bela bel bela
                </p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input className="flat-button"  type="submit" value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />

        </>
    )
}

export default Contact