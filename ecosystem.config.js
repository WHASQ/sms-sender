module.exports = {
  apps: [
    {
      name: 'sms-sender-fr',
      script: './index.js',
      instances  : 2,
      exec_mode  : 'cluster',
      env: {
        'NODE_ENV': 'prod-fr'
      }
    }
  ]
}
