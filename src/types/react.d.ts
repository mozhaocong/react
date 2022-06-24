/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-11 17:32:09
 * @LastEditTime: 2022-02-11 17:33:11
 */
import React, { memo } from 'react'
declare module 'react' {
  // augment React types
  function memo<A, B>(
    Component: (props: A) => B
  ): (props: A) => import('React').ReactElement | null
  // return type is same as ReturnType<ExoticComponent<any>>
}
