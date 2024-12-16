# Compile gl4es

**The official** [compilation document](https://github.com/ptitSeb/gl4es/blob/master/COMPILE.md) of gl4es provides the general method for compiling and installing on the RV64 system as follows:

```
sudo apt update
sudo apt install libx11-dev
git clone https://github.com/ptitSeb/gl4es
cd gl4es
mkdir build; cd build; cmake .. -D CMAKE_BUILD_TYPE=RelWithDebInfo
make -j8
```

**Here, both the** `SPACEMIT K1` and `SPACEMIT M1` SoCs have 8 cores, so 8 parallel jobs are used to speed up the build process.

**The author's** `SPACEMIT M1` took 22 minutes to build with `make -j8`, during which you can do other things.

**After compilation, the following file will be in the project directory:** `gl4es/lib/libGL.so.1`

**Usage:**

```
LD_LIBRARY_PATH=xxxx/lib/
```
