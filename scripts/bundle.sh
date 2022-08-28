#!/usr/bin/env bash
# coding: UTF-8

script_dir=$(realpath $(dirname "$0"))
cd "$script_dir/.."

rm -rf ./out
npm run zip:out:full
ls tc-law-out.zip
