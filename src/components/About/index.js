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
                <p>about me</p>
                <p>about me</p>
                <p>about me</p>

            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About