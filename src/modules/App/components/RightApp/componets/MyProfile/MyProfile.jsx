import React from "react";
import profilePhoto from "../../../../../../../assets/profilePhoto.png";
import attachmentLogo from "../../../../../../../assets/attachment.png";
import smileLogo from "../../../../../../../assets/smile.png";
import logo from "../../../../../../../assets/logo.png";
import userLogo from "../../../../../../../assets/user1.svg";
import * as helpers from "./helpers/logic"
export default class MyProfile extends React.Component {
    constructor(props) {
        super(props);

    }

    refInput = React.createRef();

    render() {
        const { updateProfile, user, updateImage, allUsers, settingsMode } = this.props;

        return (
            <>
                {settingsMode === "profile" ?
                    <div className="app-block__right-app right-app">
                        <div className="right-app__account-title account-title">
                            <div className="account-title__user-info">
                                <div className="chat-title__name">My Profile</div>
                            </div>
                        </div>
                        <div className="right-app__account-body account-body">
                            <div className={"wrapper-body-image"}>
                                <div className="account-body__account-photo">
                                    <div><img src={userLogo}
                                        height="50"
                                        width="50"
                                    /></div>
                                    <div>Avatar</div>
                                    <div className={"hidden-input-image"}>
                                        <svg style={{ position: "absolute" }} width="25" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.8102 18.1445C33.1657 18.1445 32.5708 18.6898 32.5708 19.3839V27.762C32.5708 30.4391 30.3895 32.6204 27.7125 32.6204H7.28754C4.61048 32.6204 2.42918 30.4391 2.42918 27.762V7.33711C2.42918 4.66006 4.61048 2.47875 7.28754 2.47875H15.6657C16.3102 2.47875 16.9051 1.93343 16.9051 1.23938C16.9051 0.594901 16.3598 0 15.6657 0H7.28754C3.27195 0 0 3.27195 0 7.28754V27.7125C0 31.728 3.27195 35 7.28754 35H27.7125C31.728 35 35 31.728 35 27.7125V19.3839C35 18.6898 34.4547 18.1445 33.8102 18.1445Z" fill="#C9C9C9" />
                                            <path d="M14.6244 14.576L12.9389 20.6738C12.7406 21.3183 13.1372 22.0123 13.7817 22.2106C13.98 22.2602 14.2278 22.2602 14.4261 22.2106L20.5239 20.5251C20.7222 20.4755 20.8709 20.3268 21.0692 20.2276L33.5621 7.83384C35.2477 6.14828 35.2477 3.37208 33.5621 1.68653C31.8766 0.000975192 29.0012 0.000975192 27.3652 1.68653L14.9715 14.0803C14.8227 14.1299 14.7236 14.3282 14.6244 14.576ZM29.0508 3.32251C29.844 2.67803 31.0338 2.7276 31.7278 3.52081C32.3227 4.26443 32.3227 5.30551 31.7278 5.99956L20.2264 17.501L17.5494 14.8239L29.0508 3.32251ZM16.4091 17.2035L17.946 18.7404L15.8142 19.2857L16.4091 17.2035Z" fill="#C9C9C9" />
                                        </svg>
                                        <input className={"input-image"} type={"file"} onChange={(e) => updateImage(e)} onBlur={() => { this.refInput.current.disabled = false }} />
                                    </div>
                                </div>

                                <div className={"account-body__account-email"}>

                        <label>Email</label>
                    <div className={"custom-block-profile"}>
                        <input className={"input-email-profile"} ref={this.refInput} defaultValue={helpers.getEmail(allUsers, user) === "" ? null : helpers.getEmail(allUsers, user)} disabled={true} onKeyDown={helpers.checkMailInputValue}/>
                        <svg style={{background:"white", border: "1px solid white"}} onClick={() => {this.refInput.current.disabled = false}} width="25" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.8102 18.1445C33.1657 18.1445 32.5708 18.6898 32.5708 19.3839V27.762C32.5708 30.4391 30.3895 32.6204 27.7125 32.6204H7.28754C4.61048 32.6204 2.42918 30.4391 2.42918 27.762V7.33711C2.42918 4.66006 4.61048 2.47875 7.28754 2.47875H15.6657C16.3102 2.47875 16.9051 1.93343 16.9051 1.23938C16.9051 0.594901 16.3598 0 15.6657 0H7.28754C3.27195 0 0 3.27195 0 7.28754V27.7125C0 31.728 3.27195 35 7.28754 35H27.7125C31.728 35 35 31.728 35 27.7125V19.3839C35 18.6898 34.4547 18.1445 33.8102 18.1445Z" fill="#C9C9C9"/>
                            <path d="M14.6244 14.576L12.9389 20.6738C12.7406 21.3183 13.1372 22.0123 13.7817 22.2106C13.98 22.2602 14.2278 22.2602 14.4261 22.2106L20.5239 20.5251C20.7222 20.4755 20.8709 20.3268 21.0692 20.2276L33.5621 7.83384C35.2477 6.14828 35.2477 3.37208 33.5621 1.68653C31.8766 0.000975192 29.0012 0.000975192 27.3652 1.68653L14.9715 14.0803C14.8227 14.1299 14.7236 14.3282 14.6244 14.576ZM29.0508 3.32251C29.844 2.67803 31.0338 2.7276 31.7278 3.52081C32.3227 4.26443 32.3227 5.30551 31.7278 5.99956L20.2264 17.501L17.5494 14.8239L29.0508 3.32251ZM16.4091 17.2035L17.946 18.7404L15.8142 19.2857L16.4091 17.2035Z" fill="#C9C9C9"/>
                        </svg>
                    </div>
                    </div>
                    </div>
                </div>
                        <div className="account-buttons">
                            <button onClick={() => { helpers.checkMail(this.refInput.current) ? updateProfile({ email: this.refInput.current.value, password: user.password, userName: user.userName, token: user.token}) : null; this.refInput.current.disabled = true }} className={"button-style-image"}>Save Changes</button>
                        </div>
                    </div>
                    :
                    <div className={"app-block__right-app right-app"}>
                        <div className="right-app__account-title account-title">In process</div>
                        <div className="right-app__account-body account-body"></div>
                    </div>}

            </>
        )
    }
}