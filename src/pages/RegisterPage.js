import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';

const RegisterPage = () => {
    const { register } = useContext(AuthContext);
    const [form, setForm] = useState({
        name: 'test6',
        email: 'test6@test.com',
        password: '123456',
    });
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, name } = form;
        const msg = await register(name, email, password);
        if (msg) {
            Swal.fire('Error', msg, 'error');
        }
    };
    const allOk = () => {
        return (
            form.email.length > 0 &&
            form.password.length > 0 &&
            form.name.length > 0
        );
    };
    return (
        <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={handleSubmit}
        >
            <span className="login100-form-title mb-3">Chat - Register</span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

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
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Do you have an account?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                    type="submit"
                    className="login100-form-btn"
                    disabled={!allOk()}
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterPage;
