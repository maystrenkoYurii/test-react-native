import type { SagaMiddleware, Task } from 'redux-saga';

import { rootSagas } from '@flux/bus/rootSagas';

interface SagasManager {
  runSagas: (middleware: SagaMiddleware) => Task[];
}

const SagasManager: SagasManager = {
  runSagas: (middleware) => {
    return rootSagas.map((saga) => middleware.run(saga));
  },
};

export default SagasManager;
