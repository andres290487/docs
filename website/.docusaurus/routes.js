import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-CN/search',
    component: ComponentCreator('/zh-CN/search', '5cd'),
    exact: true
  },
  {
    path: '/zh-CN/',
    component: ComponentCreator('/zh-CN/', '029'),
    routes: [
      {
        path: '/zh-CN/',
        component: ComponentCreator('/zh-CN/', '124'),
        routes: [
          {
            path: '/zh-CN/',
            component: ComponentCreator('/zh-CN/', 'ca2'),
            routes: [
              {
                path: '/zh-CN/api/rpc/access-keys',
                component: ComponentCreator('/zh-CN/api/rpc/access-keys', 'c54'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/block-chunk',
                component: ComponentCreator('/zh-CN/api/rpc/block-chunk', 'd6e'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/contracts',
                component: ComponentCreator('/zh-CN/api/rpc/contracts', '87f'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/gas',
                component: ComponentCreator('/zh-CN/api/rpc/gas', 'd66'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/introduction',
                component: ComponentCreator('/zh-CN/api/rpc/introduction', 'ba8'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/maintenance-windows',
                component: ComponentCreator('/zh-CN/api/rpc/maintenance-windows', '582'),
                exact: true
              },
              {
                path: '/zh-CN/api/rpc/network',
                component: ComponentCreator('/zh-CN/api/rpc/network', 'd39'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/protocol',
                component: ComponentCreator('/zh-CN/api/rpc/protocol', 'e1a'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/providers',
                component: ComponentCreator('/zh-CN/api/rpc/providers', '077'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/setup',
                component: ComponentCreator('/zh-CN/api/rpc/setup', '619'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/api/rpc/transactions',
                component: ComponentCreator('/zh-CN/api/rpc/transactions', 'aed'),
                exact: true,
                sidebar: "api"
              },
              {
                path: '/zh-CN/bos/api/builtin-components',
                component: ComponentCreator('/zh-CN/bos/api/builtin-components', '3ab'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/api/near',
                component: ComponentCreator('/zh-CN/bos/api/near', 'e7f'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/api/notifications',
                component: ComponentCreator('/zh-CN/bos/api/notifications', 'eb9'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/api/primitives',
                component: ComponentCreator('/zh-CN/bos/api/primitives', '952'),
                exact: true
              },
              {
                path: '/zh-CN/bos/api/social',
                component: ComponentCreator('/zh-CN/bos/api/social', '929'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/api/state',
                component: ComponentCreator('/zh-CN/bos/api/state', 'd5e'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/api/web-methods',
                component: ComponentCreator('/zh-CN/bos/api/web-methods', '0b4'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/community/indexers',
                component: ComponentCreator('/zh-CN/bos/community/indexers', 'd95'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/dev/bos-loader',
                component: ComponentCreator('/zh-CN/bos/dev/bos-loader', 'ff1'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/dev/intro',
                component: ComponentCreator('/zh-CN/bos/dev/intro', 'db9'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/dev/vscode',
                component: ComponentCreator('/zh-CN/bos/dev/vscode', '870'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/overview',
                component: ComponentCreator('/zh-CN/bos/overview', 'd7a'),
                exact: true
              },
              {
                path: '/zh-CN/bos/queryapi/best-practices',
                component: ComponentCreator('/zh-CN/bos/queryapi/best-practices', '5f8'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/big-query',
                component: ComponentCreator('/zh-CN/bos/queryapi/big-query', '839'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/bos-components',
                component: ComponentCreator('/zh-CN/bos/queryapi/bos-components', 'd7b'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/queryapi/context-object',
                component: ComponentCreator('/zh-CN/bos/queryapi/context-object', '05b'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/how-it-works',
                component: ComponentCreator('/zh-CN/bos/queryapi/how-it-works', 'a9e'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/index-functions',
                component: ComponentCreator('/zh-CN/bos/queryapi/index-functions', '8b9'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/intro',
                component: ComponentCreator('/zh-CN/bos/queryapi/intro', '191'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/migrate-from-near-lake',
                component: ComponentCreator('/zh-CN/bos/queryapi/migrate-from-near-lake', '16b'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/queryapi/query-data',
                component: ComponentCreator('/zh-CN/bos/queryapi/query-data', '944'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/tutorial/bos-gateway',
                component: ComponentCreator('/zh-CN/bos/tutorial/bos-gateway', '629'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/ds-components',
                component: ComponentCreator('/zh-CN/bos/tutorial/ds-components', '5ab'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/ethers-js',
                component: ComponentCreator('/zh-CN/bos/tutorial/ethers-js', '146'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/ethers-js-best-practices',
                component: ComponentCreator('/zh-CN/bos/tutorial/ethers-js-best-practices', 'bb0'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/indexer-tutorials/feed-indexer',
                component: ComponentCreator('/zh-CN/bos/tutorial/indexer-tutorials/feed-indexer', '9e9'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/tutorial/indexer-tutorials/hype-indexer',
                component: ComponentCreator('/zh-CN/bos/tutorial/indexer-tutorials/hype-indexer', 'f95'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/tutorial/indexer-tutorials/nft-indexer',
                component: ComponentCreator('/zh-CN/bos/tutorial/indexer-tutorials/nft-indexer', 'f65'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/tutorial/indexer-tutorials/posts-indexer',
                component: ComponentCreator('/zh-CN/bos/tutorial/indexer-tutorials/posts-indexer', '003'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/bos/tutorial/interaction',
                component: ComponentCreator('/zh-CN/bos/tutorial/interaction', '8e5'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/lido',
                component: ComponentCreator('/zh-CN/bos/tutorial/lido', '2ab'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/push-notifications',
                component: ComponentCreator('/zh-CN/bos/tutorial/push-notifications', '4ff'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/queryapi-websockets',
                component: ComponentCreator('/zh-CN/bos/tutorial/queryapi-websockets', '336'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/quickstart',
                component: ComponentCreator('/zh-CN/bos/tutorial/quickstart', 'cde'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/bos/tutorial/using-iframes',
                component: ComponentCreator('/zh-CN/bos/tutorial/using-iframes', 'aa0'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/concepts/advanced/indexers',
                component: ComponentCreator('/zh-CN/concepts/advanced/indexers', '3d7'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/advanced/near-indexer-framework',
                component: ComponentCreator('/zh-CN/concepts/advanced/near-indexer-framework', '021'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/advanced/near-lake-framework',
                component: ComponentCreator('/zh-CN/concepts/advanced/near-lake-framework', '477'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/advanced/papers',
                component: ComponentCreator('/zh-CN/concepts/advanced/papers', '357'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/advanced/specification',
                component: ComponentCreator('/zh-CN/concepts/advanced/specification', '637'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/advanced/vm',
                component: ComponentCreator('/zh-CN/concepts/advanced/vm', '08f'),
                exact: true
              },
              {
                path: '/zh-CN/concepts/basics/accounts/access-keys',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/access-keys', '14e'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/accounts/account-id',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/account-id', 'a7b'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/accounts/creating-accounts',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/creating-accounts', '37b'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/accounts/model',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/model', 'ebf'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/accounts/smartcontract',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/smartcontract', '84c'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/accounts/state',
                component: ComponentCreator('/zh-CN/concepts/basics/accounts/state', '10b'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/actors',
                component: ComponentCreator('/zh-CN/concepts/basics/actors', '806'),
                exact: true
              },
              {
                path: '/zh-CN/concepts/basics/epoch',
                component: ComponentCreator('/zh-CN/concepts/basics/epoch', '58b'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/networks',
                component: ComponentCreator('/zh-CN/concepts/basics/networks', '0da'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/overview',
                component: ComponentCreator('/zh-CN/concepts/basics/overview', '6bd'),
                exact: true
              },
              {
                path: '/zh-CN/concepts/basics/protocol',
                component: ComponentCreator('/zh-CN/concepts/basics/protocol', '35c'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/runtime',
                component: ComponentCreator('/zh-CN/concepts/basics/runtime', '0b3'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/technical_stuff',
                component: ComponentCreator('/zh-CN/concepts/basics/technical_stuff', 'ae3'),
                exact: true
              },
              {
                path: '/zh-CN/concepts/basics/token-loss',
                component: ComponentCreator('/zh-CN/concepts/basics/token-loss', '46a'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/tokens',
                component: ComponentCreator('/zh-CN/concepts/basics/tokens', '6ec'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/transactions/gas',
                component: ComponentCreator('/zh-CN/concepts/basics/transactions/gas', 'e2a'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/transactions/gas-advanced',
                component: ComponentCreator('/zh-CN/concepts/basics/transactions/gas-advanced', '79c'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/transactions/overview',
                component: ComponentCreator('/zh-CN/concepts/basics/transactions/overview', '9b0'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/basics/validators',
                component: ComponentCreator('/zh-CN/concepts/basics/validators', 'da6'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/data-flow/data-storage',
                component: ComponentCreator('/zh-CN/concepts/data-flow/data-storage', '3de'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/data-flow/near-data-flow',
                component: ComponentCreator('/zh-CN/concepts/data-flow/near-data-flow', 'b23'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/data-flow/token-transfer-flow',
                component: ComponentCreator('/zh-CN/concepts/data-flow/token-transfer-flow', '9d4'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/storage/data-storage',
                component: ComponentCreator('/zh-CN/concepts/storage/data-storage', '745'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/storage/storage-solutions',
                component: ComponentCreator('/zh-CN/concepts/storage/storage-solutions', 'e9d'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/storage/storage-staking',
                component: ComponentCreator('/zh-CN/concepts/storage/storage-staking', '01c'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/web3/basics',
                component: ComponentCreator('/zh-CN/concepts/web3/basics', '148'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/web3/economics',
                component: ComponentCreator('/zh-CN/concepts/web3/economics', '9ea'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/web3/intro',
                component: ComponentCreator('/zh-CN/concepts/web3/intro', '99c'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/web3/near',
                component: ComponentCreator('/zh-CN/concepts/web3/near', '478'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/web3/nfts',
                component: ComponentCreator('/zh-CN/concepts/web3/nfts', '362'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/concepts/welcome',
                component: ComponentCreator('/zh-CN/concepts/welcome', 'ca0'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/zh-CN/data-availability/blob-contract',
                component: ComponentCreator('/zh-CN/data-availability/blob-contract', '88c'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/cdk-integration',
                component: ComponentCreator('/zh-CN/data-availability/cdk-integration', '98d'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/integrations',
                component: ComponentCreator('/zh-CN/data-availability/integrations', '32a'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/light-client',
                component: ComponentCreator('/zh-CN/data-availability/light-client', '8ad'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/optimism',
                component: ComponentCreator('/zh-CN/data-availability/optimism', '308'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/rpc',
                component: ComponentCreator('/zh-CN/data-availability/rpc', '523'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/data-availability/welcome',
                component: ComponentCreator('/zh-CN/data-availability/welcome', '370'),
                exact: true,
                sidebar: "data-availability"
              },
              {
                path: '/zh-CN/develop/contracts/actions',
                component: ComponentCreator('/zh-CN/develop/contracts/actions', 'ddd'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/anatomy',
                component: ComponentCreator('/zh-CN/develop/contracts/anatomy', '131'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/basics',
                component: ComponentCreator('/zh-CN/develop/contracts/basics', '54a'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/crosscontract',
                component: ComponentCreator('/zh-CN/develop/contracts/crosscontract', '643'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/environment/',
                component: ComponentCreator('/zh-CN/develop/contracts/environment/', 'acf'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/introduction',
                component: ComponentCreator('/zh-CN/develop/contracts/introduction', '1d6'),
                exact: true
              },
              {
                path: '/zh-CN/develop/contracts/quickstart',
                component: ComponentCreator('/zh-CN/develop/contracts/quickstart', '234'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/audits',
                component: ComponentCreator('/zh-CN/develop/contracts/security/audits', '9a3'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/bounty',
                component: ComponentCreator('/zh-CN/develop/contracts/security/bounty', '2d4'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/callbacks',
                component: ComponentCreator('/zh-CN/develop/contracts/security/callbacks', '388'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/checklist',
                component: ComponentCreator('/zh-CN/develop/contracts/security/checklist', 'fee'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/frontrunning',
                component: ComponentCreator('/zh-CN/develop/contracts/security/frontrunning', '52c'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/one-yocto',
                component: ComponentCreator('/zh-CN/develop/contracts/security/one-yocto', '304'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/random',
                component: ComponentCreator('/zh-CN/develop/contracts/security/random', '9a3'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/reentrancy',
                component: ComponentCreator('/zh-CN/develop/contracts/security/reentrancy', '147'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/storage',
                component: ComponentCreator('/zh-CN/develop/contracts/security/storage', 'fad'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/sybil',
                component: ComponentCreator('/zh-CN/develop/contracts/security/sybil', 'a3b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/security/welcome',
                component: ComponentCreator('/zh-CN/develop/contracts/security/welcome', '14e'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/serialization',
                component: ComponentCreator('/zh-CN/develop/contracts/serialization', 'fc8'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/storage',
                component: ComponentCreator('/zh-CN/develop/contracts/storage', 'ba9'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/welcome',
                component: ComponentCreator('/zh-CN/develop/contracts/welcome', '263'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/contracts/whatisacontract',
                component: ComponentCreator('/zh-CN/develop/contracts/whatisacontract', '730'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/deploy',
                component: ComponentCreator('/zh-CN/develop/deploy', '40d'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/github-overview',
                component: ComponentCreator('/zh-CN/develop/github-overview', '7f4'),
                exact: true
              },
              {
                path: '/zh-CN/develop/integrate/backend-login',
                component: ComponentCreator('/zh-CN/develop/integrate/backend-login', 'f2b'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/integrate/frontend',
                component: ComponentCreator('/zh-CN/develop/integrate/frontend', '4aa'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/integrate/frontend-components',
                component: ComponentCreator('/zh-CN/develop/integrate/frontend-components', 'c55'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/integrate/quickstart-frontend',
                component: ComponentCreator('/zh-CN/develop/integrate/quickstart-frontend', 'e4a'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/integrate/rpc',
                component: ComponentCreator('/zh-CN/develop/integrate/rpc', '67d'),
                exact: true
              },
              {
                path: '/zh-CN/develop/integrate/welcome',
                component: ComponentCreator('/zh-CN/develop/integrate/welcome', '98a'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/lake/primitives',
                component: ComponentCreator('/zh-CN/develop/lake/primitives', '124'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/block',
                component: ComponentCreator('/zh-CN/develop/lake/structures/block', '4a5'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/chunk',
                component: ComponentCreator('/zh-CN/develop/lake/structures/chunk', 'ea0'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/execution-outcome',
                component: ComponentCreator('/zh-CN/develop/lake/structures/execution-outcome', '4a0'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/receipt',
                component: ComponentCreator('/zh-CN/develop/lake/structures/receipt', '710'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/shard',
                component: ComponentCreator('/zh-CN/develop/lake/structures/shard', 'b25'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/state-change',
                component: ComponentCreator('/zh-CN/develop/lake/structures/state-change', '264'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/toc',
                component: ComponentCreator('/zh-CN/develop/lake/structures/toc', 'eec'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lake/structures/transaction',
                component: ComponentCreator('/zh-CN/develop/lake/structures/transaction', '2da'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/lock',
                component: ComponentCreator('/zh-CN/develop/lock', '11b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/monitor',
                component: ComponentCreator('/zh-CN/develop/monitor', 'f00'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/develop/prerequisites',
                component: ComponentCreator('/zh-CN/develop/prerequisites', '481'),
                exact: true
              },
              {
                path: '/zh-CN/develop/quickstart-guide',
                component: ComponentCreator('/zh-CN/develop/quickstart-guide', '0de'),
                exact: true
              },
              {
                path: '/zh-CN/develop/relayers/build-relayer',
                component: ComponentCreator('/zh-CN/develop/relayers/build-relayer', '926'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/develop/relevant-contracts/dao',
                component: ComponentCreator('/zh-CN/develop/relevant-contracts/dao', '177'),
                exact: true
              },
              {
                path: '/zh-CN/develop/relevant-contracts/ft',
                component: ComponentCreator('/zh-CN/develop/relevant-contracts/ft', 'b46'),
                exact: true
              },
              {
                path: '/zh-CN/develop/relevant-contracts/nft',
                component: ComponentCreator('/zh-CN/develop/relevant-contracts/nft', 'e8f'),
                exact: true
              },
              {
                path: '/zh-CN/develop/relevant-contracts/oracles',
                component: ComponentCreator('/zh-CN/develop/relevant-contracts/oracles', 'cf2'),
                exact: true
              },
              {
                path: '/zh-CN/develop/testing/integration-test',
                component: ComponentCreator('/zh-CN/develop/testing/integration-test', 'cfc'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/testing/introduction',
                component: ComponentCreator('/zh-CN/develop/testing/introduction', '2e2'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/testing/kurtosis-localnet',
                component: ComponentCreator('/zh-CN/develop/testing/kurtosis-localnet', '99a'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/testing/unit-test',
                component: ComponentCreator('/zh-CN/develop/testing/unit-test', 'ff4'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/upgrade',
                component: ComponentCreator('/zh-CN/develop/upgrade', '12f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/develop/welcome',
                component: ComponentCreator('/zh-CN/develop/welcome', 'aef'),
                exact: true
              },
              {
                path: '/zh-CN/integrator/accounts',
                component: ComponentCreator('/zh-CN/integrator/accounts', '38d'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/balance-changes',
                component: ComponentCreator('/zh-CN/integrator/balance-changes', 'ec5'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/create-transactions',
                component: ComponentCreator('/zh-CN/integrator/create-transactions', '7a2'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/errors/error-implementation',
                component: ComponentCreator('/zh-CN/integrator/errors/error-implementation', '608'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/errors/introduction',
                component: ComponentCreator('/zh-CN/integrator/errors/introduction', 'e47'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/errors/token-loss',
                component: ComponentCreator('/zh-CN/integrator/errors/token-loss', '005'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/exchange-integration',
                component: ComponentCreator('/zh-CN/integrator/exchange-integration', 'bad'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/faq',
                component: ComponentCreator('/zh-CN/integrator/faq', 'a20'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/fungible-tokens',
                component: ComponentCreator('/zh-CN/integrator/fungible-tokens', '8b1'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/integrator/implicit-accounts',
                component: ComponentCreator('/zh-CN/integrator/implicit-accounts', 'd39'),
                exact: true,
                sidebar: "exchanges"
              },
              {
                path: '/zh-CN/primitives/dao',
                component: ComponentCreator('/zh-CN/primitives/dao', 'f5c'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/dao/bos/create-dao',
                component: ComponentCreator('/zh-CN/primitives/dao/bos/create-dao', 'd1a'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/bos/create-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/bos/create-proposal', 'ac1'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/bos/get-dao-list',
                component: ComponentCreator('/zh-CN/primitives/dao/bos/get-dao-list', '2b3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/bos/get-proposal-list',
                component: ComponentCreator('/zh-CN/primitives/dao/bos/get-proposal-list', 'eb8'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/bos/vote-for-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/bos/vote-for-proposal', 'd2b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/near-cli/create-dao',
                component: ComponentCreator('/zh-CN/primitives/dao/near-cli/create-dao', 'ab9'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/near-cli/create-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/near-cli/create-proposal', '3ec'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/near-cli/get-dao-list',
                component: ComponentCreator('/zh-CN/primitives/dao/near-cli/get-dao-list', '481'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/near-cli/get-proposal-list',
                component: ComponentCreator('/zh-CN/primitives/dao/near-cli/get-proposal-list', '2ca'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/near-cli/vote-for-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/near-cli/vote-for-proposal', '1af'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/smart-contract/create-dao',
                component: ComponentCreator('/zh-CN/primitives/dao/smart-contract/create-dao', 'b1e'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/smart-contract/create-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/smart-contract/create-proposal', '5f6'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/smart-contract/vote-for-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/smart-contract/vote-for-proposal', 'bd6'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/web-app/create-dao',
                component: ComponentCreator('/zh-CN/primitives/dao/web-app/create-dao', '4dc'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/web-app/create-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/web-app/create-proposal', '986'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/web-app/get-dao-list',
                component: ComponentCreator('/zh-CN/primitives/dao/web-app/get-dao-list', 'fad'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/web-app/get-proposal-list',
                component: ComponentCreator('/zh-CN/primitives/dao/web-app/get-proposal-list', 'edc'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dao/web-app/vote-for-proposal',
                component: ComponentCreator('/zh-CN/primitives/dao/web-app/vote-for-proposal', '748'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex',
                component: ComponentCreator('/zh-CN/primitives/dex', 'e49'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/dex/bos/get-deposit-balances',
                component: ComponentCreator('/zh-CN/primitives/dex/bos/get-deposit-balances', '3a4'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/bos/get-pools',
                component: ComponentCreator('/zh-CN/primitives/dex/bos/get-pools', '067'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/bos/get-price',
                component: ComponentCreator('/zh-CN/primitives/dex/bos/get-price', 'eb9'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/bos/swap',
                component: ComponentCreator('/zh-CN/primitives/dex/bos/swap', 'b08'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/near-cli/get-deposit-balances',
                component: ComponentCreator('/zh-CN/primitives/dex/near-cli/get-deposit-balances', '672'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/near-cli/get-pools',
                component: ComponentCreator('/zh-CN/primitives/dex/near-cli/get-pools', 'e23'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/near-cli/swap',
                component: ComponentCreator('/zh-CN/primitives/dex/near-cli/swap', '94d'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/smart-contract/get-deposit-balances',
                component: ComponentCreator('/zh-CN/primitives/dex/smart-contract/get-deposit-balances', 'd76'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/smart-contract/get-pools',
                component: ComponentCreator('/zh-CN/primitives/dex/smart-contract/get-pools', '987'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/smart-contract/swap',
                component: ComponentCreator('/zh-CN/primitives/dex/smart-contract/swap', 'f8b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/web-app/get-deposit-balances',
                component: ComponentCreator('/zh-CN/primitives/dex/web-app/get-deposit-balances', '885'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/web-app/get-pools',
                component: ComponentCreator('/zh-CN/primitives/dex/web-app/get-pools', 'a01'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/web-app/get-price',
                component: ComponentCreator('/zh-CN/primitives/dex/web-app/get-price', '5ce'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/dex/web-app/swap',
                component: ComponentCreator('/zh-CN/primitives/dex/web-app/swap', '2b9'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft',
                component: ComponentCreator('/zh-CN/primitives/ft', '567'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/ft/bos/attach-to-call',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/attach-to-call', '2bf'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/bos/check-balance',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/check-balance', 'edc'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/bos/create',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/create', '8d1'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/bos/get-metadata',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/get-metadata', 'f2c'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/bos/register',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/register', 'fe3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/bos/send',
                component: ComponentCreator('/zh-CN/primitives/ft/bos/send', 'ee7'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/attach-to-call',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/attach-to-call', '2b4'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/check-balance',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/check-balance', '8a3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/create',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/create', '5d3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/get-metadata',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/get-metadata', '19e'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/register',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/register', '502'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/near-cli/send',
                component: ComponentCreator('/zh-CN/primitives/ft/near-cli/send', '139'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/smart-contract/attach-to-call',
                component: ComponentCreator('/zh-CN/primitives/ft/smart-contract/attach-to-call', '70f'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/smart-contract/send',
                component: ComponentCreator('/zh-CN/primitives/ft/smart-contract/send', '240'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/attach-to-call',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/attach-to-call', '088'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/check-balance',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/check-balance', '31f'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/create',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/create', '94b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/get-metadata',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/get-metadata', 'd0f'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/register',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/register', '06f'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/ft/web-app/send',
                component: ComponentCreator('/zh-CN/primitives/ft/web-app/send', '5bf'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop', '44f'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/create-ft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/create-ft-drop', '541'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/create-function-call-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/create-function-call-drop', '79d'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/create-nft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/create-nft-drop', '258'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/get-drop-id',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/get-drop-id', 'e9b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/get-key-pairs',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/get-key-pairs', 'bc2'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/simple-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/simple-drop', 'a9c'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/transfer-ft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/transfer-ft', 'e24'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/bos/transfer-nft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/bos/transfer-nft', '21c'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/create-ft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/create-ft-drop', '7f9'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/create-function-call-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/create-function-call-drop', 'd3d'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/create-nft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/create-nft-drop', '7ff'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/get-drop-id',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/get-drop-id', '3ca'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/get-key-pairs',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/get-key-pairs', '8b4'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/simple-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/simple-drop', '00d'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/transfer-ft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/transfer-ft', 'b8e'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/near-cli/transfer-nft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/near-cli/transfer-nft', 'b58'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/create-ft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/create-ft-drop', 'd80'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/create-function-call-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/create-function-call-drop', '39b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/create-nft-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/create-nft-drop', '505'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/get-drop-id',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/get-drop-id', 'e37'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/get-key-pairs',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/get-key-pairs', 'd98'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/simple-drop',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/simple-drop', '3e3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/transfer-ft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/transfer-ft', 'a13'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/linkdrop/web-app/transfer-nft',
                component: ComponentCreator('/zh-CN/primitives/linkdrop/web-app/transfer-nft', '06e'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft',
                component: ComponentCreator('/zh-CN/primitives/nft', '6bb'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/nft/bos/buy',
                component: ComponentCreator('/zh-CN/primitives/nft/bos/buy', '39a'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/bos/list-for-sale',
                component: ComponentCreator('/zh-CN/primitives/nft/bos/list-for-sale', '962'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/bos/mint',
                component: ComponentCreator('/zh-CN/primitives/nft/bos/mint', '7c3'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/bos/query',
                component: ComponentCreator('/zh-CN/primitives/nft/bos/query', 'ea8'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/bos/transfer',
                component: ComponentCreator('/zh-CN/primitives/nft/bos/transfer', 'cf4'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/near-cli/buy',
                component: ComponentCreator('/zh-CN/primitives/nft/near-cli/buy', '722'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/near-cli/list-for-sale',
                component: ComponentCreator('/zh-CN/primitives/nft/near-cli/list-for-sale', 'f7f'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/near-cli/mint',
                component: ComponentCreator('/zh-CN/primitives/nft/near-cli/mint', '60b'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/near-cli/query',
                component: ComponentCreator('/zh-CN/primitives/nft/near-cli/query', 'b94'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/near-cli/transfer',
                component: ComponentCreator('/zh-CN/primitives/nft/near-cli/transfer', 'b93'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/smart-contract/buy',
                component: ComponentCreator('/zh-CN/primitives/nft/smart-contract/buy', '79c'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/smart-contract/mint',
                component: ComponentCreator('/zh-CN/primitives/nft/smart-contract/mint', '0ee'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/smart-contract/query',
                component: ComponentCreator('/zh-CN/primitives/nft/smart-contract/query', 'a24'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/smart-contract/transfer',
                component: ComponentCreator('/zh-CN/primitives/nft/smart-contract/transfer', 'fcd'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/web-app/buy',
                component: ComponentCreator('/zh-CN/primitives/nft/web-app/buy', '212'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/web-app/list-for-sale',
                component: ComponentCreator('/zh-CN/primitives/nft/web-app/list-for-sale', '1c0'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/web-app/mint',
                component: ComponentCreator('/zh-CN/primitives/nft/web-app/mint', 'a08'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/web-app/query',
                component: ComponentCreator('/zh-CN/primitives/nft/web-app/query', '755'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/nft/web-app/transfer',
                component: ComponentCreator('/zh-CN/primitives/nft/web-app/transfer', '7ab'),
                exact: true
              },
              {
                path: '/zh-CN/primitives/oracles',
                component: ComponentCreator('/zh-CN/primitives/oracles', '9c3'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/primitives/welcome',
                component: ComponentCreator('/zh-CN/primitives/welcome', '680'),
                exact: true,
                sidebar: "primitives"
              },
              {
                path: '/zh-CN/sdk/js/building/basics',
                component: ComponentCreator('/zh-CN/sdk/js/building/basics', '130'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/building/prototyping',
                component: ComponentCreator('/zh-CN/sdk/js/building/prototyping', 'ec6'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/building/reproducible-builds',
                component: ComponentCreator('/zh-CN/sdk/js/building/reproducible-builds', '5b7'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/cli/',
                component: ComponentCreator('/zh-CN/sdk/js/cli/', '1bd'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-interface/payable-methods',
                component: ComponentCreator('/zh-CN/sdk/js/contract-interface/payable-methods', '7ea'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-interface/private-methods',
                component: ComponentCreator('/zh-CN/sdk/js/contract-interface/private-methods', '4df'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-interface/public-methods',
                component: ComponentCreator('/zh-CN/sdk/js/contract-interface/public-methods', '81e'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-structure/collections',
                component: ComponentCreator('/zh-CN/sdk/js/contract-structure/collections', 'ca4'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-structure/near-bindgen',
                component: ComponentCreator('/zh-CN/sdk/js/contract-structure/near-bindgen', '722'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/contract-structure/nesting',
                component: ComponentCreator('/zh-CN/sdk/js/contract-structure/nesting', '96c'),
                exact: true
              },
              {
                path: '/zh-CN/sdk/js/cross-contract/callbacks',
                component: ComponentCreator('/zh-CN/sdk/js/cross-contract/callbacks', '27a'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/get-started',
                component: ComponentCreator('/zh-CN/sdk/js/get-started', 'e25'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/introduction',
                component: ComponentCreator('/zh-CN/sdk/js/introduction', '6d0'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/promises/create-account',
                component: ComponentCreator('/zh-CN/sdk/js/promises/create-account', '21b'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/promises/deploy-contract',
                component: ComponentCreator('/zh-CN/sdk/js/promises/deploy-contract', 'baf'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/promises/intro',
                component: ComponentCreator('/zh-CN/sdk/js/promises/intro', 'cd4'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/promises/token-tx',
                component: ComponentCreator('/zh-CN/sdk/js/promises/token-tx', 'fca'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/testing/integration-tests',
                component: ComponentCreator('/zh-CN/sdk/js/testing/integration-tests', '16c'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/js/testing/unit-tests',
                component: ComponentCreator('/zh-CN/sdk/js/testing/unit-tests', '67b'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/best-practices',
                component: ComponentCreator('/zh-CN/sdk/rust/best-practices', 'da7'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/building/basics',
                component: ComponentCreator('/zh-CN/sdk/rust/building/basics', '693'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/building/post-processing',
                component: ComponentCreator('/zh-CN/sdk/rust/building/post-processing', 'f72'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/building/prototyping',
                component: ComponentCreator('/zh-CN/sdk/rust/building/prototyping', 'ed0'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/building/reproducible-builds',
                component: ComponentCreator('/zh-CN/sdk/rust/building/reproducible-builds', '73e'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-interface/contract-mutability',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-interface/contract-mutability', '06e'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-interface/payable-methods',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-interface/payable-methods', 'adf'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-interface/private-methods',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-interface/private-methods', '305'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-interface/public-methods',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-interface/public-methods', '39d'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-interface/serialization-interface',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-interface/serialization-interface', '802'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-size',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-size', 'f08'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-structure/collections',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-structure/collections', '01e'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-structure/near-bindgen',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-structure/near-bindgen', '0db'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/contract-structure/nesting',
                component: ComponentCreator('/zh-CN/sdk/rust/contract-structure/nesting', 'cf1'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/cross-contract/callbacks',
                component: ComponentCreator('/zh-CN/sdk/rust/cross-contract/callbacks', 'f76'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/get-started',
                component: ComponentCreator('/zh-CN/sdk/rust/get-started', '3de'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/introduction',
                component: ComponentCreator('/zh-CN/sdk/rust/introduction', 'bb1'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/promises/create-account',
                component: ComponentCreator('/zh-CN/sdk/rust/promises/create-account', '8b2'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/promises/deploy-contract',
                component: ComponentCreator('/zh-CN/sdk/rust/promises/deploy-contract', 'ccc'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/promises/intro',
                component: ComponentCreator('/zh-CN/sdk/rust/promises/intro', '13b'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/promises/token-tx',
                component: ComponentCreator('/zh-CN/sdk/rust/promises/token-tx', 'ac6'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/testing/integration-tests',
                component: ComponentCreator('/zh-CN/sdk/rust/testing/integration-tests', '885'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/rust/testing/unit-tests',
                component: ComponentCreator('/zh-CN/sdk/rust/testing/unit-tests', 'b8d'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/sdk/welcome',
                component: ComponentCreator('/zh-CN/sdk/welcome', '3a8'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/social/contract',
                component: ComponentCreator('/zh-CN/social/contract', '0e5'),
                exact: true
              },
              {
                path: '/zh-CN/social/intro',
                component: ComponentCreator('/zh-CN/social/intro', 'fd6'),
                exact: true
              },
              {
                path: '/zh-CN/social/standards',
                component: ComponentCreator('/zh-CN/social/standards', 'f5b'),
                exact: true
              },
              {
                path: '/zh-CN/social/tech',
                component: ComponentCreator('/zh-CN/social/tech', '808'),
                exact: true
              },
              {
                path: '/zh-CN/tools/explorer',
                component: ComponentCreator('/zh-CN/tools/explorer', '074'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/fastauth-sdk',
                component: ComponentCreator('/zh-CN/tools/fastauth-sdk', '5c0'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/indexer-for-explorer',
                component: ComponentCreator('/zh-CN/tools/indexer-for-explorer', 'dc3'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tools/indexing',
                component: ComponentCreator('/zh-CN/tools/indexing', '080'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tools/near-api-js/account',
                component: ComponentCreator('/zh-CN/tools/near-api-js/account', 'fb5'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-api-js/contract',
                component: ComponentCreator('/zh-CN/tools/near-api-js/contract', '8f4'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-api-js/cookbook',
                component: ComponentCreator('/zh-CN/tools/near-api-js/cookbook', 'f40'),
                exact: true
              },
              {
                path: '/zh-CN/tools/near-api-js/faq',
                component: ComponentCreator('/zh-CN/tools/near-api-js/faq', 'd6e'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-api-js/quick-reference',
                component: ComponentCreator('/zh-CN/tools/near-api-js/quick-reference', 'c3d'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-api-js/utils',
                component: ComponentCreator('/zh-CN/tools/near-api-js/utils', 'b95'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-api-js/wallet',
                component: ComponentCreator('/zh-CN/tools/near-api-js/wallet', 'a14'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-cli',
                component: ComponentCreator('/zh-CN/tools/near-cli', '0ec'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-cli-rs',
                component: ComponentCreator('/zh-CN/tools/near-cli-rs', '01f'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/near-lake',
                component: ComponentCreator('/zh-CN/tools/near-lake', '4c9'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tools/realtime',
                component: ComponentCreator('/zh-CN/tools/realtime', '7e1'),
                exact: true
              },
              {
                path: '/zh-CN/tools/remix-ide-plugin',
                component: ComponentCreator('/zh-CN/tools/remix-ide-plugin', 'b07'),
                exact: true
              },
              {
                path: '/zh-CN/tools/usecases',
                component: ComponentCreator('/zh-CN/tools/usecases', 'b55'),
                exact: true
              },
              {
                path: '/zh-CN/tools/wallet-selector',
                component: ComponentCreator('/zh-CN/tools/wallet-selector', 'a9c'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tools/welcome',
                component: ComponentCreator('/zh-CN/tools/welcome', '957'),
                exact: true,
                sidebar: "tools"
              },
              {
                path: '/zh-CN/tutorials/crosswords/basics/add-functions-call',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/basics/add-functions-call', '57f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/basics/hashing-and-unit-tests',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/basics/hashing-and-unit-tests', '51b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/basics/overview',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/basics/overview', '22b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/basics/set-up-skeleton',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/basics/set-up-skeleton', 'c19'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/basics/simple-frontend',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/basics/simple-frontend', '45f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/actions',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/actions', '5e3'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/adding-a-puzzle',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/adding-a-puzzle', 'e43'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/collections',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/collections', '6f3'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/logging-in',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/logging-in', '355'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/logging-in-implementation',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/logging-in-implementation', '5aa'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/overview',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/overview', '673'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/beginner/structs-enums',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/beginner/structs-enums', '8c1'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/access-key-solution',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/access-key-solution', '0aa'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/base64vecu8',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/base64vecu8', 'a31'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/cross-contract-calls',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/cross-contract-calls', 'e9a'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/linkdrop',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/linkdrop', '323'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/overview',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/overview', '875'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/crosswords/intermediate/use-seed-phrase',
                component: ComponentCreator('/zh-CN/tutorials/crosswords/intermediate/use-seed-phrase', '46c'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/advanced-xcc',
                component: ComponentCreator('/zh-CN/tutorials/examples/advanced-xcc', '0e9'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/blockvote-js',
                component: ComponentCreator('/zh-CN/tutorials/examples/blockvote-js', 'de1'),
                exact: true
              },
              {
                path: '/zh-CN/tutorials/examples/coin-flip',
                component: ComponentCreator('/zh-CN/tutorials/examples/coin-flip', 'def'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/count-near',
                component: ComponentCreator('/zh-CN/tutorials/examples/count-near', 'f14'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/tutorials/examples/donation',
                component: ComponentCreator('/zh-CN/tutorials/examples/donation', '20e'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/tutorials/examples/escrow',
                component: ComponentCreator('/zh-CN/tutorials/examples/escrow', '024'),
                exact: true
              },
              {
                path: '/zh-CN/tutorials/examples/factory',
                component: ComponentCreator('/zh-CN/tutorials/examples/factory', '9a5'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/frontend-multiple-contracts',
                component: ComponentCreator('/zh-CN/tutorials/examples/frontend-multiple-contracts', '574'),
                exact: true,
                sidebar: "integrate"
              },
              {
                path: '/zh-CN/tutorials/examples/guest-book',
                component: ComponentCreator('/zh-CN/tutorials/examples/guest-book', '5ba'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/hello-near',
                component: ComponentCreator('/zh-CN/tutorials/examples/hello-near', 'ad5'),
                exact: true
              },
              {
                path: '/zh-CN/tutorials/examples/update-contract-migrate-state',
                component: ComponentCreator('/zh-CN/tutorials/examples/update-contract-migrate-state', '039'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/examples/xcc',
                component: ComponentCreator('/zh-CN/tutorials/examples/xcc', '3c2'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/circulating-supply',
                component: ComponentCreator('/zh-CN/tutorials/fts/circulating-supply', '18d'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/defining-a-token',
                component: ComponentCreator('/zh-CN/tutorials/fts/defining-a-token', 'c1d'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/introduction',
                component: ComponentCreator('/zh-CN/tutorials/fts/introduction', '40c'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/marketplace',
                component: ComponentCreator('/zh-CN/tutorials/fts/marketplace', '2ba'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/predeployed-contract',
                component: ComponentCreator('/zh-CN/tutorials/fts/predeployed-contract', '371'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/registering-accounts',
                component: ComponentCreator('/zh-CN/tutorials/fts/registering-accounts', 'c0f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/simple-fts',
                component: ComponentCreator('/zh-CN/tutorials/fts/simple-fts', '924'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/skeleton',
                component: ComponentCreator('/zh-CN/tutorials/fts/skeleton', '996'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/fts/transfers',
                component: ComponentCreator('/zh-CN/tutorials/fts/transfers', '8fc'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/indexer/credentials',
                component: ComponentCreator('/zh-CN/tutorials/indexer/credentials', '76a'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/js-lake-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/js-lake-indexer', 'f63'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/lake-start-options',
                component: ComponentCreator('/zh-CN/tutorials/indexer/lake-start-options', '315'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/migrating-to-near-lake-framework',
                component: ComponentCreator('/zh-CN/tutorials/indexer/migrating-to-near-lake-framework', '083'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/near-lake-state-changes-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/near-lake-state-changes-indexer', '9af'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/nft-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/nft-indexer', '919'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/python-lake-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/python-lake-indexer', 'e66'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/python-nft-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/python-nft-indexer', '247'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/indexer/run-lake-indexer',
                component: ComponentCreator('/zh-CN/tutorials/indexer/run-lake-indexer', '6c2'),
                exact: true,
                sidebar: "indexers"
              },
              {
                path: '/zh-CN/tutorials/nfts/approvals',
                component: ComponentCreator('/zh-CN/tutorials/nfts/approvals', 'e9b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/core',
                component: ComponentCreator('/zh-CN/tutorials/nfts/core', '427'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/enumeration',
                component: ComponentCreator('/zh-CN/tutorials/nfts/enumeration', '349'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/events',
                component: ComponentCreator('/zh-CN/tutorials/nfts/events', '4bc'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/introduction',
                component: ComponentCreator('/zh-CN/tutorials/nfts/introduction', '833'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/approvals',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/approvals', '159'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/core',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/core', 'd32'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/enumeration',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/enumeration', 'b5b'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/events',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/events', 'a63'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/introduction',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/introduction', 'fde'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/marketplace',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/marketplace', 'ebb'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/minting',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/minting', 'b1f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/predeployed-contract',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/predeployed-contract', '477'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/royalty',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/royalty', '928'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/skeleton',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/skeleton', 'b83'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/js/upgrade-contract',
                component: ComponentCreator('/zh-CN/tutorials/nfts/js/upgrade-contract', '4f6'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/marketplace',
                component: ComponentCreator('/zh-CN/tutorials/nfts/marketplace', '66e'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/minecraft-nfts',
                component: ComponentCreator('/zh-CN/tutorials/nfts/minecraft-nfts', '946'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/minting',
                component: ComponentCreator('/zh-CN/tutorials/nfts/minting', '2f9'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/minting-nft-frontend',
                component: ComponentCreator('/zh-CN/tutorials/nfts/minting-nft-frontend', '6a1'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/minting-nfts',
                component: ComponentCreator('/zh-CN/tutorials/nfts/minting-nfts', 'e06'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/predeployed-contract',
                component: ComponentCreator('/zh-CN/tutorials/nfts/predeployed-contract', '179'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/royalty',
                component: ComponentCreator('/zh-CN/tutorials/nfts/royalty', 'c4d'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/series',
                component: ComponentCreator('/zh-CN/tutorials/nfts/series', 'f5f'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/skeleton',
                component: ComponentCreator('/zh-CN/tutorials/nfts/skeleton', 'cd3'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/nfts/upgrade-contract',
                component: ComponentCreator('/zh-CN/tutorials/nfts/upgrade-contract', '0bb'),
                exact: true,
                sidebar: "contracts"
              },
              {
                path: '/zh-CN/tutorials/welcome',
                component: ComponentCreator('/zh-CN/tutorials/welcome', '4ae'),
                exact: true
              },
              {
                path: '/zh-CN/',
                component: ComponentCreator('/zh-CN/', '16a'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
