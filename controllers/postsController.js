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
    const post = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Rimuoviamo il post dall'array
    posts.splice(posts.indexOf(post), 1);

    // Restituiamo lo status corretto
    res.sendStatus(204);
}

export { index, show, store, update, destroy };
