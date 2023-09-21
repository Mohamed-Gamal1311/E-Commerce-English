import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear()
    }, [])
    const adminemail="admin@example"
    const adminpass="123456789"
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/user/" + email).then((res) => {
            return res.json();
        }).then((resp) => {
            if (resp.password === password && resp.id === email) {
                alert('success')
                Navigate('/')
                sessionStorage.setItem('email', email)

            }
        else if (email===adminemail && password===adminpass){
            alert('success')
            Navigate('/Dashboard')
            sessionStorage.setItem('email', email)
        }
            else {
                alert('enter valid data')
            }
        })
    }
    return (
        <div className='login'>
            <div class="Container">
                <div className='login-cont'>
                <div class="card-login">
                    <div class="card_logo"><i class="shopp fa-solid fa-bag-shopping"></i></div>
                    <div class="card_title">shopping</div>
                    <div class="card_sub-title">In Our Website</div>
                    <form class="card_form" onSubmit={handleSubmit}>
                        <div class="fields">
                            <div class="username">

                             


                                <input
                                    type="email"
                                    class="user-input"
                                    placeholder="username"
                                    value={email} required onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="password">



                                <input
                                    type="password"
                                    class="pass-input"
                                    placeholder="password"
                                    value={password} required onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                        </div>
                        <button class="btn">Login</button>
                    </form>
                    <div class="link">
                         <Link to="/Signup">Sign up</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login
