import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa"

export const Login = () => {
    return (
        <main>
            <section className="login">
                <form action="" method="get" className="form p-m m-m br-s">
                    <h1 className="m-s p-s txt-center">Login</h1>

                    <div className="flex-column">
                        <label htmlFor="Email" className="m-xs">Email Address:</label>
                        <input type="email" name="Email" className="input-box p-s m-xs br-s" placeholder="abc@xyz.com" />
                    </div>

                    <div className="flex-column">
                        <label htmlFor="Password" className="m-xs">Password:</label>
                        <input type="password" name="Password" className="input-box p-s m-xs br-s" placeholder="******" />
                    </div>

                    <div className="flex-row flex-space-between">
                        <div className="checkbox-div">
                            <input type="checkbox" name="Remember-me" className="br-xs p-xs m-xs txt-m" />
                            <label htmlFor="Remember-me" className="fw-semibold p-s m-s">Remember me</label>
                        </div>
                        <Link to="/" className="forgot-link fw-semibold p-s m-s">Forgot your Password?</Link>
                    </div>

                    <div>
                        <input type="button" value="Login" className="login-btn br-s p-s m-xs fw-semibold txt-s" />
                    </div>

                    <div className="txt-center p-xs m-xs fw-bold">
                        <Link to="/signup">
                            Create a new Account
                            <FaAngleRight />
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}
