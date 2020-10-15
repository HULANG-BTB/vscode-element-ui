const attributes = `
| Attributes        |                                                        |                           |                       |         |
|-------------------|--------------------------------------------------------|:-------------------------:|-----------------------|:-------:|
| 参数                | 说明                                                     | 类型                        | 可选值                   | 默认值     |
| value / v\-model  | 选中项绑定值                                                 | \-                        | —                     | —       |
| options           | 可选项数据源，键名可通过 Props 属性配置                                | array                     | —                     | —       |
| props             | 配置选项，具体见下表                                             | object                    | —                     | —       |
| size              | 尺寸                                                     | string                    | medium / small / mini | —       |
| placeholder       | 输入框占位文本                                                | string                    | —                     | 请选择     |
| disabled          | 是否禁用                                                   | boolean                   | —                     | false   |
| clearable         | 是否支持清空选项                                               | boolean                   | —                     | false   |
| show\-all\-levels | 输入框中是否显示选中值的完整路径                                       | boolean                   | —                     | true    |
| collapse\-tags    | 多选模式下是否折叠Tag                                           | boolean                   | \-                    | false   |
| separator         | 选项分隔符                                                  | string                    | —                     | 斜杠' / ' |
| filterable        | 是否可搜索选项                                                | boolean                   | —                     | —       |
| filter\-method    | 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中  | function\(node, keyword\) | \-                    | \-      |
| debounce          | 搜索关键词输入的去抖延迟，毫秒                                        | number                    | —                     | 300     |
| before\-filter    | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function\(value\)         | —                     | —       |
| popper\-class     | 自定义浮层类名                                                | string                    | —                     | —       |
`

const events = `
| Events          |                 |                      |
|-----------------|-----------------|----------------------|
| 事件名称            | 说明              | 回调参数                 |
| change          | 当选中节点变化时触发      | 选中节点的值               |
| expand\-change  | 当展开节点发生变化时触发    | 各父级选项值组成的数组          |
| blur            | 当失去焦点时触发        | \(event: Event\)     |
| focus           | 当获得焦点时触发        | \(event: Event\)     |
| visible\-change | 下拉框出现/隐藏时触发     | 出现则为 true，隐藏则为 false |
| remove\-tag     | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值        |
`

const methods = `
| Methods         |         |                                  |
|-----------------|---------|----------------------------------|
| 方法名             | 说明      | 参数                               |
| getCheckedNodes | 获取选中的节点 | \(leafOnly\) 是否只是叶子节点，默认值为 false |
`

const slots = `
| Slots |                                                      |
|-------|------------------------------------------------------|
| 名称    | 说明                                                   |
| \-    | 自定义备选项的节点内容，参数为 \{ node, data \}，分别为当前节点的 Node 对象和数据 |
| empty | 无匹配选项时的内容                                            |
`

module.exports = {
    attributes,
    events,
    methods,
    slots
}