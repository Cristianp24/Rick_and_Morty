let myFavorites = [];

 
const  postFav =(req,res) =>  {
    console.log(req.body);
    const char = req.body;
    myFavorites.push(char)
    res.status(200).json(myFavorites)
     
}

function deleteFav (req,res) {
    console.log(req.params);
    const { id } = req.params;
    myFavorites = myFavorites.filter(character => character.id !== Number(id));
    res.status(200).json(myFavorites);
    
    
}

module.exports = {
    postFav,
    deleteFav
}