const validator = require('../validators');
const RepositoryControllers = require('../../repositoryWatcher/controller');
class CliController {
    constructor(args) {
        this.arguments = args;
        this.validator = new validator.CliValidator(args);
        this.repositoryWatcherController = RepositoryControllers.RepositoryWatcherController;
    }
    async execute(){
        try {
            if(await this.validator.validate()){
                let baseDirectory = this.arguments[2];
                await this.repositoryWatcherController.execute(baseDirectory);
            }

        }catch (e){
            console.log(e.message);
            process.exit(1);
        }
    }
}

module.exports = CliController;
