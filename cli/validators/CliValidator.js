const fs = require('fs');

class CliValidator {
    constructor(args) {
        this.args = args[2];
        this.path = args[2];
    }

    validateArguments() {
        try {
            if (typeof this.args !== 'undefined') {
                return true;
            }
        } catch (e) {
            throw new Error('No directory passed in arguments');

        }
    }

    validatePath() {
        fs.access(this.path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
            if (err) {
                console.log("%s doesn't exist", this.path);
            } else {
                console.log('can read/write %s', this.path);
            }
        });
        console.log('jshfkjsd');
        return true;
    }

    isDirectory() {
        return fs.lstatSync(this.path).isDirectory()

    }

    validate() {
        return this.validateArguments(this.args) && this.validatePath() && this.isDirectory();
    }

}

module.exports = CliValidator;
