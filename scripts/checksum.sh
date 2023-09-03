tar -czvf temp.tar.gz $(git ls-files -o --exclude-standard)

if [ ! -f "temp.tar.gz" ]; then
  echo "File 'temp.tar.gz' does not exist. Exiting."
  exit 1
fi

actual_checksum=$(shasum -a 256 temp.tar.gz | awk '{print $1}')

echo "Enter the expected SHA-256 checksum:"
read expected_checksum

if [ -z "$expected_checksum" ]; then
  echo "Input is empty. Exiting."
  exit 1
fi

if [ "$expected_checksum" = "$actual_checksum" ]; then
  echo "Checksums match. File 'Durian.js' is valid."
  rm -r temp.tar.gz
  exit 0
else
  echo "Checksums do not match. File 'Durian.js' is INVALID."
  rm -r temp.tar.gz
  exit 1
fi
