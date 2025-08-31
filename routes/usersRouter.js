import { Router } from 'express';
import { getAllUsers, addUser, getUserTodos} from '../services/usersService.js';
import { checkUserFormat } from "../middleware/validateusercreate.js";

const router = Router();
router.get('/', getAllUsers);
router.post('/',checkUserFormat, addUser);
router.get('/:userId/todos', getUserTodos);
export default router;