---
title:  "Java多线程学习笔记"
tags: java 多线程
---

### 容易产生线程安全问题的场景
1. 访问共享变量、共享资源
2. 依赖时序的操作（检查与执行修改不是原子操作）
3. 不同数据之间存在相互绑定关系
4. 并发情况下读写不是线程安全的对象

### 多线程带来性能问题原因
1. cpu时间分片切换调度产生性能开销
2. 程序频繁竞争锁，或频繁io阻塞导致频繁上下文切换
3. 线程之间协作有共享数据

### 线程池优点
1. 避免大量创建线程造成系统资源开销和对系统稳定性影响
2. 避免大量线程占用过多内存资源
3. 统一管理资源

### 线程池创建线程策略
线程池开始线程数都是0，随着任务提交，线程池开始创建线程，当达到corePoolSize时不再创建新线程，此时新任务将被放入workQueue中等待，当workQueue中等待的任务达到最大数量，线程池会继续创建线程，线程数达到maxPoolSize时将会拒绝新任务，大于corePoolSize数量的线程在等待keepAliveTime时间没有任务可做会被销毁

### 线程池拒绝策略
RejectedExecutionHandler接口的实现类
1. DiscardPolicy
直接丢弃新任务，存在风险
2. DiscardOldestPolicy
丢弃任务队列中头节点，存在风险
3. CallerRunsPolicy
将任务交于提交任务的线程来执行，减缓任务提交速度，降低线程池压力
4. AbortPolicy
直接抛出RejectedExecutionException的RuntimeException

### 常见线程池
FixedThreadPool
corePoolSize=maxPoolSize，固定线程数
CachedThreadPool
线程数可以达到Integer.MAX_VALUE，线程闲置进行回收，最终为0
任务队列容量为0，只负责中转传递，不存储实际任务
ScheduledThreadPool
SingleThreadExecutor
只有一个线程，确保线程执行顺序是任务提交的顺序，线程抛出异常会创建新的线程
SingleThreadScheduledExecutor

ForkJoinPool
支持拆分汇总任务
除了公用的任务队列，每个线程都有自己独立的任务队列
本线程从队列后进先出取任务，其他闲置线程采用先进先出从繁忙线程队列取任务

### 线程池阻塞队列

### 自动创建线程池的风险

### 合适的线程数
CPU密集型任务，最佳线程数为CPU核心数的1-2倍
耗时IO型任务，线程数=CPU核心数*（1+平均等待时间/平均工作做时间）


{% highlight go %}

{% endhighlight %}

