@echo off
echo Setting up AI-Enhanced Search for local testing...
echo.

REM Check if Netlify CLI is installed
where netlify >nul 2>&1
if %errorlevel% neq 0 (
    echo Netlify CLI not found. Installing...
    call npm install -g netlify-cli
) else (
    echo Netlify CLI is installed
)

REM Check for .env file
if not exist .env (
    echo.
    echo No .env file found.
    echo Please create one with your OpenAI API key:
    echo.
    echo OPENAI_API_KEY=sk-your-key-here
    echo.
    echo Get your key from: https://platform.openai.com/api-keys
    pause
    exit /b 1
) else (
    echo .env file found
)

REM Check if OPENAI_API_KEY is set
findstr "OPENAI_API_KEY" .env >nul
if %errorlevel% neq 0 (
    echo OPENAI_API_KEY not found in .env
    echo Add: OPENAI_API_KEY=sk-your-key-here
    pause
    exit /b 1
) else (
    echo OpenAI API key configured
)

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Install function dependencies
echo.
echo Installing function dependencies...
cd netlify\functions
call npm install
cd ..\..

REM Check if search index exists
if not exist public\search-index.json (
    echo.
    echo Generating search index...
    call npm run generate-embeddings
) else (
    echo Search index exists
)

echo.
echo Setup complete!
echo.
echo Starting local development server...
echo - Site will be available at: http://localhost:8888
echo - Go to http://localhost:8888/work to test search
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the dev server
netlify dev 