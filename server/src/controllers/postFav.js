const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  let { id,name, origin, status, image, species, gender } = req.body;
  console.log(req.body);
  try {
    if (name && origin && status && image && species && gender && id) {
      await Favorite.findOrCreate({
        where: { id,name, origin, status, image, species, gender },
      });
      const favs = await Favorite.findAll();
      //cuando tengan muchos usuarios tiene que relacion el favorito a un usuario
      //User.addFavorite(favs)
      return res.status(201).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
async function deleteFav(req,res){
        const {id} = req.params;
    
    try {
        await Favorite.destroy({where:{id:id}})
        const favorites = await Favorite.findAll()
            return res.status(200).json(favorites)
    } catch (error) {
            res.status(500).json({message:error.message})
        }
    
     }

module.exports = {
    postFav,
    deleteFav
}


// const { Favorite } = require('../DB_connection');

// async function postFav (req,res) {
//     const {name, origin, status, image, species, gender, id} = req.body;
//     console.log(req.body);
//     try {
//         if(!name || !origin || !status || !image || !species || !gender || !id){
//             return res.status(401).send("Faltan datos");
//         }
//        await Favorite.findOrCreate({
//             where:{name, origin, status, image, species, gender,id}
//         });
//         const favorites = await Favorite.findAll();
//          console.log(favorites);
//         return res.status(200).json(favorites)

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// }

// async function deleteFav(req,res){
//     const {id} = req.params;

//     try {
//         await Favorite.destroy({where:{id:id}})
//         const favorites = await Favorite.findAll()
//         return res.status(200).json(favorites)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// }

// module.exports = {
//     postFav,
//     deleteFav
// }