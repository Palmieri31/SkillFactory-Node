
export const getSaludo = (req, res) => {
    try{
        const {nombre} = req.body;
        const text = `Buenos dias ${nombre}!`;
        res.json(text);
    } catch (error) {
        console.log(error);
    }

}