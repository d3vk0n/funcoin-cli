import Configstore from 'configstore';

const config = {
  configStore: new Configstore('ethstats-cli'),
  configurator: {
    url: 'http://178.172.224.222:3000'
  },
  server: {
    net: 'funcoin'
  },
  client: {
    url: 'http://localhost:8545'
  },
  logger: {
    showErrors: true,
    showInfos: false,
    showDebugs: false
  }
};

export default config;
