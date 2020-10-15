const attributes = `
| Attributes |    |        |     |     |
|------------|----|:------:|-----|:---:|
| 参数         | 说明 | 类型     | 可选值 | 默认值 |
| title      | 标题 | string | —   | 返回  |
| content    | 内容 | string | —   | —   |
`

const events = `
| Events |          |      |
|--------|----------|------|
| 事件名称   | 说明       | 回调参数 |
| back   | 点击左侧区域触发 | —    |
`

const slots = `
| Slots   |      |
|---------|------|
| 事件名称    | 说明   |
| title   | 标题内容 |
| content | 内容   |
`

module.exports = {
    attributes,
    events,
    slots
}