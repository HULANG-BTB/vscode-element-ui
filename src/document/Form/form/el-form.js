const attributes = `
| Attributes                 |                                                             |         |                       |       |
|----------------------------|-------------------------------------------------------------|:-------:|-----------------------|:-----:|
| 参数                         | 说明                                                          | 类型      | 可选值                   | 默认值   |
| model                      | 表单数据对象                                                      | object  | —                     | —     |
| rules                      | 表单验证规则                                                      | object  | —                     | —     |
| inline                     | 行内表单模式                                                      | boolean | —                     | false |
| label\-position            | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label\-width            | string  | right/left/top        | right |
| label\-width               | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form\-item 会继承该值。支持 auto。 | string  | —                     | —     |
| label\-suffix              | 表单域标签的后缀                                                    | string  | —                     | —     |
| hide\-required\-asterisk   | 是否显示必填字段的标签旁边的红色星号                                          | boolean | —                     | false |
| show\-message              | 是否显示校验错误信息                                                  | boolean | —                     | true  |
| inline\-message            | 是否以行内形式展示校验信息                                               | boolean | —                     | false |
| status\-icon               | 是否在输入框中显示校验结果反馈图标                                           | boolean | —                     | false |
| validate\-on\-rule\-change | 是否在 rules 属性改变后立即触发一次验证                                     | boolean | —                     | true  |
| size                       | 用于控制该表单内组件的尺寸                                               | string  | medium / small / mini | —     |
| disabled                   | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效            | boolean | —                     | false |
`

const events = `
| Events   |             |                                  |
|----------|-------------|----------------------------------|
| 事件名称     | 说明          | 回调参数                             |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |
`

const methods = `
| Methods       |                                                                                        |                                                                                |
|---------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 方法名           | 说明                                                                                     | 参数                                                                             |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function\(callback: Function\(boolean, object\)\)                              |
| validateField | 对部分表单字段进行校验的方法                                                                         | Function\(props: array \| string, callback: Function\(errorMessage: string\)\) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                          | —                                                                              |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                             | Function\(props: array \| string\)                                             |
`

module.exports = {
    attributes,
    events,
    methods
}