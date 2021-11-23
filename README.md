# our site

the games in the grass by pondlife website.

## setup

first, install [node](https://nodejs.org/en/).

```sh
$ brew install node # mac
```

this should also install `npm`. use this to install node packages:

```sh
$ npm install
```

## dev

to run the development server:

```sh
$ npm start # or,
$ npm run dev
```

to [format](https://prettier.io/) the code:

```sh
$ npm run format
```

to just check it:

```sh
$ npm run lint
```

## deploy

to deploy to github pages, we need to to build the site to the `docs` dir before pushing:

```sh
$ npm run build
```

to preview the build site:

```sh
$ npm run preview
```
