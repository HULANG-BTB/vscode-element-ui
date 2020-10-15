const attributes = `
| Attributes  |                      |         |                            |       |
|-------------|----------------------|:-------:|----------------------------|:-----:|
| 参数          | 说明                   | 类型      | 可选值                        | 默认值   |
| title       | 标题                   | string  | —                          | —     |
| type        | 主题                   | string  | success/warning/info/error | info  |
| description | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —     |
| closable    | 是否可关闭                | boolean | —                          | true  |
| center      | 文字是否居中               | boolean | —                          | true  |
| close\-text | 关闭按钮自定义文本            | string  | —                          | —     |
| show\-icon  | 是否显示图标               | boolean | —                          | false |
| effect      | 选择提供的主题              | string  | light/dark                 | light |
`

const events = `
| Events |               |      |
|--------|---------------|------|
| 事件名称   | 说明            | 回调参数 |
| close  | 关闭alert时触发的事件 | —    |
`

const slots = `
| Slot  |             |
|-------|-------------|
| Name  | Description |
| —     | 描述          |
| title | 标题的内容       |
`

module.exports = {
    attributes,
    events,
    slots
}