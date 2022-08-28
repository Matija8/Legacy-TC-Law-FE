#!/usr/bin/env bash
# coding: UTF-8

script_dir=$(realpath $(dirname "$0"))
cd "$script_dir/.."

function main {
    printf "Starting clean operation...\n\n"
    # pwd

    rm -rf .next
    echo "rm /.next dir done."

    rm -rf out
    echo "rm /out dir done."

    rm -f tc-law*.zip
    echo "rm *.zip files done."

    rm -rf node_modules
    echo "rm node_modules done."

    # rm -f yarn.lock && rm -f package-lock.json
    # echo "rm lockfiles done."

    printf "\nCleaning done!\n"
}

main
