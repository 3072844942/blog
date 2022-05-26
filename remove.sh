#! /bin/bash

# npm run build
scp -r ./dist tx_server:../usr/local/vue/
ssh tx_server > /dev/null 2>&1 << eeooff
cd ../usr/local/vue
rm -rf blog/
mv dist/ blog/
exit
eeooff
echo done!
