import React,{useState} from 'react';
function RegistrationForm(){
const[name,SetName]=useState("");
const[email,SetEmail]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Name:${name}\nEmail:${email}`)
};
return(
    <div style={{padding:20}}>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <p>
                Name:{" "}
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>SetName(e.target.value)}
                    placeholder="enter your name"required/>
            </p>
             <p>
                Email:{" "}
                <input
                    type="email"
                    value={email}
                    onChange={(e)=>SetEmail(e.target.value)}
                    placeholder="enter your Email"required/>
            </p>
            <button type="submit">Submit</button>
        </form>
    </div>
);
}
export default RegistrationForm;
