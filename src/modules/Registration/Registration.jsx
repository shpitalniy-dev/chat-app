import React from "react";
import { checkTextInputValue, finishValidate, clearError, checkMailInputValue } from "./helpers/logic.js"
import PropTypes from "prop-types";
export default class Registration extends React.Component {
    static propTypes = {
        dictionary: PropTypes.object.isRequired,
        registrationRequest: PropTypes.func.isRequired,
    };
    inputLogin = React.createRef();
    outputLogin = React.createRef();
    inputPassword = React.createRef();
    outputPassword = React.createRef();
    inputConfirmPassword = React.createRef();
    outputConfirmPassword = React.createRef();
    inputMail = React.createRef();
    outputMail = React.createRef();
    registrationRequest = () => {
        this.props.registrationRequest(finishValidate(this.inputLogin.current,
                                                        this.outputLogin.current,
                                                        this.inputPassword.current,
                                                        this.outputPassword.current,
                                                        this.inputConfirmPassword.current,
                                                        this.outputConfirmPassword.current,
                                                        this.inputMail.current,
                                                        this.outputMail.current,
                                                        this.props.history))
    };
    render() {
        const { registrationRequest, inputLogin, outputLogin, inputPassword, outputPassword, inputConfirmPassword, outputConfirmPassword, inputMail, outputMail } = this;
        const { resources, dialogs } = this.props.dictionary;
        const { user } = this.props;
        return (
            <div className='main__form'>
                <div className="img-title">
                    <a href="https://wizardsdev.com/">
                        <img className={"image-wizards"} src="../../../assets/wizard.png"/>
                    </a>
                </div>
                <div className='main__block'>
                    <div className="main__regis-title">
                        <h3 id="title">{resources.registration}</h3>
                    </div>
                    <div className="registration-form__item">
                        <label htmlFor="username" id="usernameLabel">{resources.login}</label>
                        <input  ref={inputLogin}
                                className="input-style"
                                type="text" id="username"
                                required
                                maxLength="50"
                                onKeyDown={checkTextInputValue}
                                onChange={() => clearError(inputLogin.current, outputLogin.current)}/>
                        <output ref={outputLogin}
                                className="output-style"
                                id="outputUsername">{resources.incorrectLogin}</output>
                    </div>
                    <div className="registration-form__item">
                        <label htmlFor="email" id="emailLabel">{resources.email}</label>
                        <input ref={inputMail}
                               className="input-style"
                               type="email" id="email"
                               required
                               maxLength="50"
                               onKeyDown={checkMailInputValue}
                               onChange={() => clearError(inputMail.current, outputMail.current)}/>
                        <output ref={outputMail}
                                className="output-style"
                                id="outputEmail">{resources.incorrectMail}</output>
                    </div>
                    <div className="registration-form__item">
                        <label htmlFor="password" id="passwordLabel">{resources.password}</label>
                        <input ref={inputPassword}
                               className="input-style"
                               type="password" id="password"
                               required maxLength="50"
                               onKeyDown={checkTextInputValue}
                               onChange={() => clearError(inputPassword.current, outputPassword.current)}/>
                        <output ref={outputPassword}
                                className="output-style"
                                id="outputPassword">{resources.incorrectPassword}</output>
                    </div>
                    <div className="registration-form__item">
                        <label htmlFor="confirmPassword" id="confirmPasswordLabel">{resources.confirmPassword}</label>
                        <input ref={inputConfirmPassword}
                               className="input-style"
                               type="password" id="confirmPassword"
                               required  maxLength="50"
                               onKeyDown={(e) => e.key === 'Enter' ? registrationRequest() : checkTextInputValue(e)}
                               onChange={() => clearError(inputConfirmPassword.current, outputConfirmPassword.current)}/>
                        <output ref={outputConfirmPassword}
                                className="output-style"
                                id="outputConfirmPassword">{resources.incorrectPassword}</output>
                    </div>
                    <div  id="outputPassword" style={{height: "20px", color:"red"}}>{user.errorMessageRegistration}</div>
                    <div className="registration-form__item">
                        <button className="button-style" 
                                id="button" 
                                onClick={registrationRequest}>{resources.registration}</button>
                    </div>
                    <hr color='9F9F9F' className="hr-line"/>
                    <div>{`${dialogs.registrationText}?`}</div>
                    <div className='link-auth' onClick={() => this.props.history.push("/")}>{dialogs.goToLoginPage}</div>
                </div>
                <footer className={"footer"}>
                    <div>Если у вас есть проблемы при регистрации, пожалуйста</div>
                    <a href={"#"}>свяжитесь с нашей службой поддрежки</a>
                </footer>
            </div>
        )
    }
}