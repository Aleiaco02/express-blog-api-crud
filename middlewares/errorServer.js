
// funzione di errore generale quando c'è un errore di codice
function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({
        error: err.message,
    });
}

export default errorHandler