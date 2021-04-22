/**
 *  * Created by dxz on 2020/7/11-1:07.
 */
const func1 = () => {
  func2()
}
const func2 = () => {
  func3()
}
const func3 = () => {}

func1()