#!/bin/sh

# -- commands --
# create the dotenv, if necessary
MakeEnv() {
  cp .env.sample .env
}

# load the dotenv; fails if .env does not exist
LoadEnv() {
  if [ ! -f .env ]; then
    if [ ! -f .env.sample ]; then
      pe "you need a .env (and a .env.sample to create it from)"
      pi "run this script from the project root, e.g."
      pl "> ./bin/pond init"
      exit 20
    fi

    MakeEnv
    pi "created .env from .env.sample"
    pe "fill out .env and try again"

    exit 21
  fi

  . .env
}