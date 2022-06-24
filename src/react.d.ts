declare module 'react' {
  function memo<A, B>(
    Component: (props: A) => B
  ): (props: A) => import('React').ReactElement | null
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.css'
declare module '*.css'
declare module '*.less'
declare module '*.js'
