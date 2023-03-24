import { IMessage } from "../../api/rest/message/reusableTypes";

export const MESSAGES_ALIAS = "messagesAlias" as const;

export interface IMessagesStore {
    messages: IMessage[] | null;
    loading: boolean;
    error: IRequestError | null;
}

export interface IRequestError {
    errCode: string | number;
    errMsg: string;
}
