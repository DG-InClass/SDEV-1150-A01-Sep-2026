To initialize a **new** Node project

```ps
pnpm init
```

That will create the `package.json`

----

Node projects, especially web applications, almost always have **dependencies**. Those are 3rd-party libraries/packages with code that we can use in our project. There are two types of dependencies:

- `"dependencies"` - These are the ones that are used internally by your program/web app and will be shipped along with your own code.
- `"devDependencies"` - These are ones that are only used for development purposes. They are NOT shipped or packaged into your final project/app.

```ps
pnpm add -D -E vite
pnpm add -D -E vitest
pnpm add -E @picocss/pico
```

The `-D` flag means we want the dependencies as **developer dependencies**.

The `-E` flag means we want the *Exact* version identified.

## Lock Files

When you install packages with `pnpm`, a `pnpm-lock.yaml` file is generated for security purposes (so that your project won't be 'hacked').

`npm` and `yarn` and `bun` also have lock files, but their nams are slightly different. For example, `npm` generates a `package-lock.json`.