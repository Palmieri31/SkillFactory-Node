import {readFile} from 'fs/promises';
import path from 'path';

const __dirname = path.resolve(path.dirname('')); 

export const getArchivo = async (req, res) => {
    
    await readFile(__dirname +'/src/archivos/archivo.txt', 'binary')
    .then(info => res.json(info))
    .catch((err => console.log(err)))
}; 
