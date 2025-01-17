---
sidebar_position: 1
slug: /box64
---

# Install Box64

Box64 is a Linux Userspace x86_64 Emulator with a twist, targeted at ARM64, RV64 and LoongArch Linux devices, which enables running x86_64 Linux programs, including games, on non-x86_64 Linux systems such as Arm (64-bit little-endian host system required).

[Read more: What is Box64? »](/docs/faq#what-is-Box64)

Box64 is not always included in provided software sources, so you cannot install it using package manager such as `apt install box64` directly. You may need to compile and install it manually.

You can find the general steps for compiling and installing on RV64 systems in the official [Box64 compile/install documentation](https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md):

## Compiling/Installing on RV64 systems

For example, you can compile and install Box64 on Biandu RV64.

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
Dynarec for RISC-V With extension: I M A F D C Zba Zbb Zbc Zbs Vector (vlen: 256) PageSize:4096 Running on Unknown CPU with 8 cores
Will use hardware counter measured at 24.0 MHz emulating 3.0 GHz
Params database has 97 entries
Box64 with Dynarec v0.3.3 7e5aa3e7 built on Dec 12 2024 22:01:08
```

[Read more: What does the output of `box64 -v` mean? »](/docs/faq#what-does-the-output-of-box64--v-mean)

## Cross-compiling/Installing for RV64 on x86_64

However, compiling on RV64 platform will take more time due to their low CPU performance, so you can try to cross compiling it on your x86_64 PC.

For example, you can compile Box64 on Ubuntu x86_64 and install it on Biandu RV64.

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

3. Install:
   
   Instead of `make install`, you need to copy the executable and Box64’s shared libraries manually to your RISC-V device with tools like `scp`. For example:
   ```shell
   scp path/to/box64 user@riscv-device:/path/to/destination/
   scp -r path/to/Box64/x64lib user@riscv-device:/usr/lib/box64-x86_64-linux-gnu/
   ```

   If necessary, you might need to adjust file permissions on your RISC-V device to ensure the executable can be run:
   ```shell
   chmod +x /path/to/destination/box64
   ```

   Ensure that the library paths are part of the library search paths on your RISC-V device. You may also need to set the LD_LIBRARY_PATH environment variable:
   ```shell
   export LD_LIBRARY_PATH=/usr/lib/box64-x86_64-linux-gnu:$LD_LIBRARY_PATH
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
