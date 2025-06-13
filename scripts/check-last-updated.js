const { execSync } = require("child_process");
const fs = require("fs");

const FAQ_DIR = "content/resources/faq/questions/";
const GIT_RANGE = "HEAD~1..HEAD";

function getChangedFiles() {
    const output = execSync(`git diff --name-only ${GIT_RANGE}`).toString();
    return output.split("\n").filter(f => f.startsWith(FAQ_DIR) && f.endsWith(".md"));
  }

  function didUpdateLastUpdated(filePath) {
    const diffOutput = execSync(`git diff ${GIT_RANGE} -- ${filePath}`).toString();
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
  process.exit(1); // ❌ fail the script
} else {
  console.log("✅ All modified FAQ files have updated 'last_updated' fields.");
}
