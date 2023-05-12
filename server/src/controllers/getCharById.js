

const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async  (req,res) => {
    const {id} = req.params;

    axios
    .get(`${URL}${id}`)
    .then((response)=>{
        const {id, name, gender, species, origin, image, status} = response.data;
        const character = {id, name, gender, species, origin, image, status};

    character.name 
        ? res.status(200).json(character) 
        : res.status(404).send('No existe el personaje');
    }).catch((error)=>{
        res.status(500).json({message: error.message})
    })
}




module.exports = getCharById;
// const axios = require('axios');



//  const getCharById = (id) => {
//      let url = `https://rickandmortyapi.com/api/character/${id}`;
//     return axios.get(url)
//     .then(data => {
//         let { id, name, gender, species, origin, image, status} = data.data
//         let charObj = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return charObj;
//         // res.writeHead(200, {'Content-Type': 'application/json'})
//         // res.end(JSON.stringify(charObj));
//     })
//    .catch(error => {
//     return false;
//    })
  
// }

// module.exports = getCharById;