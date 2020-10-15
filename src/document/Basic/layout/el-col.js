const attributes = `
| Attributes     |                       |        |                                               |       |
|----------------|-----------------------|:------:|-----------------------------------------------|:-----:|
| 参数             | 说明                    | 类型     | 可选值                                           | 默认值   |
| gutter         | 栅格间隔                  | number | —                                             | 0     |
| type           | 布局模式，可选 flex，现代浏览器下有效 | string | —                                             | —     |
| justify        | flex 布局下的水平排列方式       | string | start/end/center/space\-around/space\-between | start |
| align          | flex 布局下的垂直排列方式       | string | top/middle/bottom                             | top   |
| tag            | 自定义元素标签               | string | \*                                            | div   |
`

module.exports = {
    attributes
}