pondsite
---

the pondlife website.

# [★](#click) index

- [`◈` tools](#tools)
- [`◩` setup](#setup)
- [`◍` development](#development)

# [◈](#on) tools

any command you might need is (or will be) wrapped up by a cli, `pond`:

```sh
$ ./bin/pond -h
```

each subcommand also includes a help, which can be viewed similarly:

```sh
$ ./bin/pond build -h
```

> if you install [`direnv`](https://github.com/direnv/direnv), you can access the cli without pathing or prefixing: `pond`.

## www

this site uses a work-in-progress static site generator, [www](https://github.com/tycobbb/www), which in turn depends on [`deno`](https://deno.com/).

# [◩](#fun) setup

to initialize the dev environment:

```sh
$ ./bin/pond init
```

this will install any required dependencies, namely `deno`.

> `init` is idempotent and should be safe to run multiple times.

## .env

in addition to installing dependencies, this command will create a `.env` file that contains machine or environment specific configuration. some commands may depend on this config, but they will let you know if so.

# [◍](#symbols) development

to access the dev site, run the dev server, and then [open the url](http://localhost:8888) in your browser:

```sh
$ ./bin/pond run
```

the `run` command by default builds the non-prod configuration.

## structure

the site source is found in [`src`](./src), the built output is found is [`dst`](./dst). any changes you make to the source should be picked up and rebuilt by the dev server.

there is no hot-reloading or refreshing, refresh the browser yourself!

## building

to create a one-off build, run:

```sh
$ ./bin/pond build
```

the `build` command by default builds the `prod` configuration.

this output will also go to `dst`, if you want to perform a clean build, run:

```sh
$ ./bin/pond build -f
```
