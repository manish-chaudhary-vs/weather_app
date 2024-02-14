export function displayErrors(data) {
    if (data === "404"){
        alert("City Not Found");
    }
    else if (data === "400"){
        alert("Bad Request");
    }
    else if (data === "429"){
        alert("Too many requests");
    }
}