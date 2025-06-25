{ pkgs, ... }:

{
  packages = with pkgs; [
    nixd # Nix LSP
    nixfmt-rfc-style # Nix formatter

    probe-rs # debugging toolset and library for debugging embedded ARM and RISC-V
  ];

  languages = {
    # https://devenv.sh/supported-languages/rust/
    rust = {
      enable = true;
      channel = "nightly";
      targets = [ "thumbv7em-none-eabi" ];
    };
  };
}
