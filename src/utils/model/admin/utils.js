import ALibbSvg from '@/components/model/thirdParty/ALibbSvg'
import styles from '@/assets/css/admin/global.module.less'
export function sldComLanguage(name) {
  return name
}

/**
 * input_after 后缀样式
 */
export function sldInputAfterAddons() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <span
      className={styles.input_after_wrap}
      style={{ marginLeft: 5, marginRight: 5 }}
    >
      {sldTsvg('sousuo1', '#666', 16, 16)}
    </span>
  )
}

/*
 * 返回图标
 * @params svg svg图标名称
 * @params color 图标颜色
 * @params width 图标宽度
 * @params height 图标高度
 * */
export function sldTsvg(svg, color, width, height) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ALibbSvg fill={color} width={width} height={height} type={svg} />
}
