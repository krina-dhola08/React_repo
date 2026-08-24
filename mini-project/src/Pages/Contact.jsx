import { useState } from "react";

function Contact(){

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        mobile:"",
        subject:"",
        message:"",
    })
    const[error,setError]=useState({})

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const validationErrors=validateForm()

        if(Object.keys(validationErrors).length>0){
            setError(validationErrors)
        }
    }

    const validateForm=()=>{
        let newErrors={}

        if(formData.name.trim()===""){
            newErrors.name="name is required"
        }

        if(formData.email.trim()===""){
            newErrors.email="email is required"
        }

        if(formData.mobile.trim()===""){
            newErrors.mobile="mobile is required"
        }

        if(formData.subject.trim()===""){
            newErrors.name="subject is required"
        }

        if(formData.message.trim()===""){
            newErrors.message="name is required"
        }
        return newErrors
    }

    return(
        <>
                <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        /><br/>
        <span className="error">{error.name}</span>
         <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
         <span className="error">{error.email}</span>

         <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
        /><br/> 
        <span className="error">{error.mobile}</span>
         <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={handleChange}
        /><br/>
         <span className="error">{error.subject}</span>
         <label>Message</label>
        <textarea
          rows="5"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea><br/>
         <span className="error">{error.message}</span>
         <button type="submit" className="btn">
          Submit
        </button>
        </form>
        </div>

        </>
    )
}
export default Contact;