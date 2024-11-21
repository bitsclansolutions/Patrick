export function formatErrors(errors) {
    let result = '';

    for (const [field, messages] of Object.entries(errors)) {
        result += `${field}:<br/>`;
        for (const message of messages) {
            result += `${message}<br/>`;
        }
    }

    return result.trim(); // Remove any trailing <br>
}
