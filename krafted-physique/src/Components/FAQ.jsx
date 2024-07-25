import React, { useState } from "react";

export default function FAQ(){
    const [selected, setSelected] = useState(null);

    function toggle(index){
        if(selected !== index){
            return setSelected(index);
        } else {
            return setSelected(null);
        }
    }


    return (
        <div className="faqContainer">
            <img src="https://cdn.pixabay.com/photo/2022/08/02/03/22/monkey-7359393_1280.png" alt="ape walking" />
            <h1 className="titleFAQ">Frequently Asked Questions</h1>
            <div className="accordian">
                {data.map((item, index) => (
                    <div className="item" key={index}>
                    <div className="title" onClick={() => toggle(index)}>
                        <h2 className="question">{item.question}</h2> 
                        <span>{selected === index ? "-" : "+"}</span>         
                    </div> 
                    <div className={`answer ${selected === index ? "show" : ''}`}>{item.answer}</div>               
                </div>           
                ))}
            </div>

        </div>
    )
}

const data = [
    {
        question: 'How often should I work out to build muscle?',
        answer: 'Aim to work out 3-5 times a week, focusing on different muscle groups each session. This allows sufficient rest and recovery, which is essential for muscle growth. Incorporate both resistance training and compound movements to maximize muscle stimulation.'
    },
    {
        question: 'What should I eat to build muscle?',
        answer: 'Consume a balanced diet rich in protein, carbohydrates, and healthy fats. Protein is crucial for muscle repair and growth; aim for 1.2-2.2 grams per kilogram of body weight. Include lean meats, dairy, legumes, and whole grains in your meals.'
    },
    {
        question: 'How important is sleep for muscle growth?',
        answer: 'Sleep is vital for muscle recovery and growth. Aim for 7-9 hours of quality sleep per night. During sleep, your body releases growth hormones and repairs muscle tissues, which are critical processes for muscle development.'
    },
    {
        question: 'Should I lift heavy weights or do more repetitions?',
        answer: 'Both approaches can be effective. Lifting heavy weights with fewer repetitions (4-6 reps) primarily increases strength, while moderate weights with higher repetitions (8-12 reps) promote muscle hypertrophy. Combining both in your routine can yield the best results.'
    },
    {
        question: 'How long does it take to see noticeable muscle gains?',
        answer: 'Visible muscle gains typically take 8-12 weeks of consistent training and proper nutrition. Initial changes might be subtle, but with dedication and progressive overload, you will start to see and feel improvements in muscle size and strength.'
    }
]