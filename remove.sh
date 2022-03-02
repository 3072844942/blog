#! /bin/bash

npm run build
scp -r ./dist txserver:../usr/local/vue/
ssh txserver > /dev/null 2>&1 << eeooff
cd ../usr/local/vue
rm -rf admin/
mv dist/ admin/
exit
eeooff
echo done!
