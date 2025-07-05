import storage from 'redux-persist/lib/storage';
import { StorageInterface } from './storage';

const ReactStorage: StorageInterface = {
  create: () => storage
};

export default ReactStorage;
