// Claude API Sandbox — Entry Point

const title = "Claude API Sandbox";

const USAGE = [
  "Usage: node index.js [--name <your-name>] [--utc] [--help]",
  "  --name <your-name>  Print a greeting",
  "  --utc               Show timestamp in ISO UTC format",
  "  --help              Show this help message",
];

if (process.argv.includes("--help")) {
  USAGE.forEach((line) => console.log(line));
  process.exit(0);
}

const nameIndex = process.argv.indexOf("--name");
let name = null;
if (nameIndex !== -1) {
  const value = process.argv[nameIndex + 1];
  if (!value || value.startsWith("--") || value.trim().length === 0) {
    USAGE.forEach((line) => console.error(line));
    process.exit(1);
  }
  name = value.trim();
}

const utc = process.argv.includes("--utc");
const now = utc ? new Date().toISOString() : new Date().toLocaleString();

console.log("=============================");
console.log(`  ${title}`);
console.log(`  ${now}`);
console.log("=============================");
if (name) console.log(`Hello, ${name}!`);
console.log("OK: sandbox running");
