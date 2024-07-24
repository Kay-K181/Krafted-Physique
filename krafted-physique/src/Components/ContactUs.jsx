import React, { useState } from "react";

export default function ContactUs(){

    const [input, setInput] = useState({username: '', email: '', postContent:''});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    return(
        <div className="contactUsContainer">
            <img className="contactUsImg" src="https://cdn.pixabay.com/photo/2018/04/18/09/48/animal-3329963_1280.png" alt="Image of an ape"/>
            <div className="titleAndFormContainer">
                <div className="contactUsTitle">Contact Us</div>
                    <form className="formLayout">
                        <label>
                            <input
                                type="text"
                                name="username"
                                value={input.username}
                                placeholder="Full Name"
                                onChange={handleChange}
                            >                 
                            </input>
                        </label>
                        <label>
                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                placeholder="E-mail"
                                onChange={handleChange}
                            >                 
                            </input>
                        </label>
                        <label>
                            <textarea 
                                name="postContent" 
                                rows={4} 
                                cols={40}
                                value={input.postContent}
                                placeholder="Message"
                                onChange={handleChange}
                            />
                        </label>    
                        <button>
                            Contact Us
                        </button>
                    </form>
                </div>
        </div>
    )
}