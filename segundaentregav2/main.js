import app from "./server.js";

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Server connected on port : ${PORT}`)
})
server.on('error', error => console.log(`Server error : ${error}`));