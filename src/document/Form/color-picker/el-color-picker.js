const attributes = `
| Attributes       |                    |         |                       |                                                   |
|------------------|--------------------|:-------:|-----------------------|:-------------------------------------------------:|
| 参数               | 说明                 | 类型      | 可选值                   | 默认值                                               |
| value / v\-model | 绑定值                | string  | —                     | —                                                 |
| disabled         | 是否禁用               | boolean | —                     | false                                             |
| size             | 尺寸                 | string  | —                     | medium / small / mini                             |
| show\-alpha      | 是否支持透明度选择          | boolean | —                     | false                                             |
| color\-format    | 写入 v\-model 的颜色的格式 | string  | hsl / hsv / hex / rgb | hex（show\-alpha 为 false）/ rgb（show\-alpha 为 true） |
| popper\-class    | ColorPicker 下拉框的类名 | string  | —                     | —                                                 |
| predefine        | 预定义颜色              | array   | —                     | —                                                 |
`

const events = `
| Events         |                   |          |
|----------------|-------------------|----------|
| 事件名称           | 说明                | 回调参数     |
| change         | 当绑定值变化时触发         | 当前值      |
| active\-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
`

module.exports = {
    attributes,
    events
}