@echo off
set NODE_ENV=production

echo Building applications for production...

if not exist "apps\host" (
    echo Error: Host application directory not found!
    exit /b 1
)

if not exist "apps\remote1" (
    echo Error: Remote1 application directory not found!
    exit /b 1
)

if not exist "apps\remote2" (
    echo Error: Remote2 application directory not found!
    exit /b 1
)

echo Building Host...
cd apps\host
call npm run build
cd ..\..

echo Building Remote1...
cd apps\remote1
call npm run build
cd ..\..

echo Building Remote2...
cd apps\remote2
call npm run build
cd ..\..

echo Production build completed!
pause