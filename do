#!/run/current-system/sw/bin/oil

proc dev() {
  pnpm run dev
}

proc update_deps() {
  pnpm up --interactive --latest
}

@ARGV