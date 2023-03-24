import React from "react";
import ChatItemList from "../../../../components/ChatItemList";
import { useAppSelector } from "../../../../hooks/redux";
import { getChats } from "../../../../store/chat/selector";

import "./sider.scss";

const Sider = () => {
    const { chats } = useAppSelector(getChats);

    const user_chats = chats?.map((elem, index) => {
        return (
            <ChatItemList
                id={elem.id}
                key={index}
                time={elem.created_at * 1000}
                avatar={elem.avatar}
                dialog_name={elem.title}
                user_message={elem.last_message.message}
            />
        );
    });

    return (
        <div className="sider_wrapper">
            <div className="sider_header">All chats</div>
            {user_chats}
        </div>
    );
};

export default Sider;
