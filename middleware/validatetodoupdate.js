export const validateTodoUpdate = (req, res, next) => {
    const todoId = parseInt(req.params.todoId, 10); 
    const a = req.body;
    
    if (Object.keys(a).length === 0) {
        return res.status(400).json({error: "At least one field is required for update."});
    }
    
  
    next();
};