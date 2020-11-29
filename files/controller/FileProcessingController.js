const validators = require('../validators');
const services = require('../services');

class FileProcessingController {
    constructor() {
        this.fileUniqueValidator = validators.FileUniqueValidator;
        this.fileProcessingService = services.FileProcessingService;
    }

    async execute(file) {
        try {
            if (await this.fileUniqueValidator.validate(file)) {
                console.log(
                    `[${new Date().toLocaleString()}] ${file} has been added.`
                );
                await this.fileProcessingService.process(file);
                console.log(`File ${file} has been processed`)
            } else {
                console.log(`File ${file} already exist so won't be added again`);
            }
        } catch (e) {
            console.log(e.message);
            process.exit(1);
        }

    }
}

module.exports = new FileProcessingController();
