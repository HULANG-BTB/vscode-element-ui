const attributes = `
| Attributes                 |                                            |         |                       |          |
|----------------------------|--------------------------------------------|:-------:|-----------------------|:--------:|
| 参数                         | 说明                                         | 类型      | 可选值                   | 默认值      |
| value / v\-model           | 绑定值                                        | array   | —                     | —        |
| size                       | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —        |
| disabled                   | 是否禁用                                       | boolean | —                     | false    |
| min                        | 可被勾选的 checkbox 的最小数量                       | number  | —                     | —        |
| max                        | 可被勾选的 checkbox 的最大数量                       | number  | —                     | —        |
| text\-color                | 按钮形式的 Checkbox 激活时的文本颜色                    | string  | —                     | \#ffffff |
| fill                       | 按钮形式的 Checkbox 激活时的填充色和边框色                 | string  | —                     | \#409EFF |
`

const events = `
| Events                 |              |       |
|------------------------|--------------|-------|
| 事件名称                   | 说明           | 回调参数  |
| change                 | 当绑定值变化时触发的事件 | 更新后的值 |
`

module.exports = {
    attributes,
    events
}