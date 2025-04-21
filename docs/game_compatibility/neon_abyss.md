# Neon Abyss

## Compatibility report

### Tested on

[Milk-V Jupiter](/docs/hardwares#milk-v-jupiter-soc-spacemit-m1)
 with AMD Radeon RX 550

### Box64 version (commit)

Box64 [ptitSeb/box64@6d7af867](https://github.com/ptitSeb/box64/tree/6d7af867)

### Game screenshot

![screenshot](img/Neon_Abyss_0.png)
![screenshot](img/Neon_Abyss_1.png)
![screenshot](img/Neon_Abyss_2.png)

### Game running log

```shell
[BOX64] Box64 with Dynarec v0.3.5 6d7af867 built on Apr  6 2025 20:28:41
[BOX64] Dynarec for rv64gv_zba_zbb_zbc_zbs_zvl256
[BOX64] Running on Spacemit(R) X60 with 8 cores, pagesize: 4096
[BOX64] Will use hardware counter measured at 24.0 MHz emulating 3.0 GHz
[BOX64] Using bash "/home/rurumuri/ourstorybegin/box64/tests/box64-bash"
[BOX64] Didn't detect 48bits of address space, considering it's 39bits
[BOX64] Counted 49 Env var
[BOX64] BOX64 trying to Preload /usr/local/$LIB/mangohud/libMangoHud_shim.so 
[BOX64] Library search path: 
[BOX64] Binary search path: ./:bin/:/home/rurumuri/ourstorybegin/wine/wine-10.3-amd64-wow64/bin/:/home/rurumuri/ourstorybegin/wine/wine-10.3-amd64-wow64/bin/:/usr/local/bin/:/usr/bin/:/bin/:/usr/local/sbin/:/usr/lib/jvm/default/bin/:/usr/bin/site_perl/:/usr/bin/vendor_perl/:/usr/bin/core_perl/:/usr/lib/rustup/bin/
[BOX64] Looking for ./NeonAbyss.x86_64
[BOX64] BOX64ENV: Variables overridden via env and/or RC file:
        BOX64_BASH=/home/rurumuri/ourstorybegin/box64/tests/box64-bash
[BOX64] Rename process to "NeonAbyss.x86_64"
[BOX64] Warning, cannot pre-load /usr/local/$LIB/mangohud/libMangoHud_shim.so
[BOX64] Using native(wrapped) libdl.so.2
[BOX64] Using native(wrapped) librt.so.1
[BOX64] Using emulated /home/rurumuri/ourstorybegin/box64/x64lib/libstdc++.so.6
[BOX64] Using native(wrapped) libm.so.6
[BOX64] Using emulated /home/rurumuri/ourstorybegin/box64/x64lib/libgcc_s.so.1
[BOX64] Using native(wrapped) libpthread.so.0
[BOX64] Using native(wrapped) libc.so.6
[BOX64] Using native(wrapped) ld-linux-x86-64.so.2
[BOX64] Using native(wrapped) libutil.so.1
[BOX64] Using native(wrapped) libbsd.so.0
[BOX64] Using native(wrapped) libX11.so.6
[BOX64] Using native(wrapped) libxcb.so.1
[BOX64] Using native(wrapped) libXau.so.6
[BOX64] Using native(wrapped) libXdmcp.so.6
[BOX64] Using native(wrapped) libXext.so.6
[BOX64] Using native(wrapped) libXcursor.so.1
[BOX64] Using native(wrapped) libXfixes.so.3
[BOX64] Using native(wrapped) libXrender.so.1
[BOX64] Using native(wrapped) libXinerama.so.1
[BOX64] Using native(wrapped) libXi.so.6
[BOX64] Using native(wrapped) libXrandr.so.2
[BOX64] Using native(wrapped) libXss.so.1
[BOX64] Using native(wrapped) libXxf86vm.so.1
[BOX64] Using native(wrapped) libGL.so.1
[2025-04-18 13:10:49.492] [MANGOHUD] [error] [cpu.cpp:552] Could not find cpu temp sensor location
[BOX64] Using native(wrapped) libudev.so.1
Set current directory to /home/rurumuri/games/Neon Abyss
Found path: /home/rurumuri/games/Neon Abyss/NeonAbyss.x86_64
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/MonoBleedingEdge/x86_64/libmonobdwgc-2.0.so
[BOX64] MonoBleedingEdge detected, disable Dynarec BigBlock and enable Dynarec StrongMem
Mono path[0] = '/home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Managed'
Mono config path = '/home/rurumuri/games/Neon Abyss/NeonAbyss_Data/MonoBleedingEdge/etc'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libGalaxy64.so
Preloaded 'libGalaxy64.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libGalaxyCSharpGlue.so
Preloaded 'libGalaxyCSharpGlue.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libfmod.so
[BOX64] Warning: Weak Symbol __gmon_start__ not found, cannot apply R_X86_64_JUMP_SLOT @0x3f05378358 (0x22306)
Preloaded 'libfmod.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libfmodL.so
[BOX64] Warning: Weak Symbol __gmon_start__ not found, cannot apply R_X86_64_JUMP_SLOT @0x3f063ab360 (0x230c6)
Preloaded 'libfmodL.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libfmodstudio.so
[BOX64] Warning: Weak Symbol __gmon_start__ not found, cannot apply R_X86_64_JUMP_SLOT @0x3f07377a38 (0x1edc6)
Preloaded 'libfmodstudio.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libfmodstudioL.so
[BOX64] Warning: Weak Symbol __gmon_start__ not found, cannot apply R_X86_64_JUMP_SLOT @0x3f08430a58 (0x1f0d6)
Preloaded 'libfmodstudioL.so'
[BOX64] Using emulated /home/rurumuri/games/Neon Abyss/NeonAbyss_Data/Plugins/x86_64/libresonanceaudio.so
Preloaded 'libresonanceaudio.so'
Display 0 'U27N3R 27"': 1920x1080 (primary device).
PlayerPrefs - Creating folder: /home/rurumuri/.config/unity3d/Veewo
PlayerPrefs - Creating folder: /home/rurumuri/.config/unity3d/Veewo/Neon Abyss
Logging to /home/rurumuri/.config/unity3d/Veewo/Neon Abyss/Player.log
```

### Rendering methods

```shell
OpenGL
```

### Extra information

[Steam](https://store.steampowered.com/app/788100/_/)

[PCGameWiki](https://www.pcgamingwiki.com/wiki/Neon_Abyss)

### Advanced Tips

> TBD