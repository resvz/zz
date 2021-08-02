---
title:  "prometheus学习笔记"
tags: prometheus 监控
---
# 安装prometheus
## 下载prometheus
```https://prometheus.io/download/```
## 安装启动
```
# tar xf prometheus-2.28.1.linux-amd64.tar.gz -C /usr/local/
# mv /usr/local/prometheus-2.28.1.linux-amd64/ /usr/local/prometheus
# /usr/local/prometheus/prometheus --config.file="/usr/local/prometheus/prometheus.yml"
```
## 配置systemctl
```vim /usr/lib/systemd/system/prometheus.service```
```
[Unit]
Description=Prometheus
[Service]
ExecStart=/usr/local/prometheus/prometheus --config.file=/usr/local/prometheus/prometheus.yml
#config.file=/usr/local/prometheus/prometheus.yml
#storage.tsdb.path=/data/prometheus --web.enable-lifecycle  //存储路径
#storage.tsdb.retention.time=180d	//存储时间
Restart=on-failure
[Install]
WantedBy=multi-user.target
```
## 验证
```ss -naltp | grep 9090```
![avatar](/img/20210802172848.jpg)

浏览器打开ip:9090
![avatar](/img/20210802180343.jpg)

# 监控主机
## 下载node_exporter
```https://github.com/prometheus/node_exporter/releases```
## 安装启动
```
# tar xf node_exporter-1.2.0.linux-amd64.tar.gz -C /usr/local/
# mv /usr/local/node_exporter-1.2.0.linux-amd64/ node_exporter
# nohup /usr/local/node_exporter/node_exporter &
```
## 修改prometheus配置文件
```vim /usr/local/prometheus/prometheus.yml```
![avatar](/img/20210802182158.jpg)
## 重启prometheus
```
# pkill prometheus
# /usr/local/prometheus/prometheus --config.file="/usr/local/prometheus/prometheus.yml" &
```
## 验证
浏览器访问：ip:9100，可以看到node_exporter收集到的监控信息

prometheus界面选择 Status -> Targets
![avatar](/img/20210802182555.jpg)

## 下载grafana
```https://grafana.com/grafana/download```



{% highlight go %}

{% endhighlight %}
