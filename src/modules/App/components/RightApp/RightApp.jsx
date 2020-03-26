import React, { useState } from 'react';
import PropTypes from "prop-types";
import attachmentLogo from "../../../../../assets/attachment.png";
import smileLogo from "../../../../../assets/smile.png";
import profilePhoto from "../../../../../assets/profilePhoto.png";
import MyProfile from "./componets/MyProfile/MyProfile";
import 'emoji-mart/css/emoji-mart.css';
import Picker from 'react-emojipicker'

export default class RightApp extends React.Component {

    inputRef = React.createRef();
    logEmoji(emoji) {
        this.inputRef.current.value += emoji.unicode
    }

    constructor(props) {
        super(props);
    }

    sendMessageMethod = () => {
        const { sendMessage } = this.props;
        const { inputRef } = this;
        sendMessage(inputRef.current.value);
        inputRef.current.value = "";
    };

    render() {
        const { mode, allUsers, user, updateProfile, updateImage,
            activeChat, sendMessage, messages, settingsMode,
            toggleImojiState, emojiState, messageFilter, changeMessageFilter } = this.props;
        const { inputRef, sendMessageMethod } = this;

        return (
            <>
                {mode === "chats" ?
                    <div className="app-block__right-app right-app">
                        <div className="right-app__chat-title chat-title">
                            <div className="chat-title__user-info">
                                <div className="chat-title__photo">
                                    <img src={profilePhoto}
                                        height="50"
                                        width="50"
                                    />
                                </div>
                                <div className="chat-title__name">{activeChat}</div>
                            </div>
                            <div className="chat-title__search">
                                <input type="text" placeholder="Search" onChange={() => changeMessageFilter(event.target.value)} defaultValue={messageFilter} />
                            </div>
                        </div>
                        <div className="right-app__chat-body chat-body">
                            {messages
                                .filter(item =>
                                    (item.receiver === activeChat && item.sender === user.userName)
                                    ||
                                    (item.receiver === user.userName && item.sender === activeChat))
                                .reverse()
                                .filter(item => messageFilter ? item.content.indexOf(messageFilter) !== -1 : true)
                                .map(item =>
                                    item.sender !== user.userName
                                        ?
                                        <div className="chat-body__message message" key={performance.now()}>
                                            <div className="message__message-photo">
                                                <img src={profilePhoto}
                                                    width="50"
                                                    height="50"
                                                />
                                            </div>
                                            <div className="message__message-title message-title">
                                                <div className="message-title__details">
                                                    <span>{item.sender}</span>
                                                    <span>{new Date(item.date).toLocaleString()}</span>
                                                </div>
                                                <div className="message-title__message"
                                                    style={{
                                                        background: "#14466a",
                                                        color: "white",
                                                    }}
                                                >
                                                    <span>{item.content}</span>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="chat-body__message message" style={{ flexDirection: "row-reverse" }} key={performance.now()}>
                                            <div className="message__message-photo">
                                                <img src={profilePhoto}
                                                    width="50"
                                                    height="50"
                                                />
                                            </div>
                                            <div className="message__message-title message-title">
                                                <div className="message-title__details">
                                                    <span>{item.sender}</span>
                                                    <span>{new Date(item.date).toLocaleString()}</span>
                                                </div>
                                                <div className="message-title__message">
                                                    <span>{item.content}</span>
                                                </div>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                        <div className="right-app__chat-send-message chat-send-message">
                            <div className="chat-send-message__chat-input">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Write a message..."
                                    maxLength="100"
                                    onKeyPress={() => event.key === "Enter" ? sendMessageMethod() : null} />
                            </div>
                            <div className="chat-send-message__chat-buttons chat-buttons">
                                <div className="chat-buttons__icon">
                                    <img src={attachmentLogo}
                                        height="30"
                                        width="30"
                                    ></img>
                                </div>

                                <div style={emojiState ? { position: "absolute", bottom: "60%", right: "30%", display:"block"}
                                : { position: "absolute", bottom: "60%", right: "30%", display:"none"}}>
                                    <Picker modal={true}  onEmojiSelected={this.logEmoji.bind(this)} />
                                </div>
                                <div className="chat-buttons__icon" onClick={toggleImojiState} >
                                    <img src={smileLogo}
                                        height="30"
                                        width="30"
                                    ></img>
                                </div>
                                <div className="chat-buttons__button">
                                    <button onClick={sendMessageMethod}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div> : mode === "settings" ? <MyProfile allUsers={allUsers}
                        user={user}
                        updateProfile={updateProfile}
                        updateImage={updateImage}
                        settingsMode={settingsMode}
                    /> : <div className={"app-block__right-app right-app"}>
                            <div className={"right-app__account-title account-title"}>Coming soon</div>
                            <div className={"right-app__account-body account-body"}></div>
                        </div>}
            </>
        )
    }
}