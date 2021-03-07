# glimesh-neos-relay

Relays socket messages between glimesh and neos.

## Why?

At the time of writing, Neos' in-game language, LogiX, doesn't support JSON. While this isn't ideal, the usual method of bypassing this is to implement a proxy that simplifies APIs. In this case we proxy glimesh chat into a form which Neos users can parse easily. In this case Pipe separated values.

## Neos API

1. Run this server
2. In Neos, connect to 127.0.0.1:PORT (default port is 8080)
3. send `connect|<channelName>`, via Neos
4. messages will come back as `<username>|<msg>`.
5. That's all you need!

## Config

- port - port to use for server
- clientId - clientId for Glimesh to use

## This is messy

Yeah it is, if you want to improve it, submit a PR.
