/**
 * 将一个对象封装成一个可迭代对象的形式
 * 考虑，同时使用this指向和obj参数，会创建一个文件
 *  将这个函数放入原型，同时如果出现了直接调用方法的，
 *  也可以使用obj进行操作，增加了兼容的效果
 * @param obj
 * 注意，使用的是生成器函数
 */
export function getCanIteratorObj(obj) {
  let _this = obj || this
  _this[Symbol.iterator] = function* () {
    let keys = Object.keys(_this)
    for (const value of keys) {
      yield _this[value]
    }
  }

  return _this
}
