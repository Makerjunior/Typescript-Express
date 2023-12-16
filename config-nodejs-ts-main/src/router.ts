import { Router } from "express";
import { firstController } from "./app/controller/FirstController";
import { SimplifiedGitHubUser } from "./app/interfaces/ISimplesGitUser";
import { getSimplifiedApiUser, getUserHandler } from "./app/controller/UserController";

/** @type {*} */
const router: Router = Router();

router.get("/", firstController.home);


router.get('/getUser/:name', async (req, res) => {
   
    const name = req.params.name;
      try {
     
     const simplifiedUser: SimplifiedGitHubUser = await getSimplifiedApiUser(name);
     console.log(simplifiedUser);
     res.json(simplifiedUser);

    } catch (error) {
      res.status(500).json({ error: 'Erro na requisição' });
    }
  })

export { router };
