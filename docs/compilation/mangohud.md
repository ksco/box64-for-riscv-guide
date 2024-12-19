---
sidebar_position: 3
---

# Install MangoHud

The official [README.md](https://github.com/flightlessmango/MangoHud?tab=readme-ov-file#installation---build-from-source) provides general steps for Installation - Build From Source:

```shell
git clone --recurse-submodules https://github.com/flightlessmango/MangoHud.git
cd MangoHud
meson setup build -Dwith_xnvctrl=disabled # Disable xnvctrl as NVIDIA GPU statistics are not needed
sudo ninja -C build install
```

It is recommended to install all build dependencies beforehand:

```shell
sudo pacman -Syu
sudo pacman -S base-devel gcc meson ninja glslang libglvnd mesa libx11 wayland xcb-util libxkbcommon python-mako python-pip dbus appstream
```

Verify if MangoHud has been installed correctly:

```shell
mangohud --version
```

For OpenGL programs, add `--dlsym`:

```
mangohud --dlsym app
```
