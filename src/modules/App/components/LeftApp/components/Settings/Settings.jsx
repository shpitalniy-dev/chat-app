import React from "react";
import supportLogo from "../../../../../../../assets/support.svg";
import artistLogo from "../../../../../../../assets/artist.svg";
import userLogo from "../../../../../../../assets/user1.svg";
export default class Settings extends React.Component {
    render(){
        const { changeModeSettings, settingsMode } = this.props;
        return (
            <div className={"settings-block-left-settings"}>
            <div className={settingsMode === 'profile' ? "block-left-settings active-mode" : "block-left-settings"}
                 onClick={() => changeModeSettings('profile')}>
                    <div ><img src={userLogo}
                     height="30"
                     width="30"
                /></div>
                <div className={"settings-text"} >My profile</div>
                <div className={"div-wrap-image-settings"}/>
            </div>
                <div className={settingsMode === 'customization' ? "block-left-settings active-mode" : "block-left-settings"}
                     onClick={() => changeModeSettings('customization')}>
                    <div><img src={artistLogo}
                         height="30"
                         width="30"
                    /></div>
                    <div className={"settings-text"} >Customization</div>
                    <div className={"div-wrap-image-settings"}/>
            </div>
                <div className={settingsMode === 'general' ? "block-left-settings active-mode" : "block-left-settings"}
                     onClick={() => changeModeSettings('general')}>
                    <div><img src={supportLogo}
                         height="30"
                         width="30"
                    /></div>
                    <div className={"settings-text"} >General</div>
                    <div className={"div-wrap-image-settings"}/>
                </div>
            </div>
        )
    }
}