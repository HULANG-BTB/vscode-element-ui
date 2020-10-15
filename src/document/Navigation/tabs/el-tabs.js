const attributes = `
| Attributes       |                                                   |                                       |                       |              |
|------------------|---------------------------------------------------|:-------------------------------------:|-----------------------|:------------:|
| 参数               | 说明                                                | 类型                                    | 可选值                   | 默认值          |
| value / v\-model | 绑定值，选中选项卡的 name                                   | string                                | —                     | 第一个选项卡的 name |
| type             | 风格类型                                              | string                                | card/border\-card     | —            |
| closable         | 标签是否可关闭                                           | boolean                               | —                     | false        |
| addable          | 标签是否可增加                                           | boolean                               | —                     | false        |
| editable         | 标签是否同时可增加和关闭                                      | boolean                               | —                     | false        |
| tab\-position    | 选项卡所在位置                                           | string                                | top/right/bottom/left | top          |
| stretch          | 标签的宽度是否自撑开                                        | boolean                               | \-                    | false        |
| before\-leave    | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function\(activeName, oldActiveName\) | —                     | —            |
`

const events = `
| Events      |                           |                        |
|-------------|---------------------------|------------------------|
| 事件名称        | 说明                        | 回调参数                   |
| tab\-click  | tab 被选中时触发                | 被选中的标签 tab 实例          |
| tab\-remove | 点击 tab 移除按钮后触发            | 被删除的标签的 name           |
| tab\-add    | 点击 tabs 的新增按钮后触发          | —                      |
| edit        | 点击 tabs 的新增按钮或 tab 被关闭后触发 | \(targetName, action\) |
`

module.exports = {
    attributes,
    events
}