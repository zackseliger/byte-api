const fetch = require("node-fetch")

/**
 * Checks a username's avability. Does not require an access token.
 * 
 * @param {string} name The name you'd like to check.
 * 
 * @example
 * checkname("hackerman")
 * .then((res) => console.log(res.success))
 */
function checkName(name) {
    return fetch("https://api.byte.co/account/register/precheck", {
        method: "post",
        body: `{"username": "${name}"}`,
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
}

module.exports.checkName = checkName