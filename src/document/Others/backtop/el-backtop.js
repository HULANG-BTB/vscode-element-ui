const attributes = `
| Attributes         |                   |        |     |     |
|--------------------|-------------------|:------:|-----|:---:|
| 参数                 | 说明                | 类型     | 可选值 | 默认值 |
| target             | 触发滚动的对象           | string |     |     |
| visibility\-height | 滚动高度达到此参数值才出现     | number |     | 200 |
| right              | 控制其显示位置, 距离页面右边距  | number |     | 40  |
| bottom             | 控制其显示位置, 距离页面底部距离 | number |     | 40  |
`

const events = `
| Events |           |      |
|--------|-----------|------|
| 事件名    | 说明        | 回调参数 |
| click  | 点击按钮触发的事件 | 点击事件 |
`

module.exports = {
    attributes,
    events
}