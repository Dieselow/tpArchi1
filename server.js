const CliApplication = require('./cli/controller');

async function bootstrap() {
    try {
        let cliApplicationController = new CliApplication.CliController(process.argv);
        await cliApplicationController.execute();
    } catch (e) {
        throw new Error(e.message);
    }
}

bootstrap().then().catch((e) => {
    throw new Error(e.message);
});

