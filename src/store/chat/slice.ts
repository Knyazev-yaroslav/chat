import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchChatsAction } from "./thunk";
import { CHAT_ALIAS, IChatsStore, ICurrentChat } from "./types";

const initialState: IChatsStore = {
    chats: null,
    currentChatID: null,
    currentChatTitle: "",
    loading: false,
    error: null,
};

export const chatsReducer = createSlice({
    name: CHAT_ALIAS,
    initialState,
    reducers: {
        setCurrentChat(state, action: PayloadAction<ICurrentChat>) {
            state.currentChatID = action.payload.id;
            state.currentChatTitle = action.payload.title;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChatsAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchChatsAction.fulfilled, (state, { payload }) => {
            state.chats = payload;
            state.loading = false;
        });
        builder.addCase(fetchChatsAction.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload || null;
        });
    },
});

export const { setCurrentChat } = chatsReducer.actions;

export default chatsReducer.reducer;
