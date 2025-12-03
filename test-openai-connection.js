#!/usr/bin/env node
/**
 * Test OpenAI connection and model availability
 * Run: node test-openai-connection.js
 */

const OpenAI = require('openai');

async function testOpenAI() {
  console.log('🔍 Testing OpenAI connection...\n');
  
  // Check API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY not found in environment');
    console.log('\nSet it with: export OPENAI_API_KEY=sk-...');
    process.exit(1);
  }
  
  const keyPreview = process.env.OPENAI_API_KEY.substring(0, 8) + '...' + 
                     process.env.OPENAI_API_KEY.substring(process.env.OPENAI_API_KEY.length - 4);
  console.log(`✅ API Key found: ${keyPreview}\n`);
  
  try {
    // Initialize client
    console.log('Initializing OpenAI client...');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    console.log('✅ Client initialized\n');
    
    // Test gpt-4.1-nano model with a simple request
    console.log('Testing gpt-4.1-nano model...');
    const startTime = Date.now();
    
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano',
      messages: [
        { role: 'system', content: 'You are a helpful assistant. Respond with JSON only.' },
        { role: 'user', content: 'Return JSON: {"status": "ok", "message": "Model is working"}' }
      ],
      max_completion_tokens: 50,
      response_format: { type: "json_object" }
    });
    
    const elapsed = Date.now() - startTime;
    
    console.log(`✅ Request succeeded in ${elapsed}ms`);
    console.log(`   Model: ${response.model}`);
    console.log(`   Tokens: ${response.usage.total_tokens}`);
    console.log(`   Response: ${response.choices[0].message.content}\n`);
    
    // Parse response
    try {
      const parsed = JSON.parse(response.choices[0].message.content);
      if (parsed.status === 'ok') {
        console.log('✅ All tests passed! OpenAI API is working correctly.');
      } else {
        console.warn('⚠️  Unexpected response content');
      }
    } catch (parseError) {
      console.error('❌ Failed to parse JSON response:', parseError.message);
    }
    
  } catch (error) {
    console.error('\n❌ OpenAI API Error:');
    console.error('   Message:', error.message);
    console.error('   Status:', error.status);
    console.error('   Code:', error.code);
    console.error('   Type:', error.type);
    
    if (error.status === 401) {
      console.error('\n💡 This looks like an authentication error. Check that:');
      console.error('   1. Your API key is correct');
      console.error('   2. Your API key has not expired');
      console.error('   3. Your API key has the correct permissions');
    } else if (error.status === 404) {
      console.error('\n💡 This looks like a model not found error. The model "gpt-4.1-nano" may:');
      console.error('   1. Not exist or have been renamed');
      console.error('   2. Not be available for your account/tier');
      console.error('   3. Be in a different region');
    } else if (error.status === 429) {
      console.error('\n💡 Rate limit exceeded. You may have:');
      console.error('   1. Exceeded your API quota');
      console.error('   2. Made too many requests too quickly');
      console.error('   3. Reached your organization\'s limit');
    } else if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
      console.error('\n💡 Network error. Check:');
      console.error('   1. Your internet connection');
      console.error('   2. Firewall/proxy settings');
      console.error('   3. DNS resolution');
    }
    
    process.exit(1);
  }
}

testOpenAI().catch(console.error);

