{ config, pkgs, lib, ... }:
let
  cfg = config.services.megzari_com;
in
{
  options.services.megzari_com = {
    enable = lib.mkEnableOption (lib.mdDoc "megzari_com service");

    port = lib.mkOption {
      type = lib.types.port;
      default = 3001;
      description = lib.mdDoc "Port the megzari_com server listens on.";
    };

    environmentFile = lib.mkOption {
      type = lib.types.nullOr lib.types.path;
      description = lib.mdDoc ''
        Path to the file containing environment secrets needed to run the service.
      '';
      default = null;
      example = "config.age.secrets.ENVIRONMENT_FILE.path";
    };

    # logLevel = lib.mkOption {
    #   type = lib.types.enum [ "error" "warn" "info" "debug" "trace" ];
    #   default = "info";
    #   description = lib.mdDoc "Log level";
    # };
  };

  config = lib.mkIf cfg.enable {

   systemd.services.megzari_com = {
      description = "megzari_com server";
      after = [ "network.target" ];
      wantedBy = [ "multi-user.target" ];

      serviceConfig = {
        DynamicUser = true;
        User = "megzari_com";
        ExecStart = "${pkgs.megzari_com}/bin/megzari_com";

        Restart = "always";
        EnvironmentFile = lib.mkIf (cfg.environmentFile != null) cfg.environmentFile;

        # hardening
        AmbientCapabilities = "";
        CapabilityBoundingSet = "";
        LockPersonality = true;
        NoNewPrivileges = true;
        PrivateDevices = true;
        PrivateMounts = true;
        PrivateTmp = true;
        PrivateUsers = true;
        ProcSubset = "pid";
        ProtectClock = true;
        ProtectControlGroups = true;
        ProtectHome = true;
        ProtectHostname = true;
        ProtectKernelLogs = true;
        ProtectKernelModules = true;
        ProtectKernelTunables = true;
        ProtectProc = "invisible";
        ProtectSystem = "strict";
        RemoveIPC = true;
        RestrictAddressFamilies = [
          "AF_INET"
          "AF_INET6"
          # Required for connecting to database sockets,
          # and listening to unix socket at `cfg.settings.path`
          "AF_UNIX"
        ];
        RestrictNamespaces = true;
        RestrictRealtime = true;
        RestrictSUIDSGID = true;
        SocketBindAllow = cfg.port;
        SocketBindDeny = "any";
        SystemCallArchitectures = "native";
        SystemCallFilter = [
          "@system-service"
          "~@privileged @obsolete"
          "@pkey"
        ];
      };

      environment = {
        PORT = builtins.toString cfg.port;
        HOST = "127.0.0.1";
        PROTOCOL_HEADER = "x-forwarded-proto";
        HOST_HEADER = "x-forwarded-host";
        ADDRESS_HEADER = "X-Forwarded-For";
        XFF_DEPTH = "1";
      };
    };
  };
}
