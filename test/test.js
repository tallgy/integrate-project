/**
 * 路径拼接, 任意的参数路径进行拼接
 * @param args 任意参数路径
 *
 * 先将 \ 转为 / 然后判断每次拼接的字符串
 * 的最后一个是否含有 / 来进行拼接, 最后一个不要 /
 *
 * 先判断第一个参数的第一个是否含有/，
 * 然后使用 reduce 将其拼接。对第二个的拼接加上 /，
 * 最后再将重复的 / 进行去重，
 * 然后判断是否去除第一个 /
 */
function pathJoin(...args) {
  // 用于判断第一个是否是含有 / 或者 \\
  let flag = ['/', '\\'].includes(args[0][0])

  return args.reduce((total, cur) => {
    return total + '/' + cur.replace(/\\+/g, '/')
  }, '').replace(/\/+/g, '/').slice(flag ? 0 : 1)
}

if ({}) {
  console.log('1')
}