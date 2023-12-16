import { http } from "./config";
export default{
    listar:()=>{
        return http.get('/getUser/Makerjunior')
    },
    buscarPorNome:(nome)=>{
        console.log(nome)
        return  http.get(`/getUser/${nome}`)
    }
}