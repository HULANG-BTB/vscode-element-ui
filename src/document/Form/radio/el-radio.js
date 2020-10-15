const attributes = `
| Attributes       |                           |                           |                       |       |
|------------------|---------------------------|:-------------------------:|-----------------------|:-----:|
| 参数               | 说明                        | 类型                        | 可选值                   | 默认值   |
| value / v\-model | 绑定值                       | string / number / boolean | —                     | —     |
| label            | Radio 的 value             | string / number / boolean | —                     | —     |
| disabled         | 是否禁用                      | boolean                   | —                     | false |
| border           | 是否显示边框                    | boolean                   | —                     | false |
| size             | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —     |
| name             | 原生 name 属性                | string                    | —                     | —     |
`

const events = `
| Events        |             |                   |
|---------------|-------------|-------------------|
| 事件名称          | 说明          | 回调参数              |
| change        | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
`

module.exports = {
    attributes,
    events
}