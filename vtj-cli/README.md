# vtj

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run serve
```

### Compiles and minifies for production

```
pnpm run build
```

### Run your unit tests

```
pnpm run test:unit
```

### Lints and fixes files

```
pnpm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### vue3 建议 当你使用 TS+volar 时，关闭 vscode 内置的 typescript 服务，避免同一个项目进行两遍 ts 类型校验

### vue Test utils

- 使用 mount 渲染一个组件
- 使用 get() 和 findAll() 去查找 DOM
- trigger() 和 setValue() 模拟用户行为
- DOM 元素是异步更新的，所以确保 test 中要使用 async/await
- Testing 通常包括三个步骤：arrange、act and assert (准备、行动、断言)

- Use find() along with exists() to verify whether an element is in the DOM.
- Use get() if you expect the element to be in the DOM.
- The data mounting option can be used to set default values on a component.
- Use get() with isVisible() to verify the visibility of an element that is in the DOM.

#### 编写组件之前建议先编写测试用例
