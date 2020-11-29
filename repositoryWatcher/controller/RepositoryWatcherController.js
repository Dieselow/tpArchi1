const RepositoryServices = require('../services');

class RepositoryWatcherController {
    constructor() {
        this.repositoryWatcherService = RepositoryServices.RepositoryWatcherService;
    }

    async execute(folder) {
        console.log(
            `[${new Date().toLocaleString()}] Watching for folder changes on: ${folder}`
        );
        await this.repositoryWatcherService.process(folder);
    }
}

module.exports = new RepositoryWatcherController();
