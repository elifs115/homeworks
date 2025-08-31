export const validateTodoCreate = (req,res,next) => {
    const { title, description, userId } = req.body;
    if ( !title || !description || !userId) {
       return res.status(400).json({message: "Title, description, and userId is required!"})
    }
next();

}