export default class FirebaseUtils {

    static isValidString(string) {
        return (string && typeof (string) === "string");
    }

    static areOptionsValid(options) {

        if (typeof (options) == "object") {
            if (!this.isValidString(options.field)) {
                return false;
            }
            else if (!this.isValidString(options.condition)) {
                return false;
            }
            else if (!options.value) {
                return false;
            }
            else {
                return true;
            }
        } else {
            return false;
        }
    }
}