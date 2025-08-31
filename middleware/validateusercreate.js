 // Email validation
export const checkUserFormat = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Username, email and password are required." });
        };
     
    const atindex = email.indexOf('@');
    if (atindex < 1 || atindex === email.length - 1) {
        return res.status(400).json({ error: "Invalid email format." });
    };
    
    const dotindex = email.indexOf('.');
    if (dotindex < atindex + 2 || dotindex === email.length - 1) {
        return res.status(400).json({ error: "Invalid email format." });
    };
    
    const spaceindex = email.indexOf(' ');
    if (spaceindex !== -1) {
        return res.status(400).json({ error: "Invalid email format." });
    };
    next();

}
    