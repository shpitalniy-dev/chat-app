import Picker from 'react-emojipicker'

import React, { Component } from 'react'

export class Imogi extends Component {
    logEmoji (emoji) {
        console.log(emoji)
    }

    render () {
        return (
            <div>
                <Picker onEmojiSelected={this.logEmoji.bind(this)} />
            </div>
        )
    }
}






















//import React, { useState } from 'react';
// import Picker from 'emoji-picker-react';
//
// export const Imogi = () => {
//     const [chosenEmoji, setChosenEmoji] = useState(null);
//
//     const onEmojiClick = (event, emojiObject) => {
//         setChosenEmoji(emojiObject);
//     }
//
//     return (
//         <div >
//             {
//                 chosenEmoji
//                     ? (<span>You chose: {chosenEmoji.emoji}</span>)
//                     : <span>No emoji Chosen</span>
//
//             }
//             <Picker onEmojiClick={onEmojiClick}/>
//         </div>
//     );
// };