module.exports = {
  apps: [
    {
      name: 'thesis-wall',
      script: 'node_modules/.bin/next',
      args: 'dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};

