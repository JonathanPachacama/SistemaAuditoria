declare var module;
declare var require;
declare var sails;
declare var Authors;

module.exports = {

  crearAutor:(req,res)=>{


    let parametros = req.allParams();
    sails.log.info("Parametros",parametros);

    let nuevoAutor = {
      nombre:parametros.nombre,

    };


    Authors.create(nuevoAutor)
      .exec(
        (error,autorCreado)=>{
          if(error){
            return res.serverError(error)
          }else{
            // return res.ok(autorCreado);
            /*

                             Usuario.find().exec((err,usuarios)=>{
                               if(err) return res.negotiate(err);
                               sails.log.info("Usuarios",usuarios);

                               return res.view('homepage',{
                                 usuarios:usuarios
                               })
                             })
                            */
            return res.redirect("/");
          }
        }
      )


  },

}
