const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.incidentsPath = '/api/incidents';

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Public directory
        this.app.use(express.static('public'));
        // Read and parse body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.incidentsPath, require('../routes/incident.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }

}

module.exports = Server;