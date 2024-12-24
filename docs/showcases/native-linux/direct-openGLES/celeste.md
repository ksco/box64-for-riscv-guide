---
sidebar_position: 1
---

# Celeste on Milk-V Jupiter [Linux] – Quick Start

## Requirements
- A Milk-V Jupiter board (SoC: SPACEMIT M1, 16GB LPDDR4X). This guide uses Bianbu 2.0.4 riscv64.
- A 400W ATX power supply or another supported power source with at least 20W.
- An HDMI monitor (1920x1080 recommended).
- A keyboard and mouse.
- Network access to GitHub and the official repository at https://archive.spacemit.com/.
- A legally obtained Celeste installation package from official sources (https://www.celestegame.com/).

```shell
➜  ~ neofetch
       #####             sydg@Milk-V-M1--Jupiter
      #######            -----------------------
      ##O#O##            OS: Bianbu 2.0.4 riscv64
      #######            Host: Milk-V(M1) Jupiter
    ###########          Kernel: 6.6.36
   #############         Uptime: 35 mins
  ###############        Packages: 2202 (dpkg)
  ################       Shell: zsh 5.9
 #################       Resolution: 1536x864
###################      Theme: Flat-Remix-GTK-Light-Solid [GTK3]
###################      Icons: Flat-Remix-Green-Dark [GTK3]
 #################       Terminal: /dev/pts/1
                         CPU: Spacemit X60 (8) @ 1.600GHz
                         Memory: 1040MiB / 15886MiB
```

## Install Box64
Follow the steps at [Box64 Installation Guide](../../../compilation/box64.md).

## Download and Launch Celeste from Official Sources
Use the shell to start the game. If you want to launch it by double-clicking, run it once via the shell:

```shell
cd Game/Celeste
box64 ./Celeste.bin.x86_64
```

The first launch may take a few minutes.