import {isTrue} from "@/uitls";

export interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined
}

// 节流
export function throttle<T extends(...args: any) => any>(func: T, wait = 500): DebouncedFunc<T> {
  let leading = true;
  return function(this: void, ...args: Array<any>) {
    if (!leading) {
      return {};
    }
    leading = false;
    setTimeout(() => {
      leading = true;
    }, wait);
    return func.apply(this, args);
  };
}

// 防抖
export function debounce<T extends(...arg: any[]) => any>(fn: T, wait = 500) {
  let timer: number | undefined;
  return function(this: void, ...arg: Parameters<typeof fn>) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(this, arg); // 把参数传进去
    }, wait);
  };
}


//table 序号
export const serialNumber = (
  { index }: { index: number },
  data: { pageSize:number; current:number }
) => {
  let currentPageSize = 0
  if (isTrue(data)) {
    currentPageSize = ((data?.current || 0) - 1) * (data?.pageSize|| 0)
    if (currentPageSize < 0) {
      currentPageSize = 0
    }
  }
  return index + 1 + currentPageSize
}


// 观察订阅模式
export class EventBus {
  // 唯一id,用来单独移除订阅
  uuid = 0
  // 订阅者
  subscriber: {
    [index: string]: { uuid: number; fn: (...data: any) => void }[]
  } = {}
  // 订阅 消息
  on(key: string, fn: (...data:any) => void): number {
    if (!this.subscriber[key]) {
      this.subscriber[key] = []
    }
    const uuid = this.uuid
    this.subscriber[key].push({ uuid, fn: fn })
    this.uuid++
    return uuid
  }
  // 发布者 发布消息
  emit(key: string, ...data: any) {
    const fns = this.subscriber[key] //取出该消息对应的回调函数集合
    if (!isTrue(fns)) return
    fns.forEach((item: any) => {
      item.fn(...data)
    })
  }
  // 移除
  remove(key:string, uuid?:number) {
    const fns = this.subscriber[key] //取出该消息对应的回调函数集合
    if(!isTrue(fns)) return
    if(isTrue(uuid)) {
      this.subscriber[key] = fns.filter(res => res.uuid !==uuid)
    } else {
      delete this.subscriber[key]
    }
  }
}
