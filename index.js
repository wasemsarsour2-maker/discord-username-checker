const fs = require("fs");

const CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789_";

function generateUsername(length) {
    let username = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(
            Math.random() * CHARACTERS.length
        );

        username += CHARACTERS[index];
    }

    return username;
}

function generateList(count) {
    const usernames = new Set();

    while (usernames.size < count) {
        const length = Math.random() < 0.5 ? 3 : 4;
        usernames.add(generateUsername(length));
    }

    return [...usernames];
}

const usernames = generateList(1000);

const three = usernames.filter(name => name.length === 3);
const four = usernames.filter(name => name.length === 4);

fs.writeFileSync("3-letter.txt", three.join("\n"));
fs.writeFileSync("4-letter.txt", four.join("\n"));

console.log("Generated successfully!");
console.log("3-letter:", three.length);
console.log("4-letter:", four.length);
