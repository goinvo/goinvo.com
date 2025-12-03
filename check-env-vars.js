#!/usr/bin/env node
/**
 * Check environment variables for common issues
 * Run: node check-env-vars.js
 */

require('dotenv').config();

console.log('🔍 Checking environment variables...\n');

const checks = {
  OPENAI_API_KEY: {
    required: true,
    validator: (value) => {
      const issues = [];
      
      if (!value) {
        issues.push('❌ Not set');
        return issues;
      }
      
      // Check for newlines
      if (value.includes('\n') || value.includes('\r')) {
        issues.push('❌ Contains newlines (common copy-paste error)');
        const lines = value.split(/[\r\n]/);
        issues.push(`   Found ${lines.length} lines, first line: ${lines[0].substring(0, 20)}...`);
      }
      
      // Check format
      const cleanValue = value.trim().split(/[\r\n]/)[0];
      if (!cleanValue.startsWith('sk-')) {
        issues.push('❌ Invalid format (should start with "sk-")');
        issues.push(`   Starts with: ${cleanValue.substring(0, 10)}...`);
      }
      
      // Check length
      if (cleanValue.length < 40) {
        issues.push('⚠️  Seems too short for an OpenAI API key');
      }
      
      // Check for quotes (should not have them in env var)
      if (value.startsWith('"') || value.startsWith("'")) {
        issues.push('⚠️  Starts with a quote - remove quotes from env var value');
      }
      
      if (issues.length === 0) {
        issues.push(`✅ Valid format (length: ${cleanValue.length})`);
        issues.push(`   Preview: ${cleanValue.substring(0, 8)}...${cleanValue.substring(cleanValue.length - 4)}`);
      }
      
      return issues;
    }
  }
};

let hasErrors = false;

for (const [key, config] of Object.entries(checks)) {
  console.log(`${key}:`);
  const value = process.env[key];
  
  if (!value && config.required) {
    console.log('  ❌ Required but not set\n');
    hasErrors = true;
    continue;
  }
  
  if (!value) {
    console.log('  ℹ️  Not set (optional)\n');
    continue;
  }
  
  const results = config.validator(value);
  results.forEach(result => console.log(`  ${result}`));
  
  if (results.some(r => r.includes('❌'))) {
    hasErrors = true;
  }
  
  console.log();
}

if (hasErrors) {
  console.log('⚠️  Issues found! Fix these before deploying.\n');
  console.log('For Vercel deployment:');
  console.log('  1. Go to Project Settings → Environment Variables');
  console.log('  2. Update the problematic variables');
  console.log('  3. Ensure no newlines, quotes, or extra text');
  console.log('  4. Save and redeploy\n');
  process.exit(1);
} else {
  console.log('✅ All checks passed!\n');
  process.exit(0);
}

