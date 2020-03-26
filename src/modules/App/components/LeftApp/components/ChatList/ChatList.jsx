import React from "react";
export default class ChatList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUsers();
    }

    render() {
        const { usersFilter, allUsers, activeChat, setActiveChat } = this.props;
        const users = usersFilter !== "" ? allUsers.filter(item => item.userName.startsWith(usersFilter)) : allUsers.slice();
        users.length !== 0 ? users.sort((a, b) => a.online < b.online ? 1 : -1) : null;
        return (
            <div className="chat-list-wrapper">
                <input type="text" placeholder='Search' className='input-search-users' onChange={() => this.props.changeUsersFilter(event.target.value)} defaultValue={usersFilter} />
                <div className='users-block'>
                    {users.length === 0 ? null : users.map(item =>
                        <div className='users-block__data' 
                            key={performance.now()} 
                            accessKey={item.userName}
                            onClick={() => setActiveChat(item.userName)}
                            style={item.userName === activeChat ? {background: "#132648"} : null}
                        >
                            <div className='users-block__image'>
                                <img src="/assets/profilePhoto.png"
                                    width="40"
                                    height="40" />
                                <div className='users-block__active-user' style={item.online === false ? { background: 'red' } : { background: 'green' }} />
                            </div>
                            <div className='users-block__user-data'>
                                <div><label className='label-chat'>{item.userName}</label></div>
                                <div className='users-block__last-message' style={{ color: 'grey' }}>{item.lastMessage}</div>
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }
}