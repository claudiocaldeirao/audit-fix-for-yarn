#!/usr/bin/env node

const { execSync } = require("child_process");

function runCommand(command, options = {}) {
  try {
    execSync(command, { stdio: "inherit", ...options });
  } catch (err) {
    console.error(`Error while running: ${command}`);
    process.exit(1);
  }
}

try {
  // Check for yarn
  execSync("yarn --version", { stdio: "ignore" });
  console.log("✅ Yarn is installed. Running audit fix sequence...\n");

  // Generate package-lock.json without installing node_modules
  runCommand("npm i --package-lock-only");

  // Apply audit fix
  runCommand("npm audit fix");

  // Remove yarn.lock and convert package-lock.json into yarn.lock
  runCommand("rm -rf yarn.lock");
  runCommand("yarn import");

  // Clean up
  runCommand("rm -rf package-lock.json");

  console.log("\n✅ Audit fix complete. yarn.lock has been updated.");
} catch (err) {
  console.error(
    "❌ Error: Yarn is not installed. Please install it before running this script."
  );
  process.exit(1);
}
