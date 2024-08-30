import { useState } from "react";

export default function ContactUs() {

    const [input, setInput] = useState({username: '', email: '', postContent:''});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    return(
        <div className="contactUsContainer">
            <div className="contactUsTitleContainer">
                <h4 className="contactUsTitle">Get in touch with Krafted Physique</h4>
                <p>Please use the form below to contact us with any questions you have. We aim to respond within 24 hours.</p>
            </div>
            <div className="formContainer">
                <h4>Contact Us</h4>
                <form className="formLayout">
                        <label>
                            <span>Name</span>
                            <input
                                type="text"
                                name="username"
                                value={input.username}
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                            >                 
                            </input>
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                placeholder="E-mail"
                                onChange={handleChange}
                                required
                            >                 
                            </input>
                        </label>
                        <label>
                            <span>Message</span>
                            <textarea 
                                name="postContent" 
                                rows={4} 
                                cols={40}
                                value={input.postContent}
                                placeholder="Message"
                                onChange={handleChange}
                                required
                            />
                        </label>    
                        <button>
                            Submit
                        </button>
                    </form>
            </div>
        </div>
    )
}