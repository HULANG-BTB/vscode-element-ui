const attributes = `
| Attributes      |                              |                 |                                           |            |
|-----------------|------------------------------|:---------------:|-------------------------------------------|:----------:|
| 参数              | 说明                           | 类型              | 可选值                                       | 默认值        |
| space           | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                                         | —          |
| direction       | 显示方向                         | string          | vertical/horizontal                       | horizontal |
| active          | 设置当前激活步骤                     | number          | —                                         | 0          |
| process\-status | 设置当前步骤的状态                    | string          | wait / process / finish / error / success | process    |
| finish\-status  | 设置结束步骤的状态                    | string          | wait / process / finish / error / success | finish     |
| align\-center   | 进行居中对齐                       | boolean         | \-                                        | false      |
| simple          | 是否应用简洁风格                     | boolean         | \-                                        | false      |
`

module.exports = {
    attributes
}