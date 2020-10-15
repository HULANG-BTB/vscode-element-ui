const attributes = `
| Attributes      |                                                    |         |                                                          |             |
|-----------------|----------------------------------------------------|:-------:|----------------------------------------------------------|:-----------:|
| 参数              | 说明                                                 | 类型      | 可选值                                                      | 默认值         |
| type            | 菜单按钮类型，同 Button 组件\(只在split\-button为 true 的情况下有效\) | string  | —                                                        | —           |
| size            | 菜单尺寸，在split\-button为 true 的情况下也对触发按钮生效             | string  | medium / small / mini                                    | —           |
| split\-button   | 下拉触发元素呈现为按钮组                                       | boolean | —                                                        | false       |
| placement       | 菜单弹出位置                                             | string  | top/top\-start/top\-end/bottom/bottom\-start/bottom\-end | bottom\-end |
| trigger         | 触发下拉的行为                                            | string  | hover, click                                             | hover       |
| hide\-on\-click | 是否在点击菜单项后隐藏菜单                                      | boolean | —                                                        | true        |
| show\-timeout   | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                  | number  | —                                                        | 250         |
| hide\-timeout   | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）                  | number  | —                                                        | 150         |
| tabindex        | Dropdown 组件的 tabindex                              | number  | —                                                        | 0           |
`

const events = `
| Events          |                                  |                      |
|-----------------|----------------------------------|----------------------|
| 事件名称            | 说明                               | 回调参数                 |
| click           | split\-button 为 true 时，点击左侧按钮的回调 | —                    |
| command         | 点击菜单项触发的事件回调                     | dropdown\-item 的指令   |
| visible\-change | 下拉框出现/隐藏时触发                      | 出现则为 true，隐藏则为 false |
`

const slots = `
| Slots    |                                  |
|----------|----------------------------------|
| Name     | 说明                               |
| —        | 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件   |
| dropdown | 下拉列表，通常是 <el\-dropdown\-menu> 组件 |
`

module.exports = {
    attributes,
    events,
    slots
}