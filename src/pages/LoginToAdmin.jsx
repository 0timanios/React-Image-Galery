import { React , useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite';


export default function LoginToAdmin() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    function checkCredentials(ev){
        ev.preventDefault();
        const promise = account.createEmailPasswordSession(email, passWord)
        promise.then(res=>{
            if(res){
                navigate('/adminPanel')
            }
        })
    }
  return (
    <>
        <h1>Log In</h1>
            <label htmlFor="mail">Enter Email:</label>
            <input type="email" name="mail" id="mail" onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="pass">Enter Password:</label>
            <input type="password" name="pass" id="pass" onChange={e=>setPassWord(e.target.value)}/>
            <button onClick={checkCredentials}>Continue</button>
    </>
  )
}
