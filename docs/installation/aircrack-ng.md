---
sidebar_position: 7
slug: /aircrack-ng
---

# Install Aircrack-ng

Install dependencies

```shell
sudo apt install build-essential libssl-dev libgcrypt20-dev gawk binutils pkg-config
```

Download

```shell
git clone https://github.com/aircrack-ng/aircrack-ng
cd aircrack-ng
```

Compile

```shell
autoreconf -i
./configure --with-experimental
make -j$(nproc)
sudo make install
ldconfig
```
