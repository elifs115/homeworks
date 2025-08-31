import { users } from "../db/User.js";
import { todos } from "../db/Todo.js";

export const getAllUsers = (req, res) => {
    const safeUsers = users.map(user => ({ 
        id: user.id, 
        username: user.username, 
        email: user.email  
    }));
    
    res.status(200).json(safeUsers);
};

export const addUser = (req, res) => {
    const { username, email, password } = req.body;
    
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, username, email, password };
    users.push(newUser);
    
    res.status(201).json({ users, success: `${username} added successfully.` });
};

export const getUserTodos = (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const userExists = users.find(user => user.id === userId);
    
    if (!userExists) {
        return res.status(404).json({ error: "User not found." });
    }
    const userTodos = todos.filter(todo => todo.userId === userId);
    res.status(200).json(userTodos);
};