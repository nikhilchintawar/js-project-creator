#!/usr/bin/env node

const fs = require("fs");
const {htmlFile, cssFile, jsFile, messages} = require("./files");

let folderName = process.argv[2];

const createProject = (folderName) => {
    try {
        let folder = `${process.cwd()}/${folderName}`;
        fs.mkdirSync(folder, { recursive: true });
        fs.writeFileSync(`${folder}/index.html`, htmlFile);
        fs.writeFileSync(`${folder}/index.css`, cssFile);
        fs.writeFileSync(`${folder}/index.js`, jsFile);

        console.log(`cd ${folderName}`);
        for(let message of messages){
            console.log(message);
        }
    } catch (error) {
        console.error("Not able to create project.please try again.");
    }
}

createProject(folderName)