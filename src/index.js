(async function() {
const { LuaFactory } = require('wasmoon')

const factory = new LuaFactory()

const lua = await factory.createEngine()

try {

    lua.global.set('sum', (x, y) => x + y)

    await lua.doString(`print('Hello World`)

    const multiply = lua.global.get('multiply')

    console.log(multiply(10, 10))

} finally {
    lua.global.close()
}
  })()