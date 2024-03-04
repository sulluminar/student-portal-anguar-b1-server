// import json-server
const jsonServer= require("json-server")

// create json server
const studentServer= jsonServer.create()

//set path for db
const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults()
studentServer.use(middleware);
studentServer.use(router)

const PORT = 4000;
studentServer.listen(PORT, ()=>{
    console.log("StudentServer is up and running in port 4000")
})