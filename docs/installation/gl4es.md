---
sidebar_position: 2
slug: /gl4es
---

# Compile gl4es

[Read more: What is gl4es? »](/docs/faq#what-is-gl4es)

The official [compilation guide](https://github.com/ptitSeb/gl4es/blob/master/COMPILE.md) for gl4es provides the general steps for compiling and installing on an RV64 system:

```
sudo apt update
sudo apt install libx11-dev
git clone https://github.com/ptitSeb/gl4es
cd gl4es
mkdir build; cd build; cmake .. -D CMAKE_BUILD_TYPE=RelWithDebInfo
make -j$(nproc)
```

After compilation, the following file will be available in the project directory: `gl4es/lib/libGL.so.1`

Usage:

```
export LD_LIBRARY_PATH=/path/to/gl4es/lib:$LD_LIBRARY_PATH
```

[Read more: What is PATH and how to add content to PATH? »](/docs/faq#what-is-path-and-how-to-add-content-to-path)

## Update gl4es

1. **Get the latest code**:
   ```shell
   cd gl4es
   git pull origin master
   ```

2. **Recompile and install**:
   ```shell
   mkdir -p build
   cd build
   cmake .. -D CMAKE_BUILD_TYPE=RelWithDebInfo
   make -j$(nproc)
   ```