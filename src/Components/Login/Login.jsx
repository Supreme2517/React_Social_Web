import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../Common/FormsControls/FormsControls";
import { required } from "../Utils/Validators/Validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import s from '../Common/FormsControls/FormsControls.module.css';
import cl from './Login.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} child="input" validate={required}
                name="email" placeholder="Email" className={cl.input_form}/>
            <div>
                <Field placeholder={"Password"} type="password" child="input" validate={required}
                    name={"password"} component={FormControl} className={cl.input_form}/>
            </div>
            <div className={cl.rememer}>
                <Field component={FormControl} child="input"
                    name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button className={cl.btn}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div className={cl.container}>
        <div className={cl.content}>
        <h1 className={cl.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
        
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);