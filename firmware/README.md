# PompyBoard Firmware

## Must read

- https://probe.rs
- https://github.com/stm32-rs/stm32f4xx-hal
- https://github.com/rust-embedded/cortex-m
- https://defmt.ferrous-systems.com
- https://docs.rust-embedded.org/book

## Setting up

1. [Setup devenv](https://devenv.sh/getting-started)
   - we use this to manage tooling (i.e. no [rustup](https://rustup.rs/))

## Commands

### Flash and run

See https://probe.rs/docs/tools/probe-rs/ for more information.

```console
cargo run --release
```

### Flash only

See https://probe.rs/docs/tools/cargo-flash/ for more information.

```console
cargo flash --release
```

### Debug

See https://probe.rs/docs/tools/cargo-embed/ for more information.

```console
cargo embed --release
```
