// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "architecture-decision-records",
      script: "npm",
      args: "start", // Runs the compiled Next.js production server
      watch: false, // Disabled because production code is static
      env: {
        PORT: 3456, // Keeps your optimized production port
      },
    },
  ],
};

// module.exports = {
//   apps : [{
//     script: 'index.js',
//     watch: '.'
//   }, {
//     script: './service-worker/',
//     watch: ['./service-worker']
//   }],

//   deploy : {
//     production : {
//       user : 'SSH_USERNAME',
//       host : 'SSH_HOSTMACHINE',
//       ref  : 'origin/master',
//       repo : 'GIT_REPOSITORY',
//       path : 'DESTINATION_PATH',
//       'pre-deploy-local': '',
//       'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//       'pre-setup': ''
//     }
//   }
// };
