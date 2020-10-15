const attributes = `
| Attributes           |          |         |                             |       |
|----------------------|----------|:-------:|-----------------------------|:-----:|
| 参数                   | 说明       | 类型      | 可选值                         | 默认值   |
| type                 | 类型       | string  | success/info/warning/danger | —     |
| closable             | 是否可关闭    | boolean | —                           | false |
| disable\-transitions | 是否禁用渐变动画 | boolean | —                           | false |
| hit                  | 是否有边框描边  | boolean | —                           | false |
| color                | 背景色      | string  | —                           | —     |
| size                 | 尺寸       | string  | medium / small / mini       | —     |
| effect               | 主题       | string  | dark / light / plain        | light |
`

const events = `
| Events |               |      |
|--------|---------------|------|
| 事件名称   | 说明            | 回调参数 |
| click  | 点击 Tag 时触发的事件 | —    |
| close  | 关闭 Tag 时触发的事件 | —    |
`

module.exports = {
    attributes,
    events
}