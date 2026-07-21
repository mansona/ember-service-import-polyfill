# ember-service-import-polyfill

This is a simple babel polyfill that adds backwards compatibility for the new service import so that addons can support a range of Ember.js that is < v4.1 and > 7.0.

If you are on an old enough version of Ember this addon will automatically install a babel plugin that rewrites:

```js
import { service } from "@ember/service";
```

to

```js
import { inject as service } from "@ember/service";
```

This allows addon authors to write their code in the new style without dropping support for older Ember versions 🎉 If you are developing a v1 addon and want to continue to support Ember < 4.1 then you can add this addon to your **dependencies**.

## Compatibility

This addon is inert in Ember versions >= 4.1

This addon is tested in Node.js v20 - it will likely will work on older versions, we just don't test it

## Installation

```
ember install ember-service-import-polyfill
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
