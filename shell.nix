with import <nixpkgs-unstable> { };

let
  # define packages to install with special handling for OSX
  basePackages = [
    git
    nodejs-15_x
    nodePackages.prettier
    nodePackages.pnpm
  ];

  inputs = basePackages ++ lib.optional stdenv.isLinux inotify-tools
    ++ lib.optionals stdenv.isDarwin
    (with darwin.apple_sdk.frameworks; [ CoreFoundation CoreServices ]);

  # define shell startup command
  hooks = ''
    # ENV_VARS
  '';
in
mkShell {
  buildInputs = inputs;
  shellHook = hooks;
}
