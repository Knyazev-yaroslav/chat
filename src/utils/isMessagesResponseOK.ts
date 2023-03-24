import { TFetchMessagesResponse } from "../api/rest/message/fetchMessages";
import { IMessageResponseOK } from "../api/rest/message/reusableTypes";

export function isMessageResponseOK(
    value: TFetchMessagesResponse
): value is IMessageResponseOK {
    return "response" in value;
}
