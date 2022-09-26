#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run dev

# 进入生成的文件夹
cd docs/.vuepress/dist

sleep 10000
