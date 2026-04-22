// Claude API Sandbox — Entry Point

const title = "Claude API Sandbox";
const now = new Date().toLocaleString();

const nameIndex = process.argv.indexOf("--name");
let name = null;
if (nameIndex !== -1) {
  const value = process.argv[nameIndex + 1];
  if (!value || value.startsWith("--")) {
    console.error("Usage: node index.js [--name <your-name>]");
    process.exit(1);
  }
  name = value;
}

console.log("=============================");
console.log(`  ${title}`);
console.log(`  ${now}`);
console.log("=============================");
if (name) console.log(`Hello, ${name}!`);
console.log("OK: sandbox running");
