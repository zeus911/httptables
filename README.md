# httptables (just like Linux's iptables)
httptables是一个基于OpenResty的软防火墙，可以配合风控系统针对HTTP请求做不同的处理，目前计划支持两种响应方式

* Reject
* Delay


设计细节请查看[OUTLINE.md](OUTLINE.md)。

## 安装依赖软件
目前仅对Centos做安装说明

```
sh depends.sh
```

## 安装openresty
源码包编译安装

```
wget https://openresty.org/download/openresty-1.9.15.1.tar.gz
tar zxvf openresty-1.9.15.1.tar.gz
cd openresty-1.9.15.1/
./configure --prefix=/apps/openresty --with-http_realip_module && gmake && gmake install
```


## 安装httptables
下载后，直接运行startup.sh即可
