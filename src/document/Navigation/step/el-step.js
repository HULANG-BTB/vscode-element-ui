const attributes = `
| Attributes  |                             |                                           |        |     |
|-------------|-----------------------------|:-----------------------------------------:|--------|:---:|
| 参数          | 说明                          | 类型                                        | 可选值    | 默认值 |
| title       | 标题                          | string                                    | —      | —   |
| description | 描述性文字                       | string                                    | —      | —   |
| icon        | 图标                          | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | —   |
| status      | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | \-     | —   |
`

const slots = `
| Slot        |          |
|-------------|----------|
| name        | 说明       |
| icon        | 自定义图标    |
| title       | 自定义标题    |
| description | 自定义描述性文字 |
`

module.exports = {
    attributes,
    slots
}