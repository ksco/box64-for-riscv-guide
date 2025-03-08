---
sidebar_position: 10
slug: /faq
---

# FAQ

## What is Box64?

[Box64 Official Website](https://box86.org/)

[Box64 GitHub](https://github.com/ptitSeb/box64)

Box64 is an open-source dynamic binary translator that allows running x86_64 programs on RISC-V systems. It translates x86_64 instructions into RISC-V instructions in real-time, enabling you to run software that was originally designed for the x86_64 platform on RISC-V hardware.

The main goals of Box64 are to provide a compatibility layer for running x86_64 programs on RISC-V Linux systems. Box64 is designed with performance optimizations to minimize the overhead of the translation process, providing an experience close to native execution.

Some key features of Box64 include:

- **Dynamic Binary Translation**: Translates x86_64 instructions to RISC-V instructions in real-time.
- **High Compatibility**: Supports various Linux x86_64 programs, including complex applications and games.
- **Wine Support**: Unlocks various Windows applications and games.
- **Performance Optimization**: Utilizes various optimization techniques to reduce performance loss during translation.
- **Open Source**: Open-source project licensed under MIT.

Box64 is widely applicable, especially for users and developers who want to run existing x86_64 software on RISC-V hardware.

### What does the output of `box64 /path/to/any mean?

```shell
[BOX64] Dynarec for rv64g_xtheadba_xtheadbb_xtheadbs_xtheadmempair_xtheadcondmov_xtheadmemidx_xthvector
[BOX64] Running on unknown riscv64 cpu with 4 cores, pagesize: 4096
[BOX64] Will use hardware counter measured at 3.0 MHz emulating 3.0 GHz
```

- **Dynarec for rv64g_xtheadba_xtheadbb_xtheadbs_xtheadmempair_xtheadcondmov_xtheadmemidx_xthvector** : Indicates that Box64 is using dynamic binary translation (Dynarec) to run on a RISC-V architecture with specific extensions. These extensions include `rv64g` (general-purpose 64-bit support) and various `xthead` extensions for advanced features like atomic memory pair operations, conditional moves, memory index operations, and vector extensions.
- **PageSize:4096**: Indicates that the memory page size is 4096 bytes.
- **Will use hardware counter measured at 3.0 MHz emulating 3.0 GHz**   
  This indicates that Box64 will use a hardware counter measured at 3.0 MHz to emulate a 3.0 GHz CPU performance. This is done to simulate higher performance while the actual hardware runs at a lower clock frequency.

```shell
[BOX64] Box64 with Dynarec v0.3.3 c2d02977 built on Mar  8 2025 14:06:32
```

- **Box64 with Dynarec v0.3.3**: Indicates that the Box64 version is 0.3.3 and dynamic binary translation is enabled.
- **c2d02977**: The current Git commit hash.
- **built on Mar  8 2025 14:06:32**: Indicates that Box64 was built on Mar 8, 2025, at 14:06:32.

## What is gl4es?

[gl4es GitHub](https://github.com/ptitSeb/gl4es)

gl4es is an open-source OpenGL to OpenGL ES translation library. It allows running OpenGL applications on platforms that only support OpenGL ES. By converting OpenGL calls to OpenGL ES calls, gl4es enables you to run traditional OpenGL applications on mobile devices, embedded systems, and other hardware that only supports OpenGL ES.

Key features of gl4es include:

- **Compatibility**: Supports most OpenGL 1.x applications and provides partial OpenGL 2.x functionality.
- **Performance Optimization**: Minimizes performance loss during the translation process through various optimization techniques.
- **Cross-Platform Support**: Supports multiple operating systems and hardware platforms, including Android, Linux, and other embedded systems.
- **Open Source**: Open-source project licensed under MIT.

gl4es is widely applicable, especially for users and developers who want to run existing OpenGL software on devices that only support OpenGL ES.

⚠ **gl4es is not perfect and can only provide limited simulation of OpenGL.**

## What is OpenGL?

[OpenGL Official Website](https://www.opengl.org/)

OpenGL (Open Graphics Library) is a cross-platform application programming interface (API) for rendering 2D and 3D graphics. It is widely used in game development, CAD, virtual reality, and scientific visualization. OpenGL provides a rich set of functions for drawing complex graphics and handling images.

## What is OpenGL ES?

[OpenGL ES Official Website](https://www.khronos.org/opengles/)

OpenGL ES (OpenGL for Embedded Systems) is a subset of OpenGL designed for embedded systems such as mobile devices, tablets, and gaming consoles. It simplifies OpenGL's functionality to accommodate the performance and resource constraints of embedded devices. OpenGL ES is the standard for mobile graphics development and is widely used on Android and iOS platforms.

⚠ **Many RISC-V development board integrated graphics support only OpenGL ES.**

## What is binfmt?

[Kernel Support for miscellaneous Binary Formats (binfmt_misc)](https://www.kernel.org/doc/html/latest/admin-guide/binfmt-misc.html)

binfmt (Binary Format) is a feature of the Linux kernel that allows the system to recognize and handle different types of executable file formats. By configuring binfmt, the system can automatically invoke the appropriate interpreter or translator to run specific executable file formats.

### Why does binfmt automatically invoke Box64?

By configuring binfmt, the system can recognize the x86_64 executable file format and automatically invoke Box64 to translate and execute these files. When you run an x86_64 program on a RISC-V system, binfmt detects the program's format and uses Box64 for dynamic binary translation, enabling the program to run on RISC-V hardware. This mechanism simplifies running software across different architectures without manually specifying the translator.

Box64's installation script automatically configures binfmt support. But one still need to restart the `systemd-binfmt` service to apply the new configuration for the first installation:

```shell
sudo systemctl restart systemd-binfmt
```

## What is PATH?

PATH is an environment variable that tells the operating system where to look for executable files. When you enter a command in the terminal, the operating system searches the directories listed in PATH for the corresponding executable file.

### Why add content to PATH?

Sometimes, the software you install is not in the default executable file directories. To conveniently use these software, you can add their paths to PATH, allowing you to run them from anywhere without specifying the full path.
