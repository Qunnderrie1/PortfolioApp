import React, { useState } from 'react'
import Divider from './Divider';
import skills from '../SkillsData'
import SkillsCard from './SkillsCard';
import PortfolioCard from './PortfolioCard';
import projects from '../portfolioData';
import axios from "axios";
import web from '../Images/computer-icon.png'



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
            axios.post("https://www.qunnderrie.com" , {
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
    <div className='contentContainer container '>



        <Divider />


        <section id='skills' className='skills container'>
        <div className='customHeader'>
            <h2>Skills.</h2>
            </div>


            
            <div className='s-container'>
       

                <div className='iconContainer'>
                    <div className='iconSkillsContainer'>
                        {
                            skills.map((item) => {
                                return <SkillsCard name={item.name} img={item.img} description={item.description}   />
                            })
                        }

                    </div>

                </div>


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