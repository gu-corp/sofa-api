import { createSofaRouter } from './router.js';
import type { SofaConfig } from './sofa.js';
import { createSofa } from './sofa.js';

export { OpenAPI } from './open-api/index.js';

export function useSofa(config: SofaConfig) {
  const defaultConfig: Partial<SofaConfig> = {
    customScalars: {
      Date: { type: 'string', format: 'date-time' },
    }
  }
  return createSofaRouter(createSofa({
    ...defaultConfig,
    ...config,
    customScalars: {
      ...defaultConfig.customScalars,
      ...config.customScalars
    }
  }));
}

export { createSofaRouter, createSofa };
