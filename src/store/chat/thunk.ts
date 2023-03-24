import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchChatsRequest,
    IFetchChatsRequest,
} from "../../api/rest/chat/fetchChats";
import { IChat } from "../../api/rest/chat/reusableTypes";
import { isChatResponseOK } from "../../utils/isChatResponseOK";
import { CHAT_ALIAS, IRequestError } from "./types";

export const fetchChatsAction = createAsyncThunk<
    IChat[],
    IFetchChatsRequest,
    {
        rejectValue: IRequestError;
    }
>(`${CHAT_ALIAS}/fetchChatsAction`, async (payload, { rejectWithValue }) => {
    try {
        const response = await fetchChatsRequest(payload);
        const data = response.data;
        if (response.status === 200 && isChatResponseOK(data)) {
            return data.response as IChat[];
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
});
