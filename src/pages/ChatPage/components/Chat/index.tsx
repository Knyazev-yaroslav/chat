import React, { FC, useEffect } from "react";
import Header from "../../../../components/Header";
import Message from "../../../../components/Message";
import NewMessage from "../../../../components/NewMessage";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getChats } from "../../../../store/chat/selector";
import { getMessages } from "../../../../store/messages/selector";
import { fetchMessagesAction } from "../../../../store/messages/thunk";
import { IChat } from "./interface";
import dayjs from "dayjs";

import "./chat.scss";
import SystemMessage from "../../../../components/SystemMessage";
import Input from "../../../../components/Input";
import { groupBy } from "../../../../utils/groupBy";

const Chat: FC<IChat> = (props) => {
    const { chatTitle, chatID } = props;

    const dispatch = useAppDispatch();
    const { messages } = useAppSelector(getMessages);
    const { currentChatID } = useAppSelector(getChats);

    useEffect(() => {
        dispatch(
            fetchMessagesAction({
                chat_id: chatID,
            })
        );
    }, [currentChatID]);

    let chatMessages: Array<JSX.Element> = [];

    if (messages) {
        const messagesWithFormattedDate = messages.map((message) => ({
            ...message,
            _formattedDate: dayjs(message.created_at * 1000).format(
                "DD.MM.YYYY"
            ),
        }));

        const mesagesGroupedByDate = groupBy(
            messagesWithFormattedDate,
            (elem) => elem["_formattedDate"]
        );

        let newHeaderExists = false;
        mesagesGroupedByDate.forEach((messagesOfDate, date) => {
            chatMessages.push(<SystemMessage date={date} />);
            messagesOfDate.forEach((elem) => {
                if (elem.is_new && !newHeaderExists) {
                    newHeaderExists = true;
                    chatMessages.push(<NewMessage />);
                }
                chatMessages.push(
                    <div
                        className={
                            elem.user.you
                                ? "chat_message your_message"
                                : "chat_message"
                        }
                    >
                        <Message
                            main={!elem.user.you}
                            my={elem.user.you}
                            username={`${elem.user.name} ${elem.user.surname}`}
                            messageText={elem.message}
                            time={elem.created_at * 1000}
                            avatar={elem.user.avatar}
                        />
                    </div>
                );
            });
        });
    }

    return (
        <div className="chat_wrapper">
            <Header chatTitle={chatTitle} />
            <div className="chat">{chatMessages}</div>
            <Input />
        </div>
    );
};

export default Chat;
