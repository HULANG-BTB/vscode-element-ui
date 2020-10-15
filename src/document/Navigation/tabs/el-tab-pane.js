const attributes = `
| Attributes |                              |         |     |                              |
|------------|------------------------------|:-------:|-----|:----------------------------:|
| 参数         | 说明                           | 类型      | 可选值 | 默认值                          |
| label      | 选项卡标题                        | string  | —   | —                            |
| disabled   | 是否禁用                         | boolean | —   | false                        |
| name       | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string  | —   | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable   | 标签是否可关闭                      | boolean | —   | false                        |
| lazy       | 标签是否延迟渲染                     | boolean | —   | false                        |
`

module.exports = {
    attributes
}