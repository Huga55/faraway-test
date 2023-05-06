import axios, { AxiosInstance } from "axios";

import { apiHeaders } from "@constants/api";

import { ENV } from "@config/index";

class Request {
    protected readonly instance: AxiosInstance;

    public constructor() {
        this.instance = axios.create({
            baseURL: ENV.VITE_APP_BASE_URL || "",
            headers: apiHeaders,
        });
    }

    public getInstance = () => this.instance;
}

export const request = new Request();

export default request.getInstance();
