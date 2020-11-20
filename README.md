# codemod-example

This repository is an use case set up for the article: 

It shows how to work with [jscodeshift](https://github.com/facebook/jscodeshift).

You can find:
- `src/HelloWorld.js`: Source file
- `codemod/transform.js`: Codemod

## 🛠 Installation

```sh
yarn
# or
npm install
```

## ⚡️ Run

Transform the code runing:

```sh
npx jscodeshift -t codemod/transform.js src/HelloWorld.js
```

- `-t codemod/refactor.js` is for the path to the transformation file.
- `src/HelloWorld.js` is the file we want to transform (you can use)

**Tada, your file has been transformed 🎉**