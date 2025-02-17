---
sidebar_position: 4
slug: /wow64
---

# Install Wine WOW64

Download the latest WOW64 prebuilt build from this [location](https://github.com/Kron4ek/Wine-Builds/releases), using the "Wine 10.0" version as an example:

Download:

```shell
wget https://github.com/Kron4ek/Wine-Builds/releases/download/10.0/wine-10.0-amd64-wow64.tar.xz
```

Extract:

```shell
tar -xf wine-10.0-amd64-wow64.tar.xz
```

Usage:

```shell
box64 ./wine-10.0-amd64-wow64.tar.xz/bin/wine [Windows executable]
```

Temporarily add Wine WOW64 to PATH:

```shell
export PATH="$HOME/wine-10.0-amd64-wow64/bin:$PATH"
```

Permanently add Wine WOW64 to PATH:

```shell
vim ~/.bashrc
export PATH="$HOME/wine-10.0-amd64-wow64/bin:$PATH"
source ~/.bashrc
```

Configure Wine environment and install wine-mono

```shell
winecfg
```

[Read more: What is PATH and how to add content to PATH? »](/docs/faq#what-is-path)
