#node镜像版本
FROM testcafe/testcafe 
USER root
RUN cd /opt/testcafe && ls &&  npm i fs.promised koa koa-bodyparser koa-router koa-static

RUN cat /opt/testcafe/package.json
#作者
# MAINTAINER LUNA

#在image中创建文件夹
# RUN mkdir -p /home/Service41024

# RUN ls
#将该文件夹作为工作目录
# WORKDIR /home/Service41024

# 将node工程下所有文件拷贝到Image下的文件夹中
# COPY . /home/Service41024

# RUN ls

#使用RUN命令执行npm install安装工程依赖库
# RUN yarn

#暴露给主机的端口号
# EXPOSE 8888
#执行npm start命令，启动Node工程
# CMD [ "yarn", "start" ]
