# Claude API Sandbox

This sandbox is a personal learning environment for experimenting with the Anthropic Claude API — testing prompts, exploring model behaviors, and building toward AI-powered features for Panel Genius and ADHD Focus Hub. To run the sandbox, execute `node index.js` from the project root (coming in Lesson 3).

## Usage

```bash
node index.js              # default output
node index.js --name Alys  # prints "Hello, Alys!" before the OK line
```

Safe-default rule: never hardcode API keys — always load them from environment variables via a `.env` file that is listed in `.gitignore`.
