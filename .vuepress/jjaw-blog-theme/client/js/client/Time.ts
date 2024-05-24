//处理时间的函数集合

/**
 * 将时间格式化的函数,传入一个时间将其解析并作为函数参数传入，返回此函数返回值
 * @param rf Y年份 M月份 D天 h小时 m分钟 s秒
 */
export function dateFormat<T>(date:Date,rf:(Y:number,M:number,D:number,h:number,m:number,s:number)=>T):T{
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return rf(Y,M,D,h,m,s);
}