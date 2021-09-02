export default class FirebaseUtils {
    static areOptionsValid(options) {
        console.log("options: " );
        console.log(options);
        if (typeof(options) == "object") {
            if (!options.field || typeof(options.field) !== "string") {
                console.log("options: condition is not valid.");
                return false;
            }
            else if (!options.condition || typeof(options.condition) !== "string") {
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