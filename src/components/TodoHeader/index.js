//可以默认 index.js 其它需要导入该js文件 只要导入 地址就行 index.js 可以省略
// 默认约定 导出的名称就是 目录文件夹名称 也就是组件的名称
import React from "react";
import PropType from "prop-types"; //npm install --save prop-types 组件的属性类型校验

export default function TodoHeadler(props) {
  console.log(props);
  return (
    <>
      <h1>{props.children}</h1>
      <h3>{props.desc}</h3>
      <p>{props.x + props.y}</p>
    </>
  );
}

TodoHeadler.propTypes = {
  desc: PropType.string,
  x: PropType.number,
  y: PropType.number.isRequired,
  // children: PropType.isRequired, children
};
//也可以设置默认值
TodoHeadler.defaultProps = {
  children: "Test",
};
