const chokidar = require('chokidar');
const path = require('path');
const fileController = require('../../files/controller');
class RepositoryWatcherService {
    constructor() {
        this.fileProcessingService = fileController.FileProcessingController;
    }
    async process(folder) {
        let watcher = chokidar.watch(folder, {persistent: true});
        watcher.on('add', async filePath => {
            await this.fileProcessingService.execute(filePath);
        });
    }
}
module.exports = new RepositoryWatcherService();
