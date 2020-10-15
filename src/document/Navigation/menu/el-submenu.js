const attributes = `
| Attribute                |                                         |             |     |                           |
|--------------------------|-----------------------------------------|:-----------:|-----|:-------------------------:|
| 参数                       | 说明                                      | 类型          | 可选值 | 默认值                       |
| index                    | 唯一标志                                    | string/null | —   | null                      |
| popper\-class            | 弹出菜单的自定义类名                              | string      | —   | —                         |
| show\-timeout            | 展开 sub\-menu 的延时                        | number      | —   | 300                       |
| hide\-timeout            | 收起 sub\-menu 的延时                        | number      | —   | 300                       |
| disabled                 | 是否禁用                                    | boolean     | —   | false                     |
| popper\-append\-to\-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean     | —   | 一级子菜单：true / 非一级子菜单：false |
`

module.exports = {
    attributes
}