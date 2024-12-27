---
sidebar_position: 1
slug: /box64
---

# Install Box64

[Read more: What is Box64? »](/docs/faq#what-is-Box64)

You can find the general steps for compiling and installing on RV64 systems in the official [Box64 compile/install documentation](https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md):

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

```shell
Dynarec for RISC-V With extension: I M A F D C Zba Zbb Zbc Zbs Vector (vlen: 256) PageSize:4096 Running on Unknown CPU with 8 cores
Will use hardware counter measured at 24.0 MHz emulating 3.0 GHz
Params database has 97 entries
Box64 with Dynarec v0.3.3 7e5aa3e7 built on Dec 12 2024 22:01:08
```
[Read more: What does the output of `box64 -v` mean? »](/docs/faq#what-does-the-output-of-box64--v-mean)

## Update Box64

1. **Get the latest code**:
   ```shell
   cd box64
   git pull origin main
   ```

2. **Recompile and install**:
   ```shell
   mkdir -p build
   cd build
   cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo
   make -j$(nproc)
   sudo make install
   sudo systemctl restart systemd-binfmt
   ```
