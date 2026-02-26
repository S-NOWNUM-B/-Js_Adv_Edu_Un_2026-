import ConfigManager from './singleton.js';

const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();

console.log('--- Singleton Test ---');
console.log('Are both instances the same?', instance1 === instance2);

instance1.set('appName', 'MyApp');
console.log('Instance 1 appName:', instance1.get('appName'));
console.log('Instance 2 appName:', instance2.get('appName'));

instance2.set('version', '1.0.0');
console.log('Instance 1 version:', instance1.get('version'));
console.log('Instance 2 version:', instance2.get('version'));

console.log('All config from instance 1:', instance1.getAll());
console.log('All config from instance 2:', instance2.getAll());