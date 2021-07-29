
export const getFecha = (req, res) => {
    try {
        const fecha = new Date();
        res.json(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
    }catch (error) {
        console.log(error);
    }
}