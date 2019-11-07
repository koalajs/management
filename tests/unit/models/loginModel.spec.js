import login from '@/models/loginModel.js'
import { exportAllDeclaration } from '@babel/types';

describe('models/loginModel.js', () => {
  it('test isLogin can return a boolean', async () => {
    const d1 = await login.isLogin()
    expect(d1).toBe(false)
    await login.setToken('xxx')
    const d2 = await login.isLogin()
    expect(d2).toBe(true)
  })
  it('test getToken', async () => {
    const token = 'ttt'
    await login.setToken(token)
    const t = await login.getToken()
    expect(t).toBe(token)
  })
  it('Function diffTime should be return boolean', () => {
    const t = 1
    const l = 1573103989473
    expect(login.diffTime(t, l)).toBe(true)
    const n = new Date().getTime()
    expect(login.diffTime(t, n)).toBe(false)
  })
})
