---
sidebar_position: 5
slug: /wow64
---

# Download Wine WOW64

Download the latest WOW64 prebuilt build from this [location](https://github.com/Kron4ek/Wine-Builds/releases), using the "Wine 9.22" version as an example:

Download:

```shell
wget https://github.com/Kron4ek/Wine-Builds/releases/download/9.22/wine-9.22-amd64-wow64.tar.xz
```

Extract:

```shell
tar -xf wine-9.22-amd64-wow64.tar.xz
```

Usage:

```shell
box64 ./wine-9.22-amd64-wow64.tar.xz/bin/wine [Windows executable]
```

Temporarily add Wine WOW64 to PATH:

```shell
export PATH="$HOME/wine-9.22/bin:$PATH"
```

Permanently add Wine WOW64 to PATH:

```shell
vim ~/.bashrc
export PATH="$HOME/wine-9.22/bin:$PATH"
source ~/.bashrc
```

[Read more: What is PATH and how to add content to PATH? »](/docs/faq#what-is-path-and-how-to-add-content-to-path)

## Update Wine WOW64

1. **Download the latest version**:
   ```shell
   wget https://github.com/Kron4ek/Wine-Builds/releases/latest/download/wine-latest-amd64-wow64.tar.xz
   ```

2. **Extract**:
   ```shell
   tar -xf wine-latest-amd64-wow64.tar.xz
   ```