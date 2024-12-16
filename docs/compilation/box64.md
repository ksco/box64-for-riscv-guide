# Installing Box64

You can find the general method for compiling and installing on RV64 systems in the official [Box64 compile/install documentation](https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md):

```shell
git clone https://github.com/ptitSeb/box64
cd box64
mkdir build; cd build; cmake .. -D RV64=1 -D CMAKE_BUILD_TYPE=RelWithDebInfo
make -j8
sudo make install
sudo systemctl restart systemd-binfmt
```

Here, both the `SPACEMIT K1` and `SPACEMIT M1` SoCs have 8 cores, so 8 parallel jobs are used during the build process to speed up compilation.

The author's `SPACEMIT M1` completed `make -j8` in 55 minutes. During this time, you can do other tasks.

After installation, execute the following in the terminal:

```shell
box64 -v
```

If you receive the following output, the installation is complete:

```shell
Dynarec for RISC-V With extension: I M A F D C Zba Zbb Zbc Zbs Vector (vlen: 256) PageSize:4096 Running on Unknown CPU with 8 cores
Will use hardware counter measured at 24.0 MHz emulating 3.0 GHz
Params database has 97 entries
Box64 with Dynarec v0.3.3 7e5aa3e7 built on Dec 12 2024 22:01:08
```
