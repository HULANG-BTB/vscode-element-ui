const attributes = `
| Checkbox\-button Attributes |                                             |                           |     |       |
|-----------------------------|---------------------------------------------|:-------------------------:|-----|:-----:|
| 参数                          | 说明                                          | 类型                        | 可选值 | 默认值   |
| label                       | 选中状态的值（只有在checkbox\-group或者绑定对象类型为array时有效） | string / number / boolean | —   | —     |
| true\-label                 | 选中时的值                                       | string / number           | —   | —     |
| false\-label                | 没有选中时的值                                     | string / number           | —   | —     |
| disabled                    | 是否禁用                                        | boolean                   | —   | false |
| name                        | 原生 name 属性                                  | string                    | —   | —     |
| checked                     | 当前是否勾选                                      | boolean                   | —   | false |
`

const events = `
`

module.exports = {
    attributes,
    events
}