const attributes = `
| Attributes          |                                             |                           |                       |       |
|---------------------|---------------------------------------------|:-------------------------:|-----------------------|:-----:|
| 参数                  | 说明                                          | 类型                        | 可选值                   | 默认值   |
| value / v\-model    | 绑定值                                         | string / number / boolean | —                     | —     |
| label               | 选中状态的值（只有在checkbox\-group或者绑定对象类型为array时有效） | string / number / boolean | —                     | —     |
| true\-label         | 选中时的值                                       | string / number           | —                     | —     |
| false\-label        | 没有选中时的值                                     | string / number           | —                     | —     |
| disabled            | 是否禁用                                        | boolean                   | —                     | false |
| border              | 是否显示边框                                      | boolean                   | —                     | false |
| size                | Checkbox 的尺寸，仅在 border 为真时有效                | string                    | medium / small / mini | —     |
| name                | 原生 name 属性                                  | string                    | —                     | —     |
| checked             | 当前是否勾选                                      | boolean                   | —                     | false |
| indeterminate       | 设置 indeterminate 状态，只负责样式控制                 | boolean                   | —                     | false |
`

const events = `
| Events          |              |       |
|-----------------|--------------|-------|
| 事件名称            | 说明           | 回调参数  |
| change          | 当绑定值变化时触发的事件 | 更新后的值 |
`

module.exports = {
    attributes,
    events
}