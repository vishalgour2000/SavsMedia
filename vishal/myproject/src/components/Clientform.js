import React,{useState} from 'react'
import './Clientform.css'
import axios from 'axios'
const Clientform = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [company,setCompany]=useState('');
    const [contact,setContact]=useState(0);
    const [niche,setNiche]=useState('');
    const [errorOrSuccess, setErrorOrSuccess] = useState({
        error: true,
        success: false
      });
    function nameHandler(e){
        // e.preventDefault()
        setName(e.target.value)
    }

    function emailHandler(e){
        // e.preventDefault()
        setEmail(e.target.value)
    }

    function companyHandler(e){
        // e.preventDefault()
        setCompany(e.target.value)
    }

    function contactHandler(e){
        // e.preventDefault()
        setContact(e.target.value)
    }

    function nicheHandler(e){
        // e.preventDefault()
        setNiche(e.target.value) 
    }

    function handleSubmit(e){
        e.preventDefault()
        const data={
            name:name,
            email:email,
            company:company,
            contact:contact,
            niche:niche
        }
        console.log(data)
        axios.post("https://savs-media-53036-default-rtdb.firebaseio.com/data.json",data).then(e=>{
            console.log(e)
        }).catch(e=>{
            console.log(e)
        })
    }
    const handleSubmit1 = e => {
        e.preventDefault();
        if (!name.length || !email.length || !company.length || !contact.length || !niche.length) {
          setErrorOrSuccess({ error: true, success: false })
        }
      };

    return (
        <div>
         <body>
            <form >
                <h2>Provide Your Informaton Here</h2>
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required onChange={nameHandler} />

                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required onChange={emailHandler}/>

                <label for="company">Company Name:</label>
                <input type="text" id="company" name="company" required onChange={companyHandler}/>

                <label for="message">Contact No.</label>
                <input type="text" id="company" name="company" required onChange={contactHandler}/>

                <label for="message">Niche</label>
                <input type="text" id="company" name="company" required onChange={nicheHandler}/>

                <button type='button' onClick={handleSubmit}>Let's Connect</button>
            </form>
            </body>
        </div>
    )
}

export default Clientform