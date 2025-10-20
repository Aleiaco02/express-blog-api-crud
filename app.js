import express from 'express';
import postsRouter from './routers/postsRouter.js';

const app = express()
const port = 3000

// middleware static
app.use(express.static('public'));

// middleware bodyparser
app.use(express.json());


// rotta di partenza
app.get("/", (req, res) => {
    res.send("ciao a tutti")
})

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`ascolto la porta ${port}`);
})