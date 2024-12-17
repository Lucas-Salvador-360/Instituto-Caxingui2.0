import axios, { AxiosResponse } from "axios";

interface ILoginResponse {
    token: string, 
  }

interface IRegisterResponse {
    token: string; 
    message: string; 
  }

interface ILogin {
    password: string,
    email: string
}

interface IRegister {
    name: string, 
    email: string, 
    password: string, 
    confirmpassword: string
}

const url_login_api = `http:/192.168.0.2:3000/auth/login`
const url_register_api = `http:/192.168.0.2:3000/auth/register`

export const Api = axios.create({
    baseURL: "http:/192.168.0.2:3000/"
})

export const loginApi = async (payload: ILogin): Promise<AxiosResponse<ILoginResponse> | undefined> => {
    try {
      const response = await axios.post<ILoginResponse>(url_login_api, payload);
      return response;
    } catch (error) {
      console.log("ERRO LOGIN", error);
      return undefined; 
    }
  };


  export const registerApi = async (payload: IRegister): Promise<AxiosResponse<IRegisterResponse> | undefined> => {
    try {
      const response = await axios.post<IRegisterResponse>(url_register_api, payload);
      return response;
    } catch (error) {
      console.log("Erro ao registrar:", error);
      return undefined; 
    }
  };