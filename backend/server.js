import app from "./app.js";

app.listen(process.env.PORT , () => { console.log (`Running At  http://localhost:${process.env.PORT}`)})