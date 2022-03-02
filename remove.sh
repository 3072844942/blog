#! /bin/bash

npm run build
scp -r ./dist txserver:../usr/local/vue/
ssh txserver > /dev/null 2>&1 << eeooff
cd ../usr/local/vue
rm -rf blog/
mv dist/ blog/
exit
eeooff
echo done!
