#!/bin/sh

# -- queries --
# find the current os.
#
# outputs:
# - $OS_NAME: the current os (e.g. mac, win)
FindOs() {
  case "$OSTYPE" in
    darwin*) OS_NAME="mac" ;;
    *)       OS_NAME="win" ;;
  esac
}