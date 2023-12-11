{ pkgs }:
let
  pin = pkgs.lib.importJSON ./pin.json;
  node_modules = with pkgs; stdenv.mkDerivation {
    pname = "megzari.com-node_modules";
    version = "0.0.1";
    impureEnvVars = lib.fetchers.proxyImpureEnvVars
      ++ [ "GIT_PROXY_COMMAND" "SOCKS_SERVER" ];
    src = ../../.;
    nativeBuildInputs = [ bun ];
    # buildInputs = [ nodejs-slim_latest ];
    dontConfigure = true;
    buildPhase = ''
      bun install --no-progress --frozen-lockfile
    '';
    installPhase = ''
      mkdir -p $out/node_modules

      cp -R ./node_modules $out
    '';
    outputHash = if stdenv.isLinux then pin.linux else pin.darwin;
    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
  };
  megzari_com = with pkgs; stdenv.mkDerivation {
    pname = "megzari.com";
    version = "0.0.1";
    src = ../../.;
    nativeBuildInputs = [ makeBinaryWrapper ];
    buildInputs = [ bun ];

    configurePhase = ''
      runHook preConfigure

      # node modules need to be copied to substitute for reference
      # substitution step cannot be done before otherwise
      # nix complains about unallowed reference in FOD
      cp -R ${node_modules}/node_modules .
      # bun installs .bin package with a usr bin env ref to node
      # replace any ref for bin that are used
      substituteInPlace node_modules/.bin/vite \
        --replace "/usr/bin/env node" "${nodejs-slim_latest}/bin/node"

      runHook postConfigure
    '';

    env.UNSTRUCTURED_API_KEY = "REPLACE_ME_UNSTRUCTURED_API_KEY";
    env.HUGGINGFACE_API_TOKEN = "REPLACE_ME_HUGGINGFACE_API_TOKEN";

    buildPhase = ''
      runHook preBuild

      bun run build

      runHook postBuild
    '';

    installPhase = ''
      runHook preInstall

      mkdir -p $out/bin
      ln -s ${node_modules}/node_modules $out
      cp -R ./build/* $out

      # bun is referenced naked in the package.json generated script
      makeBinaryWrapper ${bun}/bin/bun $out/bin/megzari_com \
        --prefix PATH : ${lib.makeBinPath [ bun ]} \
        --add-flags "run --prefer-offline --no-install --cwd $out start"

      runHook postInstall
    '';
  };
in
{
  inherit megzari_com;
}
