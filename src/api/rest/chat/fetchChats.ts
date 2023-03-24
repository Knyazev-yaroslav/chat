import { URLS } from "../../../constants/urls";
import makeRequest from "../../instance/makeRequest";
import { TResponse } from "../../instance/types";
import { IResponseError, IChatResponseOK } from "./reusableTypes";

export interface IFetchChatsRequest {
    offset?: number;
    limit?: number;
}

export type TFetchChatsResponse = IChatResponseOK | IResponseError;

export const fetchChatsRequest = (
    data: IFetchChatsRequest
): TResponse<TFetchChatsResponse> => {
    return makeRequest({
        method: "GET",
        url: `/${URLS.LIST}`,
    });
};
