import { TFetchChatsResponse } from "../api/rest/chat/fetchChats";
import { IChatResponseOK } from "../api/rest/chat/reusableTypes";

export function isChatResponseOK(
    value: TFetchChatsResponse
): value is IChatResponseOK {
    return "response" in value;
}
