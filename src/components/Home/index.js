// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react'
import Loader from 'react-loaders';
import Img from '../../assets/images/zara-work.png'




const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['','z' ,'a','h','r','a']
    const pArray = ['p','a','s','s','i','o','n','a','t','e']
    const jobArray = ['s','o','f','t','w','a','r','e','','d','e','v','e','l','o','p','e','r']
    


    return (
        <>
        <div className="container home-page">
            {/* <div>
                <img src={Img} alt='developer' />
            </div> */}
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={LogoTitle} alt='developer' /> */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={10}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={pArray}
                    idx={18}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={18}/>
                </h1>
                <h2> 
                with Bachelor’s degree in Computer engineering, <br />
                a Software Development Diploma <br /> and Industry work experience
                </h2>
                <Link to="/contact" className="flat-button"> Let's Talk (: </Link>
            </div>

        </div>
        <Loader type='pacman' />
        </>


    );
}

export default Home