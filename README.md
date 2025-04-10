pondsite
---

the pondlife website.

# [★](#click) index

- [`◈` tools](#-tools)
- [`◩` setup](#-setup)
- [`◍` development](#-development)

# [◈](#on) tools

any command you might need is (or will be) wrapped up by a cli, `pond`:

```sh
$ ./pond -h
```

each subcommand also includes a help, which can be viewed similarly:

```sh
$ ./pond build -h
```

> if you install [`direnv`](https://github.com/direnv/direnv), you can access the cli without pathing or prefixing: `pond`.

## eleventy

this site uses a the static site generator [eleventy](https://www.11ty.dev/), which in turn depends on [`nodejs`](https://nodejs.org/).

# [◩](#fun) setup

to initialize the dev environment:

```sh
$ ./pond init
```

this will check for and try to install any required dependencies, namely `node`.

> `init` is idempotent and should be safe to run multiple times.

## .env

in addition to installing dependencies, this command will create a `.env` file that contains machine or environment specific configuration. some commands may depend on this config, but they will let you know if so.

# [◍](#symbols) development

to access the dev site, run the dev server, and then [open the url](http://localhost:8080) in your browser:

```sh
$ ./pond run
```

the `run` command by default builds the non-prod configuration.

## structure

the site source is found in [`src`](./src), the built output is found is [`dst`](./dst). any changes you make to the source should be picked up and rebuilt by the dev server.

there is no hot-reloading or refreshing, refresh the browser yourself!

## building

to create a one-off build, run:

```sh
$ ./pond build
```

the `build` command by default builds the `prod` configuration.

this output will also go to `dst`, if you want to perform a clean build, run:

```sh
$ ./pond build -f
```
