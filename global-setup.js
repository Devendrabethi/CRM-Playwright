const fs = require('fs');
const path = require('path');

async function globalSetup() {
  // Read TEST_ENV directly from cross-env
  const env = process.env.TEST_ENV  || 'hotfixqa'; // hotfixqa, uat, etc.
  const allureResultsDir = path.join(__dirname, 'allure-results');

  // Ensure directory exists
  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir);
  }

  // Write environment.properties file
  fs.writeFileSync(
    path.join(allureResultsDir, 'environment.properties'),
    `Environment=${env}\n`
  );

  // Prepare executor info JSON
  const executor = {
    name: 'Devendra Prasad',
    buildName: 'CRM Configuration: 1.143.0.20, CRM Business Process: 1.2.0.4, CRM Business Plugins: 1.3.0.41'
  };

  // Write executor.json file (one file, JSON string)
  fs.writeFileSync(
    path.join(allureResultsDir, 'executor.json'),
    JSON.stringify(executor, null, 2)
  );

  console.log(`✔ Allure environment set to: ${env}`);
  console.log(`✔ Executor info written to executor.json`);
}

module.exports = globalSetup;
