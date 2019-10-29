import login from '@/models/login.js'


describe('models/login.js', () => {
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
})
