const attributes = `
| Attributes      |         |         |                                             |        |
|-----------------|---------|:-------:|---------------------------------------------|:------:|
| 参数              | 说明      | 类型      | 可选值                                         | 默认值    |
| timestamp       | 时间戳     | string  | \-                                          | —      |
| hide\-timestamp | 是否隐藏时间戳 | boolean | —                                           | false  |
| placement       | 时间戳位置   | string  | top / bottom                                | bottom |
| type            | 节点类型    | string  | primary / success / warning / danger / info | \-     |
| color           | 节点颜色    | string  | hsl / hsv / hex / rgb                       | \-     |
| size            | 节点尺寸    | string  | normal / large                              | normal |
| icon            | 节点图标    | string  | —                                           | \-     |
`

const slots = `
| Slot |                    |
|------|--------------------|
| name | 说明                 |
| —    | Timeline\-Item 的内容 |
| dot  | 自定义节点              |
`

module.exports = {
    attributes,
    slots
}