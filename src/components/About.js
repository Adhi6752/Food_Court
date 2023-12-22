import { useState } from "react"

export const Section = () => {
    const [isVisible,setIsVisible] = useState(false);

    return (
        <div className="border">
                <h3>heading</h3>
        
        {isVisible ? (
            <button onClick = {()=>setIsVisible(false)}>Hide</button>
        ) : (
            <button onClick = {()=>setIsVisible(true)}>show</button>

        ) } <br/>
        { isVisible && "ho"}
        </div>
    )
}

export const About =() =>{
    return (
        <>
            
             <Section /> 
             <Section /> 
             <Section /> 
        </>
    )
}