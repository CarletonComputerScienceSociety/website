const { execSync } = require("child_process");
const fs = require("fs");

const GIT_RANGE = "HEAD~1..HEAD";
const TARGET_DIRS = [
  "content/resources/faqs/**",
  "content/resources/articles/**"
];

function getChangedFiles() {
  const output = execSync(`git diff --name-only ${GIT_RANGE}`).toString();
  return output
    .split("\n")
    .filter(f => f.endsWith(".md") && TARGET_DIRS.some(dir => f.startsWith(dir)));
}

function didUpdateLastUpdated(filePath) {
  const diffOutput = execSync(`git diff ${GIT_RANGE} -- ${filePath}`).toString();
  
  const lastUpdatedLines = diffOutput
    .split('\n')
    .filter(line => line.includes("last_updated:"));

  // Check if there's both a removed (-) and added (+) line
  const hasRemoved = lastUpdatedLines.some(line => line.startsWith("-"));
  const hasAdded = lastUpdatedLines.some(line => line.startsWith("+"));

  return hasRemoved && hasAdded;
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
  console.error("\n❌ CI FAILED: The following files were modified without updating 'last_updated':");
  for (const file of changedFiles) {
    if (!didUpdateLastUpdated(file)) {
      console.error(`   • ${file}`);
    }
  }

  throw new Error("🚫 Commit rejected: 'last_updated' must be updated for each modified FAQ/article.");
} else {
  console.log("✅ All modified FAQ/article files have updated 'last_updated' fields.");
}