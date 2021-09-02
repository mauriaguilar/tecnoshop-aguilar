export default class FirebaseUtils {

    static validString(string) {
        return (string && typeof(string) === "string");
    }

    static areOptionsValid(options) {
        console.log("options: " );
        console.log(options);

        if (typeof(options) == "object") {
            if (!this.validString(options.field)) {
                console.log("options: condition is not valid.");
                return false;
            }
            else if (!this.validString(options.condition)) {
                console.log("options: condition is not valid.");
                return false;
            }
            else if (!options.value) {
                console.log("options: value is not valid.");
                return false;
            }
            else {
                console.log("options: are valid.");
                return true;
            }
        } else {
            console.log("options: are not valid.");
            return false;
        }
    }
}