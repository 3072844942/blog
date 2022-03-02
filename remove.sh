#! /bin/bash

scp target/blog-springboot-0.0.1.jar txserver:../usr/local/docker/
ssh txserver > /dev/null 2>&1 << eeooff
docker stop blog-springboot-0.0.1.jar
docker rm blog-springboot-0.0.1.jar
cd ../usr/local/docker
./blog-start.sh
exit
eeooff
echo done!
