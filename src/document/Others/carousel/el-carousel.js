const attributes = `
| Attributes          |                      |         |                     |            |
|---------------------|----------------------|:-------:|---------------------|:----------:|
| 参数                  | 说明                   | 类型      | 可选值                 | 默认值        |
| height              | 走马灯的高度               | string  | —                   | —          |
| initial\-index      | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                   | 0          |
| trigger             | 指示器的触发方式             | string  | click               | —          |
| autoplay            | 是否自动切换               | boolean | —                   | true       |
| interval            | 自动切换的时间间隔，单位为毫秒      | number  | —                   | 3000       |
| indicator\-position | 指示器的位置               | string  | outside/none        | —          |
| arrow               | 切换箭头的显示时机            | string  | always/hover/never  | hover      |
| type                | 走马灯的类型               | string  | card                | —          |
| loop                | 是否循环显示               | boolean | \-                  | true       |
| direction           | 走马灯展示的方向             | string  | horizontal/vertical | horizontal |
`

const events = `
| Events |          |                     |
|--------|----------|---------------------|
| 事件名称   | 说明       | 回调参数                |
| change | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |
`

const methods = `
| Methods       |           |                                                      |
|---------------|-----------|------------------------------------------------------|
| 方法名           | 说明        | 参数                                                   |
| setActiveItem | 手动切换幻灯片   | 需要切换的幻灯片的索引，从 0 开始；或相应 el\-carousel\-item 的 name 属性值 |
| prev          | 切换至上一张幻灯片 | —                                                    |
| next          | 切换至下一张幻灯片 | —                                                    |
`

module.exports = {
    attributes,
    events,
    methods
}