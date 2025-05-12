@echo off
echo Installing dependencies for all applications...

echo Installing root dependencies...
call npm install

echo Installing Host dependencies...
cd apps\host
call npm install
cd ..\..

echo Installing Remote1 dependencies...
cd apps\remote1
call npm install
cd ..\..

echo Installing Remote2 dependencies...
cd apps\remote2
call npm install
cd ..\..

echo All dependencies installed successfully!
pause