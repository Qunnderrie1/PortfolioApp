import React, { useState } from 'react'
import Divider from './Divider';
import skills from '../SkillsData'
import SkillsCard from './SkillsCard';
import PortfolioCard from './PortfolioCard';
import projects from '../portfolioData';
import axios from "axios";
import Sqaure from './Sqaure';

const Content = () => {

    const [email , setEmail ] = useState("")
    const [name , setName ] = useState("")
    const [subject , setSubject ] = useState("")
    const [text , setText ] = useState("")

    const [message ,setMessage ] = useState("Send Me A Quick Message")



    const handleSubmit = (e) => {

        e.preventDefault();

        setEmail("")
        setName("")
        setText("")
        setSubject("")

    }


    const handleMessage = () => {


        if(name == "" || text == ""){
            console.log("Please enter all input fields")
        }else{
            axios.post("http://localhost:3001" , {
                email: email,
                name: name,
                subject: subject,
                text: text
            })
            .then(res => console.log(res))

            setMessage("Message been sent!")

        }

        setTimeout(() => {
            setMessage("Send Me A Quick Message")

        }, 4000)


    }



  return (
    <div className='contentContainer '>

        <Divider />

        <section id='about' className='aboutContainer'>




            <div className='customHeader'>
            <h2>About.</h2>
            </div>

            <div className='aboutContent container'>
            <Sqaure />

            <article>
                <div className='lines'></div>
                My name is Qunnderrie Snelling, and I am a passionate full stack developer. I have always been fascinated by the intersection of desigin and technology,
                and I am thrilled to be able to bring my creative ideas to life through coding. My primary focus is both frontend and backend development, where I excel in crafting
                beauitful user friendly web applications that are both visually appealing and user friendly. My techinal skills include proficiency in HTML, CSS , Javascript + ES6 and various frontend and backend
                framework such as  React, and Node.js. I am well-versed in reponsive design principles, ensuring that websites look great and function seamlessly across different  devices and screen sizes. Continuously learning and staying
                up-to-date with the latest trends and technologies is priority for me. I am always exploring new tools, framworks, and techniques to enhance my skills and deliver cutting-edge solutions to my clients.
            </article>

           

            </div>


        </section>

        
        <Divider />

        <section id='skills' className='skills container'>
        <div className='customHeader'>
            <h2>Skills.</h2>
            </div>


            
            <div className='s-container'>

            {
                skills.map((item) => {
                    return <SkillsCard 
                    name={item.name}
                     img={item.img}
                     progress={item.progress}
                      />
                })
            }

            </div>

          
        </section>

        
        <Divider />


        <section id='portfolio' className='portfolioContainer '>
        <div className='customHeader'>
            <h2>Portfolio.</h2>
            </div>

            <div className='projectContainer container'>
                {
                    projects.map((item) => {
                        return <PortfolioCard name={item.name} img={item.img} website={item.website} />
                    })
                }
               

            </div>

        </section>

        
        <Divider />

        <section id='contact' className='contactContainer container'>
        <div className='customHeader'>
            <h2>Stay In Touch!</h2>
            </div>

            <div className='messageContainer'>
                {
                    message
                }
            </div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='form-control' type='email' required  placeholder='Email Address' />
            <input onChange={(e) => setName(e.target.value)} value={name} className='form-control' type="text" required  placeholder='Name' />
            <input onChange={(e) => setSubject(e.target.value)} value={subject} className='form-control' type="text"  placeholder='Subject (Optional)' />
            <textarea onChange={(e) => setText(e.target.value)} value={text} className='form-control' required type="text"  placeholder='Message Here....'></textarea>
            <button onClick={handleMessage}>Send Message</button>
        </form>
        </section>





    </div>
  )
}

export default Content