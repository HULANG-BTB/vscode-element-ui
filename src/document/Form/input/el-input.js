const attributes = `
| Attributes        |                                                                    |                  |                                     |       |
|-------------------|--------------------------------------------------------------------|:----------------:|-------------------------------------|:-----:|
| 参数                | 说明                                                                 | 类型               | 可选值                                 | 默认值   |
| type              | 类型                                                                 | string           | text，textarea 和其他 原生 input 的 type 值 | text  |
| value / v\-model  | 绑定值                                                                | string / number  | —                                   | —     |
| maxlength         | 原生属性，最大输入长度                                                        | number           | —                                   | —     |
| minlength         | 原生属性，最小输入长度                                                        | number           | —                                   | —     |
| show\-word\-limit | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效                | boolean          | —                                   | false |
| placeholder       | 输入框占位文本                                                            | string           | —                                   | —     |
| clearable         | 是否可清空                                                              | boolean          | —                                   | false |
| show\-password    | 是否显示切换密码图标                                                         | boolean          | —                                   | false |
| disabled          | 禁用                                                                 | boolean          | —                                   | false |
| size              | 输入框尺寸，只在 type\!="textarea" 时有效                                     | string           | medium / small / mini               | —     |
| prefix\-icon      | 输入框头部图标                                                            | string           | —                                   | —     |
| suffix\-icon      | 输入框尾部图标                                                            | string           | —                                   | —     |
| rows              | 输入框行数，只对 type="textarea" 有效                                        | number           | —                                   | 2     |
| autosize          | 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，\{ minRows: 2, maxRows: 6 \} | boolean / object | —                                   | false |
| autocomplete      | 原生属性，自动补全                                                          | string           | on, off                             | off   |
| auto\-complete    | 下个主版本弃用                                                            | string           | on, off                             | off   |
| name              | 原生属性                                                               | string           | —                                   | —     |
| readonly          | 原生属性，是否只读                                                          | boolean          | —                                   | false |
| max               | 原生属性，设置最大值                                                         | —                | —                                   | —     |
| min               | 原生属性，设置最小值                                                         | —                | —                                   | —     |
| step              | 原生属性，设置输入字段的合法数字间隔                                                 | —                | —                                   | —     |
| resize            | 控制是否能被用户缩放                                                         | string           | none, both, horizontal, vertical    | —     |
| autofocus         | 原生属性，自动获取焦点                                                        | boolean          | true, false                         | false |
| form              | 原生属性                                                               | string           | —                                   | —     |
| label             | 输入框关联的label文字                                                      | string           | —                                   | —     |
| tabindex          | 输入框的tabindex                                                       | string           | \-                                  | \-    |
| validate\-event   | 输入时是否触发表单的校验                                                       | boolean          | \-                                  | true  |
`

const slots = `
| Slots       |                           |
|-------------|---------------------------|
| name        | 说明                        |
| prefix      | 输入框头部内容，只对 type="text" 有效 |
| suffix      | 输入框尾部内容，只对 type="text" 有效 |
| prepend     | 输入框前置内容，只对 type="text" 有效 |
| append      | 输入框后置内容，只对 type="text" 有效 |
`

const events = `
| Events       |                             |                             |
|--------------|-----------------------------|-----------------------------|
| 事件名称         | 说明                          | 回调参数                        |
| blur         | 在 Input 失去焦点时触发             | \(event: Event\)            |
| focus        | 在 Input 获得焦点时触发             | \(event: Event\)            |
| change       | 仅在输入框失去焦点或用户按下回车时触发         | \(value: string \| number\) |
| input        | 在 Input 值改变时触发              | \(value: string \| number\) |
| clear        | 在点击由 clearable 属性生成的清空按钮时触发 | —                           |
`

const methods = `
| Input Methods |               |    |
|---------------|---------------|----|
| 方法名           | 说明            | 参数 |
| focus         | 使 input 获取焦点  | —  |
| blur          | 使 input 失去焦点  | —  |
| select        | 选中 input 中的文字 | —  |
`

module.exports = {
    attributes,
    slots,
    events,
    methods
}