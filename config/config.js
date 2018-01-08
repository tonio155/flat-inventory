const env = process.env.NODE_ENV || 'development';
console.log((`
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
The server is running.
The process.env.NODE_ENV = ${env}
The PORT has been set to ${process.env.PORT} || 3000
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
`));

if (env === 'development' || env === 'test') {
  const config = require('./config.json');
  const envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}