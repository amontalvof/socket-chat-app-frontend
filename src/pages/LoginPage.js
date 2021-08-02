import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: 'test1@test.com',
        password: '123456',
        rememberMe: false,
    });

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setForm({
                ...form,
                email,
                rememberMe: true,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };
    const toggleCheck = () => {
        setForm({ ...form, rememberMe: !form.rememberMe });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.rememberMe) {
            localStorage.setItem('email', form.email);
        } else {
            localStorage.removeItem('email');
        }
        // TODO: llamar al backend
    };

    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={handleSubmit}
        >
            <span className="login100-form-title mb-3">Chat - Login</span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="row mb-3">
                <div className="col" onClick={toggleCheck}>
                    <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="rememberMe"
                        checked={form.rememberMe}
                        readOnly
                    />
                    <label className="label-checkbox100">Remember me</label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        New account?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">Login</button>
            </div>
        </form>
    );
};

export default LoginPage;
