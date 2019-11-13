import { isNil, pathOr, is as isType, reduce } from 'ramda'

// TODO， 该方法可能需要根据后端返回数据结构的变化而做调整。
export const getErrorMessage = (e) => {
  const msg = pathOr(null, ['response', 'data', 'message'], e)
  if (isNil(msg)) {
    return pathOr('', ['message'], e)
  } else if (isType(Array, msg)) {
    return reduce((a, v) => `${a}<li>v</li>`, '', msg)
  } else if (isType(String, msg)) {
    return msg
  } else {
    return `未知的错误 #1`
  }
}

export default {
  getErrorMessage
}
