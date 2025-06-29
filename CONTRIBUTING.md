# Contribution Guide

> [!CAUTION]
> This page is made for contributors building pompyboard.
> From this point onward we assume you know what you are doing.

## Project overview

The pompyboard project can be roughly broken down into 5 parts:

| Part     | Location                                       |
| -------- | ---------------------------------------------- |
| Firmware | [`./firmware/`](./firmware/)                   |
| Driver   | [pompyboard/OpenTabletDriver][otd-fork] (fork) |
| PCB      | [`./pcb/`](./pcb/)                             |
| 3D model | [`./3d/`](./3d/)                               |
| Website  | [`./web/`](./web/)                             |

## Setting up development environment

1. Clone this git repository
2. [Setup devenv](https://devenv.sh/getting-started)
3. Optionally install vscode
4. Open `README.md` file of the sub-project you want to work on
   (e.g. [`./firmware/README.md`](./firmware/README.md)) and go from there.

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

Keep your text under 80 characters and rust code under 100 characters per line
unless absolutely necessary.

### Commit

Be specific and concise. Prepend scope if necessary.

Examples:

- `remove unused files`
- `firmware: add more test cases for functionName`
- `web: bump packageName version from v6 to v9`

<!-- Links -->

[otd-fork]: https://github.com/pompyboard/OpenTabletDriver
