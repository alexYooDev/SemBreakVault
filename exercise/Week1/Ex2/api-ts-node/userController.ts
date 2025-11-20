import express, {Response, Request} from "express";
import { UserService } from "./userService";

const app = express();
const service = new UserService();


app.get('/user/:email', (req: Request, res: Response) => {
    const email = req.params.email;
    const user = service.fetchUser(email);
    
    if (!user) {
        return res.status(404).send("User not found");
    }

    return res.json(user);

});

app.listen(3000, () => console.log(`Server running in http://localhost:${3000}`));