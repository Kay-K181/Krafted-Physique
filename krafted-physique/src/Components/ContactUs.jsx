import React, { useState } from "react";

export default function ContactUs(){

    const [input, setInput] = useState('');
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    return(
        <form className="contactUsLayout">
            <label>
                <input
                    type="text"
                    name="email"
                    value={input}
                    placeholder="Name"
                    onChange={handleChange}
                >                 
                </input>
            </label>
            <label>
                <input
                    type="email"
                    name="email"
                    value={input}
                    placeholder="Email"
                    onChange={handleChange}
                >                 
                </input>
            </label>
            <label>
                Write your post:
                <textarea 
                    name="postContent" 
                    rows={4} 
                    cols={40} />
            </label>    
            <button>
                Submit
            </button>
        </form>
    )
}