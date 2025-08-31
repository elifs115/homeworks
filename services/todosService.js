import { todos } from "../db/Todo.js";
import { users } from "../db/User.js";

export const getAllTodos  = (req, res) => {
    res.status(200).json(todos);

};

export const addTodo = (req, res) => {
    const { id, title, description, completed = false, userId } = req.body;

   //title ve description zorunlu, boş bırakılamaz.
   const newTodo = {
    id: users.length + 1,
    title,
    description,
    completed,
    userId
   }
    //userId mevcut bir kullanıcıya ait olmalı.
    //completed gönderilmezse varsayılan false kabul edilir.
    todos.push(newTodo); 
    res.status(201).json({ message: `${title} added successfully!`, newTodo});
}

export const getTodobyid = (req,res) => {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        res.status(404).json({error: "Todo not found."});
    }
    res.status(200).json(todo);

}

export const deleteTodo = (req,res) => {
    const index = parseInt(req.param.id -1);
    if (index === -1){
        res.status(400).json({Error: "Todo not found."});
    }
    todos.splice(index, 1)[0];
    res.status(204).json({Success: "Todo deleted succesfully!"});
}

export const updatedTodo = (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const { title, description, completed } = req.body;

  const todoIndex = todos.findIndex(t => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found!" });
  }


  todos[todoIndex] = {
    ...todos[todoIndex],
    title,
    description,
    completed
  };

  res.status(200).json({
    success: "Todo updated successfully!",
    Todo: todos[todoIndex]
  });
};

export const patchTodo = (req, res) => {
    

const todoId = parseInt(req.params.id, 10);

  const todoIndex = todos.findIndex(t => t.id === todoId); 

    
    const updates = req.body;
    let hasupdates = false
    for (let t in updates) {
        hasupdates = true;
        break;
    }
     
    if (todoIndex === -1) {
        return res.status(404).json({error: "Todo not found!"});
    }
    
      
    if(updates.title) {
        todos[todoIndex].title = title
    }
    if(updates.description) {
        todos[todoIndex].description = description
    }
    if(updates.completed) {
        todos[todoIndex].completed = completed
    }
    res.status(200).json({success: "Todo patched successfully!", todo: todos[todoIndex]})
};
