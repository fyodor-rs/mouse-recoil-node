@echo off&(cd/d "%~dp0")&(cacls "%SystemDrive%\System Volume Information" >nul 2>&1)||(start "" mshta vbscript:CreateObject^("Shell.Application"^).ShellExecute^("%~snx0"," %*","","runas",1^)^(window.close^)&exit /b)
if "%1"=="h" goto begin
start mshta vbscript:createobject("wscript.shell").run("""%~nx0""h",0)(window.close)&&exit
:begin
node index.js
pause