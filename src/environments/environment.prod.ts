import { EuiEnvConfig } from '@eui/core';

export const environment: EuiEnvConfig = {
    production: true,
    enableDevToolRedux: false,
    envDynamicConfig: {
        uri: 'assets/config/env-json-config.json',
    },
};
