import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
    const [selected, setSelected] = useState(null);

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

    function toggle(index) {
        if(selected !== index) {
            return setSelected(index);
        } else {
            return setSelected(null);
        }
    }


    return (
        <div className="faqContainer">
            <div className="titleContainer">
                <h1 className="titleFAQ">Frequently Asked Questions</h1>
            </div>
            <div className="accordian">
                {data.map((item, index) => (
                    <div className="item" key={index}>
                    <div className="title" onClick={() => toggle(index)}>
                        <h3 className="question">{item.question}</h3> 
                        <span>{selected === index ? "-" : "+"}</span>         
                    </div> 
                    <motion.div 
                        className={'answer'}
                        initial = {{height: 0, opacity: 0}}
                        animate={selected === index ? {height: 'auto', opacity: 1} : {height: 0, opacity: 0}}
                        transition={{duration: 0.4}}
                    >
                        {item.answer}
                    </motion.div>               
                </div>           
                ))}
            </div>

        </div>
    )
}

