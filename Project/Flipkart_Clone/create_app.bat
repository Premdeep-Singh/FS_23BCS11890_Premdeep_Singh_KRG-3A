@echo off

pushd "%~dp0"
npm create vite@latest frontend -- --template react
popd