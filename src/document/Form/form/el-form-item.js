const attributes = `
| Attributes      |                                                      |         |                        |       |
|-----------------|------------------------------------------------------|:-------:|------------------------|:-----:|
| 参数              | 说明                                                   | 类型      | 可选值                    | 默认值   |
| prop            | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 model 中的字段 | —     |
| label           | 标签文本                                                 | string  | —                      | —     |
| label\-width    | 表单域标签的的宽度，例如 '50px'。支持 auto。                         | string  | —                      | —     |
| required        | 是否必填，如不设置，则会根据校验规则自动生成                               | boolean | —                      | false |
| rules           | 表单验证规则                                               | object  | —                      | —     |
| error           | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息              | string  | —                      | —     |
| show\-message   | 是否显示校验错误信息                                           | boolean | —                      | true  |
| inline\-message | 以行内形式展示校验信息                                          | boolean | —                      | false |
| size            | 用于控制该表单域下组件的尺寸                                       | string  | medium / small / mini  | \-    |
`

const slots = `
| Slot  |               |
|-------|---------------|
| name  | 说明            |
| —     | Form Item 的内容 |
| label | 标签文本的内容       |
`

const scopedSlots = `
| Scoped Slot |                                |
|-------------|--------------------------------|
| name        | 说明                             |
| error       | 自定义表单校验信息的显示方式，参数为 \{ error \} |
`

const methods = `
| Methods       |                            |    |
|---------------|----------------------------|----|
| 方法名           | 说明                         | 参数 |
| resetField    | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | \- |
| clearValidate | 移除该表单项的校验结果                |    |
`

module.exports = {
    attributes,
    slots,
    scopedSlots,
    methods
}