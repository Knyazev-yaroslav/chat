import React, { FC } from "react";
import dayjs from "dayjs";
import { Avatar } from "../Avatar";
import { IChatItemList } from "./interface";

import "./chatItemList.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentChat } from "../../store/chat/slice";
import { getChats } from "../../store/chat/selector";

const ChatItemList: FC<IChatItemList> = (props) => {
    const { time, dialog_name, user_message, avatar, id } = props;

    const dispatch = useAppDispatch();
    const { currentChatID } = useAppSelector(getChats);

    return (
        <div
            className={
                currentChatID === id
                    ? "dialog_wrapper selected"
                    : "dialog_wrapper"
            }
            onClick={() =>
                dispatch(setCurrentChat({ id: id, title: dialog_name }))
            }
        >
            <div className="dialog">
                <Avatar src={avatar} size="md" />
                <div className="dialog__info">
                    <div className="massage_header">
                        <p className="dialog__name">{dialog_name}</p>
                        <p className="date">{dayjs(time).format("HH:mm")}</p>
                    </div>
                    <p className="dialog__message_text">{user_message}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatItemList;
