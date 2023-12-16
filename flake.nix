{
  description = "Just a shell for now";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    devshell.url = "github:numtide/devshell";
    devshell.inputs.nixpkgs.follows = "nixpkgs";
    nuenv.url = "github:DeterminateSystems/nuenv";
    nuenv.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { nixpkgs, flake-utils, devshell, nuenv, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ devshell.overlays.default nuenv.overlays.default ];
        pkgs = import nixpkgs {
          inherit system overlays;
          config.allowUnfree = true;
        };
        update-dependencies = pkgs.nuenv.writeScriptBin {
          name = "ud";
          script = ''
            bun update --save
          '';
        };
        dev_packages = with pkgs; [
          nodejs_latest
          nodePackages_latest.dotenv-cli
          bun
          # update dependencies with nix
          update-dependencies

          # db
          surrealdb-migrations
        ];
        modules = import ./nix/modules;
        packages = import ./nix/packages { inherit pkgs; };
      in
      {
        nixosModules = modules;
        packages = packages;
        overlays.default = final: prev: {
          inherit (packages) megzari_com;
        };
        devShell = pkgs.devshell.mkShell {
          packages = dev_packages;
          env = [
            {
              name = "PUBLIC_ENVIRONMENT";
              value = "development";
            }
          ];
          commands = [
            {
              name = "clean";
              category = "dev";
              help = "Clean the package manager directory and local direnv";
              command = ''
                direnv prune
              '';
            }
            {
              name = "dev";
              category = "dev";
              help = "Start dev server locally";
              command = "bun run dev";
            }
            {
              name = "deps_update";
              category = "dev";
              help = "update dependencies";
              command = "bun update --save";
            }
            {
              name = "build";
              category = "dev";
              help = "build the project for release";
              command = "bun run build";
            }
            {
              name = "preview";
              category = "dev";
              help = "preview the release build";
              command = "npm run preview";
            }
          ];
        };
      }
    );
}
