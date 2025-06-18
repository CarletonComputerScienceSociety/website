const { execSync } = require("child_process");
const fs = require("fs");

const GIT_RANGE = "HEAD~1..HEAD";
const TARGET_DIRS = [
  "content/resources/faqs/questions/",
  "content/resources/articles/"
];

function getChangedFiles() {
  const output = execSync(`git diff --name-only ${GIT_RANGE}`).toString();
  return output
    .split("\n")
    .filter(f => f.endsWith(".md") && TARGET_DIRS.some(dir => f.startsWith(dir)));
}

function didUpdateLastUpdated(filePath) {
  const diffOutput = execSync(`git diff ${GIT_RANGE} -- ${filePath}`).toString();
  return diffOutput.includes("last_updated:");
}

const changedFiles = getChangedFiles();
let failed = false;

if (changedFiles.length > 0) {
  console.log("🔍 Detected changed files:", changedFiles);
}

for (const file of changedFiles) {
  const diff = execSync(`git diff ${GIT_RANGE} -- ${file}`).toString();
  console.log(`🔎 Diff for ${file}:\n${diff}`);
  if (!didUpdateLastUpdated(file)) {
    console.error(`❌ Error: ${file} was modified but 'last_updated' was not updated.`);
    failed = true;
  }
}

if (failed) {
  console.error("\nPlease update the 'last_updated' field in all modified FAQ/article files.");
  process.exit(1);
} else {
  console.log("✅ All modified FAQ/article files have updated 'last_updated' fields.");
}
