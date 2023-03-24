import { IMessage } from "../../api/rest/message/reusableTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MESSAGES_ALIAS, IRequestError } from "./types";
import {
    fetchMessagesRequest,
    IFetchMessagesRequest,
} from "../../api/rest/message/fetchMessages";
import { isMessageResponseOK } from "../../utils/isMessagesResponseOK";

export const fetchMessagesAction = createAsyncThunk<
    IMessage[],
    IFetchMessagesRequest,
    {
        rejectValue: IRequestError;
    }
>(
    `${MESSAGES_ALIAS}/fetchMessagesAction`,
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetchMessagesRequest(payload);
            const data = response.data;
            if (response.status === 200 && isMessageResponseOK(data)) {
                return data.response as IMessage[];
            }

            return rejectWithValue({
                errCode: response.status,
                errMsg: `Что-то пошло не так. Ошибка ${response.status}`,
            });
        } catch (error: any) {
            return rejectWithValue({
                ...error.response.data,
                errCode: error.response.status,
            });
        }
    }
);
