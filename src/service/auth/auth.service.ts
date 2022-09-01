import { axiosInstance } from "../axiosInstance";
import { LoginRequestDto } from "./dto/loginRequest.dto";

export const authenticate = (payload: LoginRequestDto) => {
    return axiosInstance.post('TokenAuth/Authenticate', payload)
}