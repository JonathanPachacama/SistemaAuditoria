/**
 * Authors.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  connection:'sqlserver',
  attributes:{
    id:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },

    nombre:{
      type:"string"
    },
    // au_fname:{
    //   type:"string"
    // },
    // phone:{
    //   type:"number"
    // },
    // address:{
    //   type:"string"
    // },
    // city:{
    //   type:"string"
    // },
    // state:{
    //   type:"string"
    // },
    // zip:{
    //   type:"string"
    // },
    // contract:{
    //   type:"binary"
    // },


  }
};

