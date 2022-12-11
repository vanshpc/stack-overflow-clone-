import React from "react";

import { styles } from "../style";
import ChatEngine from "./ChatEngine";

const SupportWindow = props => {
    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
            
        >
            <ChatEngine/>
        </div>
    )
}

export default SupportWindow;