# @svelte-five/inspection
[![NPM Version](https://img.shields.io/npm/v/@svelte-five/inspection.svg?style=flat)](https://www.npmjs.com/package/@svelte-five/inspection)
![](https://img.shields.io/npm/dm/@svelte-five/inspection.svg?style=flat)

Dev mode, frontend logging library for svelte with support for elimination in production.

A small logging utility for frontend development in svelte. It prints nothing in non-dev environments and functions get eliminated during bundling for non-dev environments.

![Screenshot of the library in action](https://github.com/svelte-five/inspection/blob/main/assets/screenshot1.png?raw=true)

## Usage
Install:
```shell
pnpm add @svelte-five/inspection
```

Import the relevant logging method:
```ts
import { info, debug, warn, error } from '@svelte-five/inspection'

debug('The identifier is 1')
info('Loaded local storage.')
error(new Error('Failed to fetch data.'))
warn({ msg: 'This is a warning.' })
```

These functions will be eliminated by your builder in production and in case your builder doesn't support auto elimination, they will produce no output based on the following condition:
```ts
const isActive = import.meta.env['VITE_SVELTE_INSPECTION'] || import.meta.env['DEV']
```

## Contributing
If you're interested in contributing, read the [CONTRIBUTING.md](https://github.com/muratgozel/muratgozel/blob/main/CONTRIBUTING.md) first, please.

---

Thanks for the attention 💙 Any amount of support on [patreon](https://patreon.com/muratgozel?utm_medium=organic&utm_source=github_repo&utm_campaign=github&utm_content=join_link) or [github](https://github.com/sponsors/muratgozel) will return you back as bug fixes, new features and bits and bytes.
