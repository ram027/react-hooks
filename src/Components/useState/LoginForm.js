// In this we see how we can use object in useState

import {useState} from 'react';

const LoginForm=()=>{
    const [state,setState]=useState({name:'',password:''});

    const handleChange=(e)=>{
        console.log(e.target.value)
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submit',state);
        setState({name:'',password:''})
    }
    return (
        <div style={{backgroundColor:"aquamarine",padding:"10px"}}>
         <form onSubmit={handleSubmit}>
            <label>UserName :</label>
            <input value={state.name} name="name" onChange={handleChange}/>
            <br />
            <label>Password : &nbsp;</label>
            <input value={state.password} name="password" onChange={handleChange} />
            <br/>
            <button type='submit'>Submit</button>
         </form>      
        </div>
    )
}

export default LoginForm;