// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import {Link} from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react'
import Loader from 'react-loaders';
import Particles from 'react-tsparticles';

const particlesOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: true,
            },
            number: { value: 100, density: { enable: true, value_are: 100 } },
            color: { value: "#cbe8f2" },
        }
    }
}

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['','z' ,'a','h','r','a']
    const jobArray = ['s','o','f','t','w','a','r','e','','d','e','v','e','l','o','p','e','r']

    
    return (
        <>
        <div>
            <Particles className = 'particles' params = { particlesOptions }/>
         </div >
        <div className="container home-page">
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
                    strArray={jobArray}
                    idx={18}/>
                </h1>
                <h2> mention your skills here mention your skills here mention your skills here
                mention your skills here mention your skills here mention your skills here mention your skills here
                mention your skills here mention your skills here mention your skills here mention your skills here
                mention your skills here mention your skills here mention your skills here
                </h2>
                <Link to="/contact" className="flat-button"> Contact Me </Link>
            </div>
        </div>
        <Loader type='pacman' />
        </>


    );
}

export default Home