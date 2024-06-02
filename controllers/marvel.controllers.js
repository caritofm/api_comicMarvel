const {request, response} = require("express");
const {comicMarvel} = require("../comicMarvel");

const getComicMarvel =(req, res) => {

    return res.json({
        ok:true,
        statusCode: 200,
        comicMarvel:comicMarvel
    });


}

const getComicMarvelById = (req = request, res = response)=>{
    let id = parseInt(req.params.id);

    let comicMarvelBuscar = "";

    comicMarvelBuscar = comicMarvel.find((comicMarvel)=> {
        return comicMarvel.id === id;
    })

    if(comicMarvelBuscar){
        return res.json({
            ok:true,
            codeStatus:200,
            comicMarvelBuscar
        });
    }else{
        return res.json({
            ok:false,
            codeStatus:404,
            msg: "No hay super heroes con ese id"

        });
  }
}


module.exports = {
    getComicMarvel,
    getComicMarvelById
}