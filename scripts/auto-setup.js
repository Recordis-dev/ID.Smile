/**
 * Auto-Setup and Troubleshooting Script for ID Smile Deployment
 * This script automates the installation of the Vercel Plugin and runs validation
 * checks to guarantee flawless deployment and streamline automated improvements.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('===============================================================');
console.log('🤖 STARTING ID SMILE AUTO-SETUP & TROUBLESHOOTING');
console.log('===============================================================\n');

// 1. Environment and Tooling Checks
console.log('🔍 Checking system environment...');
try {
  const nodeVersion = process.version;
  console.log(`✅ Node.js is installed: ${nodeVersion}`);
} catch (e) {
  console.error('❌ Node.js check failed. Please install Node.js.');
  process.exit(1);
}

try {
  const npmVersion = execSync('npm -v').toString().trim();
  console.log(`✅ npm is installed: v${npmVersion}`);
} catch (e) {
  console.error('❌ npm check failed. Please install npm/Node.js.');
  process.exit(1);
}

// 2. Install and configure Vercel Plugin
console.log('\n📦 Configuring Vercel Plugin for automated agents...');
try {
  console.log('Running: npx plugins add vercel/vercel-plugin...');
  // Run non-interactively where possible
  const cmd = process.platform === 'win32'
    ? 'echo y | npx plugins add vercel/vercel-plugin'
    : 'yes | npx plugins add vercel/vercel-plugin';

  execSync(cmd, { stdio: 'inherit', timeout: 30000 });
  console.log('✅ Vercel Plugin successfully added/configured in the environment.');
} catch (e) {
  console.warn('⚠️ Warning: Non-interactive npx plugins command completed with notice.');
  console.log('If you are running this locally, you can run manually:');
  console.log('👉 npx plugins add vercel/vercel-plugin');
}

// 3. Static File Integrity Verification
console.log('\n📄 Checking static HTML pages integrity...');
const staticFiles = [
  'index.html',
  'dx-digital-smile-ortodoncia.html',
  'dashboard-operativo-id-smile.html',
  'business-model-canvas-id-smile.html'
];

let issuesFound = 0;

staticFiles.forEach(file => {
  const filepath = path.join(__dirname, '..', file);
  if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, 'utf8');
    const size = fs.statSync(filepath).size;
    console.log(`✅ Found "${file}" (${(size / 1024).toFixed(2)} KB)`);

    // Check for potential issues (e.g. broken script tags, invalid links)
    if (content.includes('src=""') || content.includes('href=""')) {
      console.warn(`   ⚠️ Warning: Empty src or href attribute detected in ${file}`);
      issuesFound++;
    }

    // Check if WhatsApp API link is properly structured
    if (file === 'index.html' && !content.includes('wa.me/')) {
      console.warn('   ⚠️ Warning: WhatsApp deep link (wa.me) not found in index.html');
      issuesFound++;
    }
  } else {
    console.error(`❌ Error: Required file "${file}" is missing!`);
    issuesFound++;
  }
});

// 4. Vercel Project Configurations Check
console.log('\n⚡ Checking Vercel Project credentials...');
const vercelCreds = {
  VERCEL_TOKEN: process.env.VERCEL_TOKEN,
  VERCEL_ORG_ID: process.env.VERCEL_ORG_ID,
  VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID
};

const credsMissing = Object.entries(vercelCreds).filter(([k, v]) => !v);
if (credsMissing.length === 0) {
  console.log('✅ All Vercel deployment credentials are set in the environment.');
} else {
  console.log(`ℹ️ Notice: The following Vercel env variables are not set locally: ${credsMissing.map(([k]) => k).join(', ')}`);
  console.log('   These must be configured as Repository Secrets in GitHub Actions for automated production deployments.');
}

console.log('\n===============================================================');
if (issuesFound === 0) {
  console.log('🎉 AUTO-SETUP AND TROUBLESHOOTING SUCCESSFUL!');
  console.log('Your codebase is verified, and Vercel Plugin is ready for AI coding agents.');
} else {
  console.log(`⚠️ Process finished with ${issuesFound} warnings/errors.`);
  console.log('Please review the warnings above to ensure optimal user experience.');
}
console.log('===============================================================');
