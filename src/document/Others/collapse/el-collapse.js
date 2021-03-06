const attributes = `
| Attributes       |                                             |                |     |       |
|------------------|---------------------------------------------|:--------------:|-----|:-----:|
| 参数               | 说明                                          | 类型             | 可选值 | 默认值   |
| value / v\-model | 当前激活的面板\(如果是手风琴模式，绑定值类型需要为string，否则为array\) | string / array | —   | —     |
| accordion        | 是否手风琴模式                                     | boolean        | —   | false |
`

const events = `
| Events |                                                           |                                 |
|--------|-----------------------------------------------------------|---------------------------------|
| 事件名称   | 说明                                                        | 回调参数                            |
| change | 当前激活面板改变时触发\(如果是手风琴模式，参数 activeNames 类型为string，否则为array\) | \(activeNames: array / string\) |
`

module.exports = {
    attributes,
    events
}