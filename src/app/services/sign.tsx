import axios from "axios"

interface ILogin{
    email:string,
    password:string
}

const url = "http://localhost:3001/"


export async function sign(body:ILogin){
    const response = await axios.post(`${url}sign`, body).then(res => res.data);
    if(response){
        localStorage.setItem('user_id', response.id);
        return response;
    }

}