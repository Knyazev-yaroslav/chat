export interface IMessage {
    id: string;
    created_at: number;
    user: {
        id: string;
        name: string;
        surname: string;
        avatar: string;
        you: boolean;
    };
    message: string;
    is_new: boolean;
}

export interface IMessageResponseOK {
    response: IMessage[];
}

export interface IResponseError {
    errCode: string | number;
    errMsg: string;
}
