import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const About = () => {
    const [letterClass] = useState('text-animate')

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b','o','u','t',' ','m','e']}
                        idx = {15}

                    />
                </h1>
                <p>My training and experience as a software developer, along with a solid engineering foundation, <br />
                   gained from my Bachelor's degree, helped me develop strong problem-solving capabilities. <br />
                   I successfully finished several fundamental software engineering courses and also attended <br />a 
                   software development program at Bow Valley College where I gained extensive hands-on <br /> experience in
                   full-stack software development.</p>
                <p>Furthermore, I have developed several applications in Java, 
                   Python and JS (React, Angular, Nodejs). <br />
                   I also work with SQL, Rest API, Cloud Technologies( like AWS) and GitHub.</p>
                <p>about me</p>

            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About