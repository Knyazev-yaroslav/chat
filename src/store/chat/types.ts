import { IChat } from "../../api/rest/chat/reusableTypes";

export const CHAT_ALIAS = "chatsAlias" as const;

export interface IChatsStore {
    chats: IChat[] | null;
    currentChatID: string | null;
    currentChatTitle: string;
    loading: boolean;
    error: IRequestError | null;
}

export interface IRequestError {
    errCode: string | number;
    errMsg: string;
}

export interface ICurrentChat {
    id: string;
    title: string;
}
