# Running and Playing Celeste (v1.4.0.0) on Milk-V Jupiter Using Box64 [Linux]—Beginner's Guide

## Requirements

- A Milk-V Jupiter development board:
  The model used by the author is: `SoC: SPACEMIT M1` `Memory: 16GB LPDDR4X`. Currently, this beginner's guide is considered compatible with all versions of the Milk-V Jupiter development board.
  The author's system is `Bianbu 2.0.4 riscv64`. For detailed information, see the table below:

  ```shell
    ➜  ~ neofetch
            #####           sydg@Milk-V-M1--Jupiter
           #######          -----------------------
           ##O#O##          OS: Bianbu 2.0.4 riscv64
           #######          Host: Milk-V(M1) Jupiter
         ###########        Kernel: 6.6.36
        #############       Uptime: 35 mins
       ###############      Packages: 2202 (dpkg)
       ################     Shell: zsh 5.9
      #################     Resolution: 1536x864
    #####################   Theme: Flat-Remix-GTK-Light-Solid [GTK3]
    #####################   Icons: Flat-Remix-Green-Dark [GTK3]
      #################     Terminal: /dev/pts/1
                            CPU: Spacemit X60 (8) @ 1.600GHz
                            Memory: 1040MiB / 15886MiB
  ```

* A power supply for the Milk-V Jupiter development board: The author uses Cooler Master’s ATX 24-pin 400W power supply. Using a Xiaomi smart socket, the power consumption from standby to full load was measured between 10W-15W. If you use other supported [power supply methods](https://milkv.io/zh/docs/jupiter/getting-started/hardware) for Milk-V Jupiter, please ensure a minimum power supply of 20W.
* An HDMI monitor: A monitor with a resolution of 1920x1080 is sufficient. Milk-V Jupiter will not output higher resolution images on monitors with resolutions exceeding this.
* A set of keyboard and mouse.
* A network environment that can access GitHub and the [official spacemit repository](https://archive.spacemit.com/).
* A Celeste installation package obtained from [official channels](https://www.celestegame.com/).

## Installing [Box64](https://github.com/ptitSeb/box64?tab=readme-ov-file)

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

If you receive the following output, the installation is complete, and you can proceed to the next step:

```shell
Dynarec for RISC-V With extension: I M A F D C Zba Zbb Zbc Zbs Vector (vlen: 256) PageSize:4096 Running on Unknown CPU with 8 cores
Will use hardware counter measured at 24.0 MHz emulating 3.0 GHz
Params database has 97 entries
Box64 with Dynarec v0.3.3 7e5aa3e7 built on Dec 12 2024 22:01:08
```

## Downloading and Launching Celeste from [Official Channels](https://www.celestegame.com/)

Use shell commands to launch the game. If you want to directly enter the game folder and double-click to start the game, you need to launch the game once using shell commands first.

Launch the game using shell commands:

```shell
cd Game/Celeste
box64 ./Celeste.bin.x86_64
```

The first launch may take a few minutes. 
