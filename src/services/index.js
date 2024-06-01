import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:8000",
})

export const queryClient = new QueryClient();