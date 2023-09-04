#!/bin/bash
tar -czvf temp.tar.gz $(git ls-files -o --exclude-standard)

# Check if the file 'temp.tar.gz' exists
if [ ! -f "temp.tar.gz" ]; then
  echo "File 'temp.tar.gz' does not exist. Exiting."
  exit 1
fi

# Calculate the SHA-256 checksum for the 'temp.tar.gz' file
actual_checksum=$(shasum -a 256 temp.tar.gz | awk '{print $1}')

# Ask the user for the expected checksum
echo "Enter the expected SHA-256 checksum:"
read expected_checksum

# Check if the input is empty
if [ -z "$expected_checksum" ]; then
  echo "Input is empty. Exiting."
  exit 1
fi

# Compare the user-provided checksum with the actual checksum
if [ "$expected_checksum" = "$actual_checksum" ]; then
  echo "Checksums match. File 'Durian.js' is valid."
  rm -r temp.tar.gz
  exit 0
else
  echo "Checksums do not match. File 'Durian.js' is INVALID."
  rm -r temp.tar.gz
  exit 1
fi
