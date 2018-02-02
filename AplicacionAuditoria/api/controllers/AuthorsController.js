module.exports = {
    crearAutor: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoAutor = {
            nombre: parametros.nombre,
        };
        Authors.create(nuevoAutor)
            .exec(function (error, autorCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
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
        });
    },
};
