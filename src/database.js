const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gusmza2005:TT003658@cluster0.s4r8tld.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conexión exitosa"))
    .catch(() => console.log("Vamos a morir, tenemos un error"))
    