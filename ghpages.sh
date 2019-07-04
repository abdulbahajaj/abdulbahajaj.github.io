npm run-script build
chmod 775 build
cd build
git init
git remote add origin https://github.com/abdulbahajaj/abdulbahajaj.github.io.git
git branch --set-upstream-to=origin/master master
git add .
git commit -m "updating build"
git push origin master --force
