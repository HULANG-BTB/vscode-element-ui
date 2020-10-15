const attributes = `
| Attributes               |                                                                |                                   |                                                                    |               |
|--------------------------|----------------------------------------------------------------|:---------------------------------:|--------------------------------------------------------------------|:-------------:|
| 参数                       | 说明                                                             | 类型                                | 可选值                                                                | 默认值           |
| placeholder              | 输入框占位文本                                                        | string                            | —                                                                  | —             |
| disabled                 | 禁用                                                             | boolean                           | —                                                                  | false         |
| value\-key               | 输入建议对象中用于显示的键名                                                 | string                            | —                                                                  | value         |
| value                    | 必填值，输入绑定值                                                      | string                            | —                                                                  | —             |
| debounce                 | 获取输入建议的去抖延时                                                    | number                            | —                                                                  | 300           |
| placement                | 菜单弹出位置                                                         | string                            | top / top\-start / top\-end / bottom / bottom\-start / bottom\-end | bottom\-start |
| fetch\-suggestions       | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback\(data:\[\]\) 来返回它 | Function\(queryString, callback\) | —                                                                  | —             |
| popper\-class            | Autocomplete 下拉列表的类名                                           | string                            | —                                                                  | —             |
| trigger\-on\-focus       | 是否在输入框 focus 时显示建议列表                                           | boolean                           | —                                                                  | true          |
| name                     | 原生属性                                                           | string                            | —                                                                  | —             |
| select\-when\-unmatched  | 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件                             | boolean                           | —                                                                  | false         |
| label                    | 输入框关联的label文字                                                  | string                            | —                                                                  | —             |
| prefix\-icon             | 输入框头部图标                                                        | string                            | —                                                                  | —             |
| suffix\-icon             | 输入框尾部图标                                                        | string                            | —                                                                  | —             |
| hide\-loading            | 是否隐藏远程加载时的加载图标                                                 | boolean                           | —                                                                  | false         |
| popper\-append\-to\-body | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false                | boolean                           | \-                                                                 | true          |
| highlight\-first\-item   | 是否默认突出显示远程搜索建议中的第一项                                            | boolean                           | —                                                                  | false         |
`

const slots = `
| Scoped Slot              |                        |
|--------------------------|------------------------|
| name                     | 说明                     |
| —                        | 自定义输入建议，参数为 \{ item \} |
`

const events = `
| Events              |                |                             |
|---------------------|----------------|-----------------------------|
| 事件名称                | 说明             | 回调参数                        |
| select              | 点击选中建议项时触发     | 选中建议项                       |
| change              | 在 Input 值改变时触发 | \(value: string \| number\) |
`

const methods = `
| Methods              |              |    |
|----------------------|--------------|----|
| 方法名                  | 说明           | 参数 |
| focus                | 使 input 获取焦点 | \- |
`

module.exports = {
    attributes,
    slots,
    events,
    methods
}