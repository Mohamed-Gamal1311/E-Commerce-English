import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../../Contxt/Context'
import './Signup.css'
const Signup = (props) => {
    const { user } = useContext(ShoppingContext)
    const [userName, setUserName] = useState('')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const Navigate=useNavigate()
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataPost = { id, userName, password };

        if (validation()) {
            fetch("http://localhost:5000/user", {
                method: 'POST',
                body: JSON.stringify(dataPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
                setUserName('')
                setId('')
                setPassword('')
                Navigate('/Login')
            console.log('dataPost');
        }
    }

    const validation = () => {
        let result = true
        user.map(i => {
            if (i.id === id) {
                result = false
                alert('enter valid user')
            }
        })

        return result
    }
    return (
       
            <div className='login'>
            <div className="Container">
                <div className='login-cont'>
                <div className='card-login'>
                    <div className='card_logo'><i class="shopp fa-solid fa-bag-shopping"></i></div>
                    <div className='card_title'>shopping</div>
                    <div className='card_sub-title'>In Our Website</div>
                    <form className='card_form' onSubmit={handleSubmit}>
                        <div className='fields'>
                            <div className='username'>
                            <input
                            value={userName}
                                    type='username'
                                    class='user-input'
                                    placeholder='username'
                                    required onChange={(e) => setUserName(e.target.value)}
                                 
                                />
                             

                             </div>
                             <div className='email'>
                                <input
                                value={id}
                                    type='email'
                                    className='user-input'
                                   placeholder='email'
                                   required onChange={(e) => setId(e.target.value)} 
                                />
                                </div>
                            
                            <div className='password'>



                                <input
                                value={password}
                                    type='password'
                                    className='pass-input'
                                    placeholder='password'
                                    required onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                        </div>
                        <button class='btn'>Signup</button>
                    </form>
                    
                </div>
                </div>
            </div>
        </div> 
        
    )
}

export default Signup
