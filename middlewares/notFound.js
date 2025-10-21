// funzione di errore quando una rotta non può essere trovata

function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "not found",
        message: "pagina non trovata"
    })
}

export default notFound