import axios, { AxiosResponse } from "axios";
import { SimplifiedGitHubUser } from "../interfaces/ISimplesGitUser";
import { Request, Response } from 'express';
/**
 * @export
 * @param {string} name
 * @return {*} 
 */
export async function getSimplifiedApiUser(name: string){
    try {
      const response: AxiosResponse<SimplifiedGitHubUser> = await axios.get<SimplifiedGitHubUser>(`https://api.github.com/users/${name}`);
      // Pode adicionar lógica adicional para manipular a resposta conforme necessário
      return response.data;
    } catch (error: any) {
      console.error('Erro na requisição:', error.message);
      throw error;
    } }
/**
 *  @export
 * @param {Request} req
 * @param {Response} res
 * @return {*} 
 */
export async function getUserHandler(req: Request, res: Response){
    const name = req.params.name;
   try {
      const simplifiedUser: SimplifiedGitHubUser = await getSimplifiedApiUser(name);
    //  console.log("Dados da API "+simplifiedUser);
      return res.json(simplifiedUser);
    } catch (error) {
      console.error('Erro na requisição:');
      res.status(500).json({ error: 'Erro na requisição' });
    }
  }


