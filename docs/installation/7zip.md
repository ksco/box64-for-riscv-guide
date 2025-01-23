---
sidebar_position: 6
slug: /7zip
---

# Install 7zip

Install dependencies

```shell
sudo apt install build-essential autoconf automake libtool zlib1g-dev
```

Download and extract source code

```shell
# Download the latest source code
wget https://www.7-zip.org/a/7z2409-src.tar.xz

# Create a new directory
mkdir 7z2409-src

# Extract the source code into the directory
tar -xvJf 7z2409-src.tar.xz -C 7z2409-src

# Navigate to the extracted directory
cd 7z2409-src/CPP/7zip/Bundles/Alone/
```

Compile

```shell
make -f makefile.gcc
cd ~
sudo cp ./7z2409-src/CPP/7zip/Bundles/Alone/_o/7za /usr/local/bin/7z
```
