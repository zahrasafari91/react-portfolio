import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
<<<<<<< HEAD
import emailjs from '@emailjs/browser';
=======
import emailjs from '@emailjs/browser'
>>>>>>> 0b30b9a (initial commit)

const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
<<<<<<< HEAD
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
=======
    
        emailjs
          .sendForm('service_8fq65rb', 'template_17jcsi9', form.current, '3xQ2owXF1Z6pcT-1g')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
          console.log('hit me')
      }
>>>>>>> 0b30b9a (initial commit)
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
<<<<<<< HEAD
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" />
=======
                            </li>
                            <li className='half'>
                            <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="subject" />
>>>>>>> 0b30b9a (initial commit)
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
<<<<<<< HEAD
                                <input className="flat-button"  type="submit" value="Send" />
=======
                                <input className="flat-button"  type="submit" value="submit" />
>>>>>>> 0b30b9a (initial commit)
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