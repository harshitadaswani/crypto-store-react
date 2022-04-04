import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa"

export const Signup = () => {
    return (
        <main>
            <section className="login">
                <form action="" method="get" className="form p-m m-m br-s">
                    <h1 className="m-s p-s txt-center">Signup</h1>

                    <div className="flex-column">
                        <label htmlFor="Email" className="m-xs" id='email'>Email Address:</label>
                        <input type="email" name="Email" className="input-box p-s m-xs br-s" placeholder="abc@xyz.com" id='email' />
                    </div>

                    <div className="flex-column">
                        <label htmlFor="Password" className="m-xs" id='password'>Password:</label>
                        <input type="password" name="Password" className="input-box p-s m-xs br-s" placeholder="******" id='password' />
                    </div>

                    <div className="flex-row flex-space-between p-xs m-xs">
                        <div className="checkbox-div">
                            <input type="checkbox" name="Remember-me" className="br-xs p-xs m-xs txt-m" id='terms' />
                            <label htmlFor="Remember-me" className="fw-semibold p-s m-s" id='terms'>I accept all Terms & Conditions</label>
                        </div>
                    </div>

                    <div>
                        <input type="button" value="Create New Account" className="login-btn br-s p-s m-xs fw-semibold txt-s" />
                    </div>

                    <div className="txt-center p-xs m-xs fw-bold">
                        <Link to="/login">
                            Already have an account
                            <FaAngleRight />
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}
