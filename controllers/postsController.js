import posts from '../public/immagini_e_post/posts.js';

function index(req, res) {
    giacomo.get();
    paperino.get();
    giacomo.get();


    res.json(posts);

}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send('Post non trovato');
    }

    res.json(post);
}

function store(req, res) {
    // creazione nuovo id
    const newId = posts[posts.length - 1].id + 1;

    // Creiamo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo il post all'array dei posts
    posts.push(newPost);

    // controllo
    console.log(posts);


    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201).json(newPost);
}

function update(req, res) {
    // Recuperiamo l'id dall'URL e lo trasformiamo in numero
    const id = parseInt(req.params.id);

    // Cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Se il post non esiste errore 404
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Aggiorniamo i campi del post con i nuovi dati
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Log di controllo
    console.log(posts);
    console.log("il post modificato è ", post);

    // Restituiamo il post aggiornato
    res.json(post);
}


function destroy(req, res) {
    // Recuperiamo l'id dall'URL e lo trasformiamo in numero
    const id = parseInt(req.params.id);

    // Cerchiamo il post tramite id
    const index = posts.findIndex(post => post.id === id);

    // Se non trovato, rispondiamo con 404
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Rimuoviamo il post dall'array
    posts.splice(index, 1);

    // Stampiamo la lista aggiornata nel terminale
    console.log('Lista post aggiornata:', posts);

    // Rispondiamo con status 204 (No Content)
    res.sendStatus(204);
}

export { index, show, store, update, destroy };
