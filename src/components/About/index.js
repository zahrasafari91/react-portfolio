import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// const data = [
//     {
//       id: 1,
//     //   image: ImageService1,
//       title: "OOP",
//       description:
//         "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//     },
//     {
//       id: 2,
//     //   image: ImageService2,
//       title: "Web Development",
//       description:
//         "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//     },
//     {
//       id: 3,
//     //   image: ImageService3,
//       title: "Mobile",
//       description:
//         "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
//     },
//   ];


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
                        idx = {15}/>
                </h1>
                <p>My training and experience as a software developer, along with a solid engineering foundation, <br />
                   gained from my Bachelor's degree, helped me develop strong problem-solving capabilities. <br />
                   I successfully finished several fundamental software engineering courses and also attended <br />a 
                   software development program at Bow Valley College where I gained extensive hands-on <br /> experience in
                   full-stack software development.Furthermore, <br />I have developed several applications in Java,
                   Python and JS (React, Angular, Nodejs). <br />
                   I also work with SQL, Rest APIs, Cloud Technologies(AWS) and GitHub.</p>
{/* 
                   <p className="services__container grid">
                   {data.map(({id, image, title, description})=>{
                    return(
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
                   </p> */}
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About