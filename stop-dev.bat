@echo off
echo Stopping development servers...
npx kill-port 5000 50001 50002 50003
pause