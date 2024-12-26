---
sidebar_position: 4
slug: /faudio
---

# Install FAudio

Some games (e.g., Celeste) may depend on FAudio. If your distribution does not provide it, you can compile and install it yourself.

The official [README](https://github.com/FNA-XNA/FAudio/) for FAudio provides general steps for building FAudio:

```shell
git clone https://github.com/FNA-XNA/FAudio.git
cd FAudio
mkdir build && cd build
cmake ..
make -j$(nproc)
sudo make install
```

## Update FAudio

1. **Get the latest code**:
   ```shell
   cd FAudio
   git pull origin main
   ```

2. **Recompile and install**:
   ```shell
   mkdir -p build
   cd build
   cmake ..
   make -j$(nproc)
   sudo make install
   ```