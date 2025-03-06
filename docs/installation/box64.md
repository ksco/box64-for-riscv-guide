---
sidebar_position: 1
slug: /box64
---

# Install Box64

[Read more: What is Box64? »](/docs/faq#what-is-Box64)

You can find the general steps for compiling and installing on RV64 systems in the official [Box64 compile/install documentation](https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md):

## Compiling/Installing on RV64 systems

```shell
git clone https://github.com/ptitSeb/box64
cd box64
mkdir build; cd build; cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo
make -j$(nproc)
sudo make install
sudo systemctl restart systemd-binfmt
```

[Read more: What is binfmt? »](/docs/faq#what-is-binfmt)

[Read more: Why does binfmt automatically invoke Box64? »](/docs/faq#why-does-binfmt-automatically-invoke-box64)

After installation, run the following command in the terminal:

```shell
box64 -v
```

If you see similar output, the installation was successful:

```
[BOX64] Box64 with Dynarec v0.3.3 0c0f5263 built on Mar  6 2025 15:23:14
```

[Read more: What does the output of `box64 -v` mean? »](/docs/faq#what-does-the-output-of-box64--v-mean)

## Cross-compiling/Installing for RV64 on x86_64

However, compiling on RV64 platform will take more time due to their low CPU performance, so you can try to cross compiling it on your x86_64 PC.

According to [Box64 cross-compiling document](https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md#cross-compiling):

1. Set up the cross-compiler:
   ```shell
   sudo apt install gcc-riscv64-linux-gnu
   ```
   Some dependencies such as `binutils-riscv64-linux-gnu` will be installed automatically.
   
   You can check the installation with:
   ```shell
   riscv64-linux-gnu-gcc --version
   ```
   And you should get output like this:
   ```
   riscv64-linux-gnu-gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0
   Copyright (C) 2023 Free Software Foundation, Inc.
   This is free software; see the source for copying conditions.  There is NO
   warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
   ```

2. Cross-compile:
   ```shell
   cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo -D CMAKE_C_COMPILER=riscv64-linux-gnu-gcc
   make -j$(nproc)
   ```
   
   Check the target file with `file box64`, you can find it is a `ELF 64-bit LSB executable, UCB RISC-V, RVC ...`, which means it is for RV64 platform.

   About the CMake arguments:
   - -D RV64=1: enable features related to the RISC-V 64-bit architecture.
   - -D CMAKE_BUILD_TYPE=RelWithDebInfo: the generated code will be optimized while retaining debugging information for easier troubleshooting.
   - -D CMAKE_C_COMPILER=riscv64-linux-gnu-gcc: specifies the C compiler to be used as riscv64-linux-gnu-gcc, the RISC-V cross-compiler

3. Install:
   
   Instead of `make install`, you need to copy the executable and Box64’s shared libraries manually to your RISC-V device with tools like `scp`. For example:
   ```shell
   scp path/to/box64 user@riscv-device:/path/to/destination/
   scp -r path/to/box64/x64lib user@riscv-device:/usr/lib/box64-x86_64-linux-gnu/
   ```

   If necessary, you might need to adjust file permissions on your RISC-V device to ensure the executable can be run:
   ```shell
   chmod +x /path/to/destination/box64
   ```

   Ensure that the library paths are part of the library search paths on your RISC-V device. You may also need to set the LD_LIBRARY_PATH environment variable:
   ```shell
   export LD_LIBRARY_PATH=/usr/lib/box64-x86_64-linux-gnu:$LD_LIBRARY_PATH
   ```

## Accelerate the build of Box64

### Use mold

[mold](https://github.com/rui314/mold) (A Modern Linker) is a faster drop-in replacement for existing Unix linkers. It is several times quicker than the LLVM lld linker, the second-fastest open-source linker. You can use mold to accelerate the Box64's building procedure.

You may need some more steps to use mold in building Box64. For example in Cross-compiling for RV64 on x86_64:

1. Get mold:

   Firstly, you need to get mold. You can [compile it manually](https://github.com/rui314/mold#compile-mold) or install with package manager such as `apt install mold` if available.

2. Build Box64 with mold:

   You need extra CMake arguments to use mold:

   ```shell
   cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo -D CMAKE_C_COMPILER=riscv64-linux-gnu-gcc -D WITH_MOLD=ON
   mold -run make -j$(nproc)
   ```

### Use Ccache

[Ccache](https://github.com/ccache/ccache) is a compiler cache. It speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again. Ccache is indeed suitable for incremental builds, especially for projects with frequent updates, such as Box64.

1. Get Ccache:

   You can [compile it manually](https://github.com/ccache/ccache/blob/master/doc/INSTALL.md) or install with package manager such as `apt install ccache` if available.

   Here is a typical way to build and install ccache:

   ```shell
   mkdir build
   cd build
   cmake -D CMAKE_BUILD_TYPE=Release ..
   make
   make install
   ```

2. Build Box64 with Ccache:

   You need extra CMake arguments to use Ccache:

   ```shell
   cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo -D CMAKE_C_COMPILER=riscv64-linux-gnu-gcc -D USE_CCACHE=ON
   make -j$(nproc)
   ```

## Update Box64

1. Get the latest code:
   ```shell
   cd box64
   git pull origin main
   ```

2. Recompile and install:
   ```shell
   mkdir -p build
   cd build
   cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo
   make -j$(nproc)
   sudo make install
   sudo systemctl restart systemd-binfmt
   ```
