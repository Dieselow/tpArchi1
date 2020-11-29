class FileUniqueValidator {
    constructor() {
        this.files = [];
    }

    async validate(file) {
        if (!await this.files.includes(file)) {
            await this.files.push(file);
            return true;
        }
        return false;
    }
}
module.exports = new FileUniqueValidator();
