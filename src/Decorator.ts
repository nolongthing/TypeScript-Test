/* 装饰器 */

/* 1. 类装饰器 */
function test(target: new (...args: any[]) => object) {
  console.log(target);
}

@test
class A {

}