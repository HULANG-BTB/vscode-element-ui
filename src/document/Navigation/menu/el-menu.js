const attributes = `
| Attribute            |                                                         |         |                       |          |
|----------------------|---------------------------------------------------------|:-------:|-----------------------|:--------:|
| 参数                   | 说明                                                      | 类型      | 可选值                   | 默认值      |
| mode                 | 模式                                                      | string  | horizontal / vertical | vertical |
| collapse             | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                      | boolean | —                     | false    |
| background\-color    | 菜单的背景色（仅支持 hex 格式）                                      | string  | —                     | \#ffffff |
| text\-color          | 菜单的文字颜色（仅支持 hex 格式）                                     | string  | —                     | \#303133 |
| active\-text\-color  | 当前激活菜单的文字颜色（仅支持 hex 格式）                                 | string  | —                     | \#409EFF |
| default\-active      | 当前激活菜单的 index                                           | string  | —                     | —        |
| default\-openeds     | 当前打开的 sub\-menu 的 index 的数组                             | Array   | —                     | —        |
| unique\-opened       | 是否只保持一个子菜单的展开                                           | boolean | —                     | false    |
| menu\-trigger        | 子菜单打开的触发方式\(只在 mode 为 horizontal 时有效\)                  | string  | hover / click         | hover    |
| router               | 是否使用 vue\-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false    |
| collapse\-transition | 是否开启折叠动画                                                | boolean | —                     | true     |
`

const events = `
| Events |                 |                                                                     |
|--------|-----------------|---------------------------------------------------------------------|
| 事件名称   | 说明              | 回调参数                                                                |
| select | 菜单激活回调          | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path                   |
| open   | sub\-menu 展开的回调 | index: 打开的 sub\-menu 的 index， indexPath: 打开的 sub\-menu 的 index path |
| close  | sub\-menu 收起的回调 | index: 收起的 sub\-menu 的 index， indexPath: 收起的 sub\-menu 的 index path |
`

const methods = `
| Methods |                 |                                |
|---------|-----------------|--------------------------------|
| 方法名称    | 说明              | 参数                             |
| open    | 展开指定的 sub\-menu | index: 需要打开的 sub\-menu 的 index |
| close   | 收起指定的 sub\-menu | index: 需要收起的 sub\-menu 的 index |
`

module.exports = {
    attributes,
    events,
    methods
}