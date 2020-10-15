const attributes = `
| Attributes        |           |         |     |                    |
|-------------------|-----------|:-------:|-----|:------------------:|
| 参数                | 说明        | 类型      | 可选值 | 默认值                |
| title             | 标题        | String  | —   | —                  |
| confirmButtonText | 确认按钮文字    | String  | —   | —                  |
| cancelButtonText  | 取消按钮文字    | String  | —   | —                  |
| confirmButtonType | 确认按钮类型    | String  | —   | Primary            |
| cancelButtonType  | 取消按钮类型    | String  | —   | Text               |
| icon              | Icon      | String  | —   | el\-icon\-question |
| iconColor         | Icon 颜色   | String  | —   | \#f90              |
| hideIcon          | 是否隐藏 Icon | Boolean | —   | false              |
`

const events = `
| Events    |           |      |
|-----------|-----------|------|
| 事件名称      | 说明        | 回调参数 |
| onConfirm | 点击确认按钮时触发 | —    |
| onCancel  | 点击取消按钮时触发 | —    |
`

const slots = `
| Slot      |                           |
|-----------|---------------------------|
| 参数        | 说明                        |
| reference | 触发 Popconfirm 显示的 HTML 元素 |
`

module.exports = {
    attributes,
    events,
    slots
}