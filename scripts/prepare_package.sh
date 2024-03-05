#!/bin/bash
files=("package.json" "README.md" "LICENSE" "NOTICE")

echo "Creating package folder..."
mkdir -p ./package

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" ./package/
    fi
done

# Clean the prepare husky script on the package folder
cd package && npm pkg delete scripts.prepare && npm pkg delete devDependencies && npm pkg delete lint-staged

echo "Files copied successfully."
