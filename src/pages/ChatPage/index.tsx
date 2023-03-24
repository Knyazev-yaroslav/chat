import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getChats } from "../../store/chat/selector";
import { fetchChatsAction } from "../../store/chat/thunk";
import Chat from "./components/Chat";
import Sider from "./components/Sider";
import { useWindowSize } from "../../hooks/useWindowSize";

import "./chatPage.scss";

const ChatPage = () => {
    const dispatch = useAppDispatch();
    const { currentChatID, currentChatTitle } = useAppSelector(getChats);

    useEffect(() => {
        dispatch(fetchChatsAction({}));
    }, []);

    const currentDisplayWidth = useWindowSize()[0];

    return currentDisplayWidth > 700 ? (
        <div className="page_wrapper">
            <Sider />
            {currentChatID && (
                <Chat chatTitle={currentChatTitle} chatID={currentChatID} />
            )}
        </div>
    ) : (
        <div className="mobile_display">
            <p className="mobile_display__text">
                ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ <br /> У НАС ЕСТЬ МОБИЛЬНОЕ
                ПРИЛОЖЕНИЕ
            </p>
        </div>
    );
};

export default ChatPage;
