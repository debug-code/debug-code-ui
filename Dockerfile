FROM  node:12.6.0-alpine


WORKDIR /workspace
ADD ./ /workspace



# 运行的环境变量设置
ENV RUN_MODE pro

EXPOSE 8070

CMD ["node","server.js"]

