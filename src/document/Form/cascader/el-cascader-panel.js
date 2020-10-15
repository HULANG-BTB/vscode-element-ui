const attributes = `
| Attributes       |                         |        |     |     |
|------------------|-------------------------|--------|-----|-----|
| 参数               | 说明                      | 类型     | 可选值 | 默认值 |
| value / v\-model | 选中项绑定值                  | \-     | —   | —   |
| options          | 可选项数据源，键名可通过 Props 属性配置 | array  | —   | —   |
| props            | 配置选项，具体见下表              | object | —   | —   |
`

const events = `
| Events         |              |             |
|----------------|--------------|-------------|
| 事件名称           | 说明           | 回调参数        |
| change         | 当选中节点变化时触发   | 选中节点的值      |
| expand\-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |
`

const methods = `
| Methods           |           |                                  |
|-------------------|-----------|----------------------------------|
| 方法名               | 说明        | 参数                               |
| getCheckedNodes   | 获取选中的节点数组 | \(leafOnly\) 是否只是叶子节点，默认值为 false |
| clearCheckedNodes | 清空选中的节点   | \-                               |
`

const slots = `
| Slots |                                                      |
|-------|------------------------------------------------------|
| 名称    | 说明                                                   |
| \-    | 自定义备选项的节点内容，参数为 \{ node, data \}，分别为当前节点的 Node 对象和数据 |
`

const props = `
| Props         |                                                      |                                                                  |               |            |
|---------------|------------------------------------------------------|------------------------------------------------------------------|---------------|------------|
| 参数            | 说明                                                   | 类型                                                               | 可选值           | 默认值        |
| expandTrigger | 次级菜单的展开方式                                            | string                                                           | click / hover | 'click'    |
| multiple      | 是否多选                                                 | boolean                                                          | \-            | false      |
| checkStrictly | 是否严格的遵守父子节点不互相关联                                     | boolean                                                          | \-            | false      |
| emitPath      | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean                                                          | \-            | true       |
| lazy          | 是否动态加载子节点，需与 lazyLoad 方法结合使用                         | boolean                                                          | \-            | false      |
| lazyLoad      | 加载动态数据的方法，仅在 lazy 为 true 时有效                         | function\(node, resolve\)，node为当前点击的节点，resolve为数据加载完成的回调\(必须调用\) | \-            | \-         |
| value         | 指定选项的值为选项对象的某个属性值                                    | string                                                           | —             | 'value'    |
| label         | 指定选项标签为选项对象的某个属性值                                    | string                                                           | —             | 'label'    |
| children      | 指定选项的子选项为选项对象的某个属性值                                  | string                                                           | —             | 'children' |
| disabled      | 指定选项的禁用为选项对象的某个属性值                                   | string                                                           | —             | 'disabled' |
| leaf          | 指定选项的叶子节点的标志位为选项对象的某个属性值                             | string                                                           | —             | 'leaf'     |
`

module.exports = {
    attributes,
    events,
    methods,
    slots,
    props
}