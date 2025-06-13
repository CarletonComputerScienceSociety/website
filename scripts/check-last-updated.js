const { execSync } = require("child_process");
const fs = require("fs");

const FAQ_DIR = "content/resources/faq/questions/";
const GIT_RANGE = "HEAD^..HEAD"; // ← safer comparison

function getChangedFiles() {
    const output = execSync(`git diff --name-only ${GIT_RANGE}`).toString();
    const files = output.split("\n").filter(f => f.startsWith(FAQ_DIR) && f.endsWith(".md"));
    console.log("🔍 Detected changed files:", files); // ← debug log
    return files;
}

function didUpdateLastUpdated(filePath) {
    const diffOutput = execSync(`git diff ${GIT_RANGE} -- ${filePath}`).toString();
    console.log(`🔎 Diff for ${filePath}:\n${diffOutput}`); // ← debug log
    return diffOutput.includes("last_updated:");
}

const changedFiles = getChangedFiles();
let failed = false;

for (const file of changedFiles) {
    if (!didUpdateLastUpdated(file)) {
        console.error(`❌ Error: ${file} was modified but 'last_updated' was not updated.`);
        failed = true;
    }
}

if (failed) {
    console.error("\nPlease update the 'last_updated' field in all modified FAQ files.");
    process.exit(1);
} else {
    console.log("✅ All modified FAQ files have updated 'last_updated' fields.");
}
