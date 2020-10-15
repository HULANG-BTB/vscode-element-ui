const attributes = `
| Attributes |                                   |               |                                             |        |
|------------|-----------------------------------|:-------------:|---------------------------------------------|:------:|
| 参数         | 说明                                | 类型            | 可选值                                         | 默认值    |
| icon       | 设置头像的图标类型，参考 Icon 组件              | string        |                                             |        |
| size       | 设置头像的大小                           | number/string | number / large / medium / small             | large  |
| shape      | 设置头像的形状                           | string        | circle / square                             | circle |
| src        | 图片头像的资源地址                         | string        |                                             |        |
| srcSet     | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string        |                                             |        |
| alt        | 描述图像的替换文本                         | string        |                                             |        |
| fit        | 当展示类型为图片的时候，设置图片如何适应容器框           | string        | fill / contain / cover / none / scale\-down | cover  |
`

const events = `
| Events |                                             |              |
|--------|---------------------------------------------|--------------|
| 事件名    | 说明                                          | 回调参数         |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 | \(e: Event\) |
`

const slots = `
| Slot    |           |
|---------|-----------|
| 名称      | 说明        |
| default | 自定义头像展示内容 |
`

module.exports = {
    attributes,
    events,
    slots
}