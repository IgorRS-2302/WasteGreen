import axios from "axios"
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";

interface ILogin{
    email:string,
    password:string
}

const url = "http://localhost:3000/"
const router = useRouter();

export async function sign(body:ILogin){
    const response = await axios.post(`${url}sign`, body).then(res => res.data);
    if(response){
        localStorage.setItem('user_id', response.id);
        redirect(response,200,'/dashboard')
    }

}