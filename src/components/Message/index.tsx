import React, { FC } from "react";
import { Avatar } from "../Avatar";
import Time from "../Time";
import { IMessageComponent } from "./interface";

import "./message.scss";

const Message: FC<IMessageComponent> = (props) => {
    const { main, my, username, messageText, time, avatar } = props;
    return (
        <div className="message_wrapper">
            {main && <Avatar src={avatar} />}
            <div>
                {!my && <p className="username">{username}</p>}

                <div className={my ? "my_message" : "message"}>
                    <div className="message_container">
                        <p className="massage_text">{messageText}</p>
                        <div className="edit_time">
                            <Time time={time} my={my} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
