# Contribution Guide

> [!CAUTION]
> This page is made for contributors building pompyboard.
> From this point onward we assume you know what you are doing.

## Project overview

The pompyboard project can be roughly broken down into 5 parts:

| Part     | Location                                       | Technologies & Resources             |
| -------- | ---------------------------------------------- | ------------------------------------ |
| Firmware | [`./firmware/`](./firmware/)                   | Rust, [The Embedded Rust Book][terb] |
| Driver   | [pompyboard/OpenTabletDriver][otd-fork] (fork) | C#, [OpenTabletDriver][otd]          |
| PCB      | [`./pcb/`](./pcb/)                             | [KiCad][kicad]                       |
| 3D model | [`./3d/`](./3d/)                               | [FreeCAD][freecad]                   |
| Website  | [`./web/`](./web/)                             | [NextJS][nextjs]                     |

## Setting up development environment

1. Clone this git repository
2. [Setup devenv](https://devenv.sh/getting-started)
3. Optionally install vscode (check [`.code-workspace`](.code-workspace))
4. Ready, set, code!

## Contribution standards

### Communication, communication, communication

Remember, people can't read your mind. If you did something amazing and you want
others to care about it, explain your motivation using fact and logic so anyone
with three digit IQ can understand. You don't necessarily have to dumb things
down. Just be clear about it.

### Formatting

See [`./.vscode/settings.json`](./.vscode/settings.json) for more info.

| File type  | Formatter                                                    |
| ---------- | ------------------------------------------------------------ |
| markdown   | [prettier](https://prettier.io/)                             |
| yaml       | [prettier](https://prettier.io/)                             |
| json       | [prettier](https://prettier.io/)                             |
| javascript | [prettier](https://prettier.io/)                             |
| toml       | [taplo](https://taplo.tamasfe.dev/cli/usage/formatting.html) |
| rust       | [rustfmt](https://github.com/rust-lang/rustfmt)              |
| nix        | [nixfmt-rfc-style](https://github.com/NixOS/nixfmt)          |

### 80 character rule

Keep your text under 80 character width per line unless absolutely necessary.

### Commit

Be specific and concise. Prepend scope if necessary.

Examples:

- `remove unused files`
- `firmware: add more test cases for functionName`
- `web: bump packageName version from v6 to v9`

<!-- Links -->

[otd]: https://github.com/OpenTabletDriver/OpenTabletDriver
[otd-fork]: https://github.com/pompyboard/OpenTabletDriver
[freecad]: https://www.freecad.org/
[kicad]: https://www.kicad.org/
[terb]: https://docs.rust-embedded.org/book/
[nextjs]: https://nextjs.org/
