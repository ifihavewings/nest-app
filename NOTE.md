1. 代码解释

```ts
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
```
- @Injectable : 表示 HttpService 这个类可以被作为 provider 使用， 可以作为依赖被注入其他的地方；
- @Inject('HTTP_OPTIONS') 表示 httpClient 这个属性会将 'HTTP_OPTIONS' 这个依赖的属性注入到 httpClient 对象上
- 'HTTP_OPTIONS' 是一个在其他地方定义的 provider ， 可以是如下的样子：
    ```ts
        @Module({
        providers: [
            {
            provide: 'HTTP_OPTIONS',
            useValue: { baseURL: 'https://api.example.com', timeout: 5000 },
            },
        ],
        })
        export class HttpModule {}
    ```

  即向 Nestjs 指定， 从 HTTP_OPTIONS 这个 provider 中读取数据， 注入到 HttpService 类的 httpClient 属性当中去。

- 使用场景： 假设你有两个不同的HTTP客户端库，AxiosInstance 和 FetchInstance。你可以这样使用这个泛型类：
```ts
const axiosService = new HttpService<AxiosInstance>();
const fetchService = new HttpService<FetchInstance>();
```
这样，axiosService 的 httpClient 就是 AxiosInstance 类型，而 fetchService 的 httpClient 就是 FetchInstance 类型。这使得 HttpService 类变得非常灵活，可以与任何类型的HTTP客户端库配合使用，而不需要为每种库写不同的服务类。