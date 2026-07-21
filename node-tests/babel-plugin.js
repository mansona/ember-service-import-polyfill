import babel from '@babel/core';
import plugin from '../babel-plugin.js';
import { describe, it, expect } from 'vitest';

function verify(input, expectedOutput) {
  const result = babel.transformSync(input, {
    plugins: [plugin],
    parserOpts: {
      sourceType: 'module',
    },
  }).code;

  expect(result).toBe(expectedOutput);
}

describe('babel plugin', () => {
  it('transforms service import', () => {
    verify(
      "import { service } from '@ember/service';",
      "import { inject as service } from '@ember/service';",
    );
  });

  it('transforms multi inject import', () => {
    verify(
      "import { inject, service } from '@ember/service';",
      "import { inject, inject as service } from '@ember/service';",
    );
  });

  it('transforms mixed imports with inject', () => {
    verify(
      "import { service, getOwner } from '@ember/service';",
      "import { inject as service, getOwner } from '@ember/service';",
    );
  });

  it('doesnt transform inject as service with other imports', () => {
    verify(
      "import { inject as service, getOwner } from '@ember/service';",
      "import { inject as service, getOwner } from '@ember/service';",
    );
  });

  it('leaves other imports unchanged', () => {
    verify(
      "import { getOwner } from '@ember/service';",
      "import { getOwner } from '@ember/service';",
    );
  });

  it('leaves inject import unchanged', () => {
    verify(
      "import { inject } from '@ember/service';",
      "import { inject } from '@ember/service';",
    );
  });

  it('ignores imports from other modules', () => {
    verify(
      "import { inject, service } from '@ember/object';",
      "import { inject, service } from '@ember/object';",
    );
  });

  it('handles default imports alongside named imports', () => {
    verify(
      "import Service, { service } from '@ember/service';",
      "import Service, { inject as service } from '@ember/service';",
    );
  });
});
