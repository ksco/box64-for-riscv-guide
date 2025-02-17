---
sidebar_position: 6
slug: /flash
---

# Install Flash Player

Ensure you have installed both Box64 and Wine WOW64.

[Read more: What is Box64? »](/docs/faq#what-is-Box64)

## Install Box64

[Refer to this document: Install Box64 »](/docs/box64)

## Install Wine WOW64

[Refer to this document: Install Box64 »](/docs/box64)

## Install Flash Player

Download the latest Flash Player Installer from [Clean Flash Player »](https://github.com/TCOTC/CleanFlash_Installer).

```shell
wget https://github.com/TCOTC/CleanFlash_Installer/releases/download/34.0.0.323/CleanFlash_34.0.0.323_Installer.exe
```

Run the Flash Player Installer using Wine:

```shell
box64 wine CleanFlash_34.0.0.323_Installer.exe
# or
wine CleanFlash_34.0.0.323_Installer.exe # if your system is configured with binfmt, you can run it directly
```

[Read more: What is binfmt? »](/docs/faq#what-is-binfmt)

[Read more: Why does binfmt automatically invoke Box64? »](/docs/faq#why-does-binfmt-automatically-invoke-box64)

A GUI installation wizard will then automatically appear to guide you through the installation process. Make sure to select all optional components to install everything.

Do not install the DEBUG VERSION.

Once the installation is complete, an error message might appear; simply click QUIT.

The location of Flash Player is:

```bash
/home/debian/.wine/drive_c/Program Files (x86)/Flash Player/flashplayer_sa.exe
```

Navigate to the directory and run Flash Player with Wine:

```bash
cd /home/debian/.wine/drive_c/Program Files (x86)/Flash Player
wine flashplayer_sa.exe
```