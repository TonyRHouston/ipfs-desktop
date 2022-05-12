# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v0.20.6] - 2021-05-12

* fix: return error instead of throw by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/2074
* README: Update link that points to ipfs-shipyard repository by @schuelermine in https://github.com/ipfs/ipfs-desktop/pull/2119
* docs: Add repo.lock troubleshooting steps to readme by @SgtPooki in https://github.com/ipfs/ipfs-desktop/pull/2111
* feat: Add app&webui ready/load metrics by @SgtPooki in https://github.com/ipfs/ipfs-desktop/pull/2126


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.5...v0.20.6

## [v0.20.5] - 2021-04-09

- IPFS: [`go-ipfs v0.12.2`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.2)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

* chore: electron 18  and go-ipfs 0.12.2 by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2098


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.4...v0.20.5

## [v0.20.4] - 2021-03-28

- IPFS: [`go-ipfs v0.12.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.0)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

* fix: migrating to less expensive config in `Swarm.ConnMgr` by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2055
* fix: detect invalid or corrupted repository by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/2067
* fix: static message when ipfs daemon dies on start by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2078
* refactor: remove 'download' functionality by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/2061
* chore: remove unused and update dependencies by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/2047


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.3...v0.20.4

## [v0.20.3] - 2021-03-21

- IPFS: [`go-ipfs v0.12.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.0)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

* fix: ipfs-companion rpc api in go-ipfs <0.13 by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2054


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.2...v0.20.3

## [v0.20.2] - 2021-03-15

- IPFS: [`go-ipfs v0.12.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.0)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

* docs: 0.20.x by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2012
* fix: ux of notification after file import by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2013
* refactor: remove checkCorsConfig  by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/1955
* docs: debian 11 by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2033
* feat: add known webui addresses to CORS conf by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/1956
* fix: pass ipfs config show error by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2032
* fix: proper catch-all daemon startup errors by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2030


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.1...v0.20.2

## [v0.20.1] - 2021-03-07

- IPFS: [`go-ipfs v0.12.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.0)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

* fix: migration fallback to ipfs by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2008
* refactor: remove mocha/chai, fix e2e on windows by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2007
* fix: increase free port lookup range by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2010
* fix: gui error report title by @lidel in https://github.com/ipfs/ipfs-desktop/pull/2011


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.20.0...v0.20.1

## [v0.20.0] - 2021-03-01

- IPFS: [`go-ipfs v0.12.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.12.0) ✨
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)

This release includes UI that will inform user when time-consuming migration needs to be run as part of IPFS node update:

![Screenshot 2022-02-25 at 17 51 21](https://user-images.githubusercontent.com/5447088/155754805-79c89a8d-87a9-456e-b43c-1fa3deb7fedd.png)

* feat: show repo migration (go-ipfs 0.12.0) by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/1982
* fix: remove default lower bound from gateway and api port lookup by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/1991
* chore: electron 17.1 and related deps by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1998
* chore(i18n): locale sync bf2bfe54f48ccb0d5ec896a364b5d6eabe9b4155


**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.19.3...v0.20.0

## [v0.19.2] - 2021-02-14

* fix: macos autoupdate flow by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1979

**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.19.1...v0.19.2

## [v0.19.1] - 2021-02-14

- IPFS: [`go-ipfs v0.11.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.11.0)
- UI: [`v2.15.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)  ✨

Electron 17 and a bunch of bugfixes.
WebUI users may notice that it is now possible to set up [permanent peering with other nodes](https://github.com/ipfs/ipfs-webui/releases/v2.14.0):
> [![](https://user-images.githubusercontent.com/157609/152223529-ff7a2c47-3650-4a12-946f-9e4f44bb911c.png)](https://github.com/ipfs/ipfs-webui/releases/v2.14.0)

* feat: ipfs-webui v2.13 → v2.15.0
  - mostly bugfixes, but includes permanent peering support
  - see release notes for: [v2.14](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.14.0)+[v2.15](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.15.0)
* feat: electron 17 and playwright e2e tests by @hacdias and @lidel #1937
* feat: better handling of 'unresponsive' event by @hacdias in #1952
* fix: os-native add-to-ipfs on Windows and macOS  by @hacdias in https://github.com/ipfs/ipfs-desktop/pull/1976
* fix: dialog when IPFS_PATH/api port is offline by @lidel in 13de17403fcd1892a0830b3da0199d116a14d899
* fix: electron version  by @hacdias in #1965
* fix: add .manualCheckForUpdates before tray startup by @hacdias in #1950
* refactor: remove deprecated "ipfs on PATH" feature by @hacdias in  #1948
* chore: uninstall npm on ipfs  by @hacdias in #1947
* chore(i18n): locale sync by @lidel in 50c31bb8f09ea91b268b0a1c3189af105764025c
* chore: update dependencies by @lidel in  #1959, fa17bdd06ffaea0c0411d8f8a60d6d61e1afc5f7 and @hacdias  in #1899, #1960



**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.19.0...v0.19.1

## [v0.18.0] - 2021-12-13

This is the same as [0.18.0](https://github.com/ipfs/ipfs-desktop/releases/tag/v0.18.0), but with auto update fix for macOS.

**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.18.0...v0.18.1

## [v0.18.0] - 2021-12-13

- IPFS: [`go-ipfs v0.11.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.11.0) ✨
- UI: [`v2.13.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.13.0)

* <del>fix: remove zip for Squirrel.Mac by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1932</del> (reverted in 0.18.1)
* feat: go-ipfs 0.11.0 by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1936
* chore: release prep by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1938

**Full Changelog**: https://github.com/ipfs/ipfs-desktop/compare/v0.17.0...v0.18.0

## [v0.17.0] - 2021-10-05

- IPFS: [`go-ipfs v0.10.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.10.0)
- UI: [`v2.13.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.13.0)

* feat: go-ipfs 0.10.0 by @guseggert in https://github.com/ipfs/ipfs-desktop/pull/1896
* fix(ci): cache ipfs-webui by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1913
* fix: analytics storage_path by @milahu in https://github.com/ipfs/ipfs-desktop/pull/1900
* chore: default `--agent-version-suffix` and `--routing` by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1914
* chore: electron v13.5.1 and other deps by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1915
* chore: switch to i18next-fs-backend by @lidel in https://github.com/ipfs/ipfs-desktop/pull/1916

## [v0.16.3] - 2021-09-08

- IPFS: [`go-ipfs v0.9.1`](https://github.com/ipfs/go-ipfs/releases/tag/v0.9.1)
- UI: [`v2.13.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.13.0)

### 🛠 Fixes and Maintenance

- feat: ipfs-webui v2.13.0 (#1903)
- feat: allow to show devtools (#1901)
- chore: update non-major dependencies (#1895)
- fix: use context bridge (#1894)
- docs: FreeBSD Linux Binary Compatibility (#1878)
- docs: debian 11 troubleshooting (b8044741aeb365f773f9c6f78dadbd26e1083963)
- chore: update maintainer AUR (#1880)
- chore(i18n):  locale sync

## [v0.16.2] - 2021-07-23

- IPFS: [`go-ipfs v0.9.1`](https://github.com/ipfs/go-ipfs/releases/tag/v0.9.1)
- UI: [`v2.12.4`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.4)

### 🛠 Fixes and Maintenance

- fix: go-ipfs 0.9.1 (#1876)
- chore: electron v13.1.7 (43da717df49812cbddd067e8521da42d849b8f6c)
- chore(i18n):  locale sync

## [v0.16.1] - 2021-07-06

- IPFS: [`go-ipfs v0.9.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.9.0)
- UI: [`v2.12.4`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.4)

### 🛠 Fixes and Maintenance

- fix: ipfs-webui v2.12.4 (#1868)
- fix: dont pin when adding to mfs (#1860)
- fix: show Files after import on windows (#1853)
- fix: choco publishing
- chore(i18n):  locale sync

## [v0.16.0] - 2021-06-23

- IPFS: [`go-ipfs v0.9.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.9.0)
- UI: [`v2.12.3`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.3)

### ✨ Features

- go-ipfs 0.9.0 ([RELEASE NOTES](https://github.com/ipfs/go-ipfs/releases/tag/v0.9.0))

### 🛠 Fixes and Maintenance

- electron 13.x (+ new electron-builder/updater)
- chore(i18n):  locale sync

## [v0.15.1] - 2021-06-17

- IPFS: [`go-ipfs v0.8.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.8.0)
- UI: [`v2.12.3`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.3)

### 🛠 Fixes and Maintenance

- fix: ipfs-webui  [`v2.12.3`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.3)
- fix: useful errors on download fail (#1843)
- chore(i18n): locale sync

## [v0.15.0] - 2021-05-04

- IPFS: [`go-ipfs v0.8.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.8.0)
- UI: [`v2.12.2`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.2) 

### ✨ Features

- ipfs webui v2.12 with basic support for remote pinning (#1807)
  👉️ see [RELEASE NOTES for v2.12](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.12.0) for details
- electron 12.x (#1807)

### 🛠 Fixes and Maintenance

- fix: ipfs-on-path should never fail on boot (#1769)
- docs(readme): fix scoop install steps (#1808) 
- docs: promote AppImage for Linux (#1776) 
- chore: switch actions to v2 (#1708) 
- chore(i18n): i18next update and locale sync


## [v0.14.0] - 2021-01-02

- IPFS: [`go-ipfs v0.8.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.8.0)
- UI: [`v2.11.4`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.11.4)

### ✨ Features

- go-ipfs 0.8.0 (#1715 +  [RELEASE NOTES](https://github.com/ipfs/go-ipfs/releases/tag/v0.8.0))
- electron 11.x (#1715)
- improve updating ux (#1758) 
- enable ipns over pubsub via settings menu (#1739)
- disable/enable gc via settings menu (#1740)
- enable pubsub via settings menu (#1735)

### 🛠 Fixes and Maintenance

- fix: timeout during checkIfAddrIsDaemon (#1750)
- fix: default Open WebUI at Launch to true (#1757) 
- fix: autoupdate only on supported platforms (#1698) 
- fix:  specify content-type in prompt template (#1729)
- fix: use correct config path during development (#1690) 
- fix(mac): refresh file list after import (#1767)
- refactor: tray click events (#1766)
- chore: deprecate ipfs-on-path (#1768) and npm-on-ipfs (17578745addb6c665b0c3a3e50499d3967c8efb5)
- docs: rework readme (#1703)
- chore: automated Chocolatey publishing (#1697)
- docs: Homebrew instructions (#1727) 
- docs: brew cask has been deprecated (#1732) 
- chore(i18n): locale sync (https://github.com/ipfs-shipyard/ipfs-desktop/commit/2f1631d2a1f83b98a2ef79bd2a8b37f9696b5a46)


## [v0.13.2] - 2020-10-12
- Web UI: [`v2.11.4`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.11.4)
- IPFS: [`go-ipfs v0.7.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.7.0)

### ✨ Features
- Use `dweb.link` gateway when shareable link is copied to clipboard
- Preserve filename when a single file is shared (screenshot, quick import)

### 🛠 Fixes and Maintenance
- fix: windows auto-update (#1679)
- feat(ci): automated Snapcraft publishing (#1678)
- fix: openItem errors (#1687)
- feat: screenshot improvements (#1689)
- fix: OS integrations for quick file import (#1691)
- fix(windows): autoInstallOnAppQuit (#1682)

#### :mega: Windows users may need to update manually

Below PRs fixed autoupdate issues on Windows platform, however older versions may still struggle to update.

-  fix: windows auto-update (#1679) 
-  fix(windows): autoInstallOnAppQuit (#1682) 

**If your node is unable to apply update to this version, please install [IPFS-Desktop-Setup-0.13.2.exe](https://github.com/ipfs-shipyard/ipfs-desktop/releases/download/v0.13.2/IPFS-Desktop-Setup-0.13.2.exe) manually.**
From now on, Windows updates should work as expected.

## [v0.13.1] - 2020-10-12
This release is exactly the same as [v0.13.2].
It exists so people can test Windows autoupdate fix on their own.

## [v0.13.0] - 2020-10-08
- Web UI: [`v2.11.4`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.11.4)
- IPFS: [`go-ipfs v0.7.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.7.0)

### ✨ Features
- webui v2.11.4 ([RELEASE NOTES](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.11.4))
- go-ipfs v0.7.0 ([CHANGELOG](https://github.com/ipfs/go-ipfs/blob/master/CHANGELOG.md#v070-2020-09-22))
- synchronized and added new locales

### 🛠 Fixes and Maintenance
- electron 9 (#1641, 42b069b)
- fix: ensure small asar archive (#1660)
- fix: uppercase Discovery.MDNS.enabled in default config (#1632)
- ci: move to GitHub Actions (#1657)

### 📣 Windows updates may be delayed
Windows 10 users may need to wait a bit longer to see this release.
We are working on a fix.

## [v0.12.2] - 2020-07-17
- Web UI: [`v2.10.2`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.10.2)
- IPFS: [`go-ipfs v0.6.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.6.0)

### ✨ Features
- feat: ipfs-webui v2.10.2

## [v0.12.1] - 2020-07-07
- Web UI: [`v2.9.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.9.0)
- IPFS: [`go-ipfs v0.6.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.6.0)

### ✨ Features
- feat: ipfs-webui v2.9.0 (#1531)
- feat: go-ipfs 0.6 (#1526)

### 🛠 Fixes and Maintenance

- fix: windows auto-update feature when selecting install for all users (#1556)
## [v0.12.0] - 2020-07-06
- Web UI: [`v2.9.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.9.0)
- IPFS: [`go-ipfs v0.6.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.6.0)

### 🛠 Fixes and Maintenance

- feat: ipfs-webui v2.9.0 (#1531)
- feat: go-ipfs 0.6 (#1526)
- fix: windows auto-update feature when selecting install for all users (#1556)
## [v0.11.4] - 2020-05-21
- Web UI: [`v2.8.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.8.0)
- IPFS: [`go-ipfs v0.5.1`](https://github.com/ipfs/go-ipfs/releases/tag/v0.5.1)

### 🛠 Fixes and Maintenance

- chore: update dependencies
## [v0.11.3] - 2020-05-18
- IPFS: [`go-ipfs v0.5.1`](https://github.com/ipfs/go-ipfs/releases/tag/v0.5.1)

### 🛠 Fixes and Maintenance

- chore: update dependencies
## [v0.11.2] - 2020-04-30
- Web UI: [`v2.8.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.8.0) ✨
- IPFS: [`go-ipfs v0.5.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.5.0) ✨ 

### 🛠 Fixes and Maintenance

- fix: open directory from webui (https://github.com/ipfs-shipyard/ipfs-desktop/pull/1472)
## [v0.11.1] - 2020-04-29
- Web UI: [`v2.8.0`](https://github.com/ipfs-shipyard/ipfs-webui/releases/v2.8.0) ✨
- IPFS: [`go-ipfs v0.5.0`](https://github.com/ipfs/go-ipfs/releases/tag/v0.5.0) ✨ 

### 🚨 Breaking Changes

- fix: remove old auto launch method (#1416)
- fix: ipfs daemon flags (#1437)

### ✨  Features

- feat: support for go-ipfs 0.5 (#1392) 
- feat: run garbage collector (#1407)
- feat: update ipfsd-ctl to 4.x (#1411)
- feat: improved update experience (#1414)
- feat(ux): improve download cid (#1419)
- feat(ux): improve gc (#1420)
- feat(ux): better error messages (#1421)
- feat(ux): separate open from other actions (#1424)
- feat(ux): move preferences to menubar (#1425) 
- feat: allow custom ipfs binary (#1427)
- feat(ux): open web ui at login (#1429)
- feat: add "Help Translation" under "About" (#1447)
- feat: go-ipfs 0.5 (https://github.com/ipfs-shipyard/ipfs-desktop/pull/1463)

### 🛠 Fixes and Maintenance

- fix: drag&drop files and folders (https://github.com/ipfs-shipyard/ipfs-desktop/issues/1287#issuecomment-620604299)
- fix: start on login (#1334)
- fix: notify when new update is available (#1384)
- chore: update to electron 8.x (#1404)
- fix: write path when it does not exist (#1405)
- refactor: remove babel (#1406)
- fix: circular dependency between dialogs and daemon (#1408)
- fix: use portfinder instead of get-port (#1410)
- fix: screenshot taking (#1418)
- fix: disable updates in development (#1423)
- docs: clarify protocol usage (#1426)
- fix: translate 'Select Directory' (#1428)
- refactor: move utilities to utils directory (#1434)
- fix: repo fsck is deprecated (#1438)
- refactor: use store migrations and defaults (#1443)
- fix(ux): show dock when prompt is visible (#1450)
- fix: keep track of last opened page (#1452)
- fix: ipfs on PATH on windows with spaces in binary path #1465
- fix: go-ipfs 0.5.0 with go-ipfs-dep 0.5.0 #1464
- fix: macOS notarization with stappling (f01eb6b)
## [v0.11.0] - 2020-04-29
Skipped due to issues with macOS notarization.
Use [v0.11.1](https://github.com/ipfs-shipyard/ipfs-desktop/releases/tag/v0.11.1) instead.
## [v0.10.4] - 2020-03-12
- Web UI: [`v2.7.2`](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.7.2)
- IPFS: [`go-ipfs v0.4.23`](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.23)

### 🛠 Fixes and Maintenance

- i18n: sync locales (#1347)
- chore: macOS notarizing scripts and proces (#1365)
- fix: startup on Debian 10 (#1370)
## [v0.10.3] - 2020-02-04
- Web UI: [`v2.7.2`](https://github.com/ipfs-shipyard/ipfs-webui/releases/tag/v2.7.2)
- IPFS: [`go-ipfs v0.4.23`](https://github.com/ipfs/go-ipfs/releases/tag/v0.4.23)

### ✨  Features

- I18N: `ja-JP`, `he-IL` and `hi-IN` locales (#1339)

### 🛠 Fixes and Maintenance

- fix: start with off icon (#1300)
- chore: dependency updates (#1341)
