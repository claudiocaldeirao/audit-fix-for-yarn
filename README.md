# Audit Fix for Yarn

A CLI tool that applies npm audit fix to Yarn projects.
It temporarily switches to npm, runs npm audit fix, and then syncs the changes back to yarn.lock, allowing you to benefit from audit fixes even when using Yarn.

### ✨ Why?

npm audit fix can automatically fix vulnerable packages, but Yarn doesn't yet offer an equivalent command. This tool bridges the gap by:

- Converting your yarn.lock to package-lock.json

- Running npm audit fix

- Converting the updated lockfile back to yarn.lock

### 📦 Installation

```bash
npm install -g audit-fix-for-yarn
```

### 🚀 Usage

In the root of your Yarn project, run:

The tool will:

```bash
npm install -g audit-fix-for-yarn
```

- Back up your existing yarn.lock

- Generate a package-lock.json from your current dependencies

- Run npm audit fix

- Regenerate yarn.lock using the updated package.json

- Clean up temporary files

### ⚠️ Notes

- Requires npm, yarn to be installed.

- You should commit your changes manually after reviewing them.

- Always review the updated yarn.lock before deploying.

### 📄 License

This project is open-source and available under the [MIT License](LICENSE).
