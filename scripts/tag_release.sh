#!/bin/bash

# Read target version from command line
TARGET_VERSION=$1
CURRENT_VERSION=$(sed -n 's/.*"version": "\([^"]*\)".*/\1/p' package.json)

if [[ -z $TARGET_VERSION ]]; then
    echo "Current version (root) is v$CURRENT_VERSION"
    read -p "Please specify target version: " TARGET_VERSION
    read -n 1 -p "Confirm version change 'v$CURRENT_VERSION' -> 'v$TARGET_VERSION' ? (Enter): " CONFIRM_VERSION

    if [[ $CONFIRM_VERSION != "" ]]; then
        echo "Aborting..."
        exit 1
    fi
else
    echo "Target version: v$TARGET_VERSION"
fi

echo "Bumping version in package.json..."
sed -i.bak "s/version\": \"[^\"]*/version\": \"$TARGET_VERSION/" package.json
rm package.json.bak


read -n 1 -p "Confirm making a bump commit and tagging with 'v$TARGET_VERSION' ? (Enter): " CONFIRM_BUMP

if [[ $CONFIRM_BUMP != "" ]]; then
    echo "Aborting..."
    exit 1
fi

yarn install

echo "Making a bump commit..."
files_to_commit=("package.json" "yarn.lock")

for file in "${files_to_commit[@]}"
do
    git add "$file"
done

git commit -S -m "chore: bump version to v$TARGET_VERSION"

echo "Tagging commit with 'v$TARGET_VERSION'..."
git tag v$TARGET_VERSION

read -n 1 -p "Do you want to push branch and tags ? (Enter): " CONFIRM_PUSH
if [[ $CONFIRM_PUSH != "" ]]; then
    echo "Exiting without pushing..."
    exit 1
fi

echo "Pushing branch and tags..."
git push
git push origin refs/tags/v$TARGET_VERSION
echo "Done!"
