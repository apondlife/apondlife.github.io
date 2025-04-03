#!/bin/sh

# -- deno --
DENO="deno --unstable"
DENO_OPTS="--allow-read --allow-write --allow-run --allow-env --allow-net"

# -- www --
WWW_REMOTE="https://deno.land/x/wvvw@0.0.12/www.ts"

# -- paths --
SRC_PATH=src
DST_PATH=dst

# -- commands
# finds the current www path.
#
# params:
# - $IS_LOCAL_WWW: if nonempty, uses the local path
#
# outputs:
# - $WWW: to the local or remote path
FindWww() {
  # use local or remote www
  if [ -z "$IS_LOCAL_WWW" ]; then
    WWW="$WWW_REMOTE"
  else
    if [ -z "$WWW_LOCAL" ]; then
      LoadEnv
    fi

    WWW="$WWW_LOCAL"
  fi
}