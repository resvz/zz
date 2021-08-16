---
title:  "Go使用RocketMQ"
tags: Go RocketMQ
---
## rocketmq client
github：```https://github.com/apache/rocketmq-client-go```

下载： ```go get -u github.com/apache/rocketmq-client-go/v2```


测试代码：
{% highlight go %}

{% endhighlight %}

## 错误解决
### topic not exist
broker 启动参数加上```autoCreateTopicEnable=true```
或手动创建topic