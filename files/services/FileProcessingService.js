class FileProcessingService {
    async process(file) {
        let waitTime = Math.floor(
            Math.random() * (1001 - 500) + 500
        );
        await this.sleep(waitTime);
        return true;
    }

    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}

module.exports = new FileProcessingService();
