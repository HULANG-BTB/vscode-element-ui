const attributes = `
| Attributes         |                             |                      |                                             |                                     |
|--------------------|-----------------------------|:--------------------:|---------------------------------------------|:-----------------------------------:|
| 参数                 | 说明                          | 类型                   | 可选值                                         | 默认值                                 |
| src                | 图片源，同原生                     | string               | —                                           | \-                                  |
| fit                | 确定图片如何适应容器框，同原生 object\-fit | string               | fill / contain / cover / none / scale\-down | \-                                  |
| alt                | 原生 alt                      | string               | \-                                          | \-                                  |
| referrer\-policy   | 原生 referrerPolicy           | string               | \-                                          | \-                                  |
| lazy               | 是否开启懒加载                     | boolean              | —                                           | false                               |
| scroll\-container  | 开启懒加载后，监听 scroll 事件的容器      | string / HTMLElement | —                                           | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| preview\-src\-list | 开启图片预览功能                    | Array                | —                                           | \-                                  |
| z\-index           | 设置图片预览的 z\-index            | Number               | —                                           | 2000                                |
`

const events = `
| Events |          |              |
|--------|----------|--------------|
| 事件名称   | 说明       | 回调参数         |
| load   | 图片加载成功触发 | \(e: Event\) |
| error  | 图片加载失败触发 | \(e: Error\) |
`

const slots = `
| Slots       |            |
|-------------|------------|
| 名称          | 说明         |
| placeholder | 图片未加载的占位内容 |
| error       | 加载失败的内容    |
`

module.exports = {
    attributes,
    events,
    slots
}