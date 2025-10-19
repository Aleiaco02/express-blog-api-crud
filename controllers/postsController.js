import posts from '../public/immagini_e_post/posts.js';

function index(req, res) {
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
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica intera del post ' + req.params.id);
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
