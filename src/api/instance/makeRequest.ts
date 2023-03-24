/* eslint-disable no-param-reassign */
import { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from "./index";

const makeRequest = ({
  url,
  method = "GET",
  params = {},
  responseType = "json",
  data = {},
}: AxiosRequestConfig): AxiosPromise<any> => {
  return axios.request({
    baseURL: "https://api.lenzaos.com/test",
    url,
    method,
    params,
    responseType,
    data,
  });
};

export default makeRequest;
