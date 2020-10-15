const attributes = `
| Attributes         |                                           |                                           |                                                    |                         |
|--------------------|-------------------------------------------|:-----------------------------------------:|----------------------------------------------------|:-----------------------:|
| 参数                 | 说明                                        | 类型                                        | 可选值                                                | 默认值                     |
| value / v\-model   | 绑定值                                       | date\(TimePicker\) / string\(TimeSelect\) | —                                                  | —                       |
| readonly           | 完全只读                                      | boolean                                   | —                                                  | false                   |
| disabled           | 禁用                                        | boolean                                   | —                                                  | false                   |
| editable           | 文本框可输入                                    | boolean                                   | —                                                  | true                    |
| clearable          | 是否显示清除按钮                                  | boolean                                   | —                                                  | true                    |
| size               | 输入框尺寸                                     | string                                    | medium / small / mini                              | —                       |
| placeholder        | 非范围选择时的占位内容                               | string                                    | —                                                  | —                       |
| start\-placeholder | 范围选择时开始日期的占位内容                            | string                                    | —                                                  | —                       |
| end\-placeholder   | 范围选择时开始日期的占位内容                            | string                                    | —                                                  | —                       |
| is\-range          | 是否为时间范围选择，仅对<el\-time\-picker>有效          | boolean                                   | —                                                  | false                   |
| arrow\-control     | 是否使用箭头进行时间选择，仅对<el\-time\-picker>有效       | boolean                                   | —                                                  | false                   |
| align              | 对齐方式                                      | string                                    | left / center / right                              | left                    |
| popper\-class      | TimePicker 下拉框的类名                         | string                                    | —                                                  | —                       |
| picker\-options    | 当前时间日期选择器特有的选项参考下表                        | object                                    | —                                                  | \{\}                    |
| range\-separator   | 选择范围时的分隔符                                 | string                                    | \-                                                 | '\-'                    |
| value\-format      | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string                                    | 见日期格式                                              | —                       |
| default\-value     | 可选，选择器打开时默认显示的时间                          | Date\(TimePicker\) / string\(TimeSelect\) | 可被new Date\(\)解析\(TimePicker\) / 可选值\(TimeSelect\) | —                       |
| name               | 原生属性                                      | string                                    | —                                                  | —                       |
| prefix\-icon       | 自定义头部图标的类名                                | string                                    | —                                                  | el\-icon\-time          |
| clear\-icon        | 自定义清空图标的类名                                | string                                    | —                                                  | el\-icon\-circle\-close |
`

const options = `
| Options |                    |        |     |       |
|---------|--------------------|:------:|-----|:-----:|
| 参数      | 说明                 | 类型     | 可选值 | 默认值   |
| start   | 开始时间               | string | —   | 09:00 |
| end     | 结束时间               | string | —   | 18:00 |
| step    | 间隔时间               | string | —   | 00:30 |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | —   | 00:00 |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | —   | —     |
`

const events = `
| Events |                 |       |
|--------|-----------------|-------|
| 事件名    | 说明              | 参数    |
| change | 用户确认选定的值时触发     | 组件绑定值 |
| blur   | 当 input 失去焦点时触发 | 组件实例  |
| focus  | 当 input 获得焦点时触发 | 组件实例  |
`

const methods = `
| Methods |              |    |
|---------|--------------|----|
| 方法名     | 说明           | 参数 |
| focus   | 使 input 获取焦点 | \- |
`

module.exports = {
    attributes,
    events,
    methods
}