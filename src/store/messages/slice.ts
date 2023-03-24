import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../api/rest/message/reusableTypes";
import { fetchMessagesAction } from "./thunk";
import { IMessagesStore, MESSAGES_ALIAS } from "./types";

const initialState: IMessagesStore = {
    messages: null,
    loading: false,
    error: null,
};

export const messagesReducer = createSlice({
    name: MESSAGES_ALIAS,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessagesAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchMessagesAction.fulfilled, (state, { payload }) => {
            state.messages = payload.reverse() as IMessage[];
            state.loading = false;
        });
        builder.addCase(fetchMessagesAction.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload || null;
        });
    },
});

export const {} = messagesReducer.actions;

export default messagesReducer.reducer;
