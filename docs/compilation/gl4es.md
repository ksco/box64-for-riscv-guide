# Compile gl4es

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

**Usage:**

```
export LD_LIBRARY_PATH=/path/to/gl4es/lib:$LD_LIBRARY_PATH
```
