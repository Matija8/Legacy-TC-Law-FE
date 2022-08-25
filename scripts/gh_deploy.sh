#!/usr/bin/env bash
# coding: UTF-8

script_dir=$(realpath $(dirname "$0"))
cd "$script_dir/.."

function main {
    npm run gh-deploy:next-export

    # https://stackoverflow.com/questions/58699725/how-can-one-get-github-pages-to-serve-dot-files-like-rfc5785s-well-known
    touch ./out/.nojekyll

    # https://www.npmjs.com/package/gh-pages
    # https://github.com/tschaub/gh-pages
    npm run gh-deploy:save-out-dir-to-pages
}

main
