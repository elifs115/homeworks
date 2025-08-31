export const validateTodoUpdate = (req, res, next) => {
    const todoId = parseInt(req.params.todoId, 10); 
    const a = req.body;
    
    if (Object.keys(a).length === 0) {
        return res.status(400).json({error: "At least one field is required for update."});
    }
    
    const todoIndex = todos.findIndex(t => t.id === todoId); 
    if (todoIndex === -1) {
        return res.status(404).json({error: "Todo not found!"});
    }
    
    next();
};