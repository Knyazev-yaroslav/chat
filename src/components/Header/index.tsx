import React, { FC } from "react";

import "./header.scss";
import { IHeader } from "./interface";

import { ReactComponent as ChatHeader } from "../../assets/svg/chatHeader.svg";

const Header: FC<IHeader> = (props) => {
    const { chatTitle } = props;
    return (
        <div className="header_wrapper">
            <div className="header">
                <ChatHeader />
                <p className="header_title">{chatTitle}</p>
            </div>
        </div>
    );
};

export default Header;
