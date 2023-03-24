import { URLS } from "../../../constants/urls";
import makeRequest from "../../instance/makeRequest";
import { TResponse } from "../../instance/types";
import { IMessageResponseOK, IResponseError } from "./reusableTypes";

export interface IFetchMessagesRequest {
    chat_id: string;
    offset?: number;
    limit?: number;
}

export type TFetchMessagesResponse = IMessageResponseOK | IResponseError;

export const fetchMessagesRequest = (
    data: IFetchMessagesRequest
): TResponse<TFetchMessagesResponse> => {
    return makeRequest({
        method: "GET",
        url: `/${URLS.MESSAGES}?chat_id=${data.chat_id}`,
    });
};
