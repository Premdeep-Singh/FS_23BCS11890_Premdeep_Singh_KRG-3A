@echo off

pushd "%~dp0"
npm create vite@latest react-app-testing -- --template react
popd