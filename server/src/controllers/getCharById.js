const axios = require('axios');


const getCharById = async  (req,res) => {
    let {id} = req.params;
    let URL = `https://rickandmortyapi.com/api/character/${id}`;
    try {
        let response =  await axios.get(URL);
        if(response.data.name) {
            console.log(response.data);
            let {id, name, gender, species, origin, image,status} = response.data;
            let charObj = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            res.status(200).json(charObj)
        }
        else res.status(404).send('Not found.');
    }catch(error) {
        console.log('Axios Error', error);
        res.status(500).send(error.message);

    }
   
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