# shaw-and-partners-web-ui

## This is the frontend for the fullstack test

<br>

## Running application using local API:

<br>

#### After building the `shaw-and-partners-web-api` project, go to `next.config.js` in `shaw-and-partners-web-ui` project and set the `BASE_URL` environment variable:

<br>

```
env: {
  BASE_URL: "http://localhost:3333",
},
```

After that, make a copy of the `.env.local.example` file, rename it to `.env.local` and set the `NEXT_PUBLIC_BASE_URL` environment variable:
<br>

```
NEXT_PUBLIC_BASE_URL=http://localhost:3333
```

<br>

## Building application

#### Run:

```
npm i
```

#### Wait for packages to be installed and the application to build. Run:

```
npm start
```

## Running application for development:

#### Run:

```
npm i
```

#### Wait for packages to be installed and the application to build. Run:

```
npm run dev
```
