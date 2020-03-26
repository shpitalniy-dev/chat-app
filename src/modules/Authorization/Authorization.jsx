import React from "react";
import PropTypes from "prop-types";
import * as helpers from "./helpers/logic"
import wizard from "../../../assets/wizard.png";
export default class Authorization extends React.Component {
    static propTypes = {
        dictionary: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        loginRequest: PropTypes.func.isRequired,
    };
    
    inputLogin = React.createRef();
    inputPassword = React.createRef();

    constructor(props) {
        super(props)
    }

    render() {
        const { inputLogin, inputPassword } = this;
        const { loginRequest, user } = this.props;
        const { resources, dialogs } = this.props.dictionary;
        return (
            <div className='main__form'>
                <div className="img-title">
                    <a href="https://wizardsdev.com/">
                        <img className={"image-wizards"} src="/assets/wizard.png"/>
                    </a>
                </div>
                <div className='main__block-auth'>
                    <div className="main__authorization-title">
                        <h3>{resources.authorization}</h3>
                    </div>
                    <div className="authorization-form__item">
                        <label htmlFor="inputLogin" id="labelLogin">{resources.login}</label>
                        <input ref={inputLogin}
                               className="input-style"
                               id="inputLogin"
                               type="name"
                               maxLength="50"
                               onKeyDown={helpers.checkTextInputValue} />
                    </div>
                    <div className="authorization-form__item">
                        <label htmlFor="inputPassword" id="labelPassword">{resources.password}</label>
                        <input ref={inputPassword}
                               className="input-style"
                               id="inputPassword"
                               type="password"
                               maxLength="50"
                               onKeyDown={(e) => e.key === 'Enter' ? loginRequest(
                                   {userName: inputLogin.current.value,
                                       password: inputPassword.current.value,
                                       history: this.props.history}) : helpers.checkTextInputValue(e)}/>
                    </div>
                    <div className="authorization-form__item">
                        <div  id="outputPassword" style={{height: "20px", color:"red"}}>{user.errorMessage}</div>
                    </div>
                    <div className="authorization-form__item">
                        <button className="button-style authorization-form"
                                onClick={() => {loginRequest(
                                    {userName: inputLogin.current.value,
                                    password: inputPassword.current.value,
                                        history: this.props.history})
                                }}>
                            {resources.signIN}
                        </button>
                    </div>
                    <div className="link">
                        <a aria-disabled='true' style={{color: 'blue'}}>{dialogs.forgotPassword}</a>
                    </div>
                        <hr color='9F9F9F' className="hr-line"/>
                    <div style={{color:"#5A5C5C"}}>{`${dialogs.authorizationText}?`}</div>
                    <div className='link-auth'
                         onClick={() => this.props.history.push("/registration")
                         }>
                        {dialogs.goToRegistrationPage}
                    </div>
                </div>
                <footer className={"footer"}>
                    <div>Если у вас есть проблемы при регистрации, пожалуйста</div>
                    <a href={"#"}>свяжитесь с нашей службой поддрежки</a>
                </footer>
            </div>
        )
    }
}