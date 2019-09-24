module.exports = {
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    env: {
        node: true,
    },
    rules: {
        "comma-dangle": ["error", "always-multiline"],
        "no-unused-vars": ["error", { varsIgnorePattern: "^_"}],
    },
    settings: {
        react: {
            version: "16.9.0",
        },
    },
};