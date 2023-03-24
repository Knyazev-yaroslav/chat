import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./chat/slice";
import messagesReducer from "./messages/slice";

export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        messages: messagesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
