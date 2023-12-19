const AccountList = [
  {
    Account: "Alien663",
    Password: "test"
  },
  {
    Account: "test",
    Password: "test"
  },
]

const LoginAPI = (req) => {
  if (AccountList.filter(item => item.Account === req.Account && item.Password === req.Password).length > 0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          body: { Status: 0, Messsage: "Login Success" }
        })
      }, 1000)
    })
  else
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({
          body: { Status: 1, Messsage: "Login Fail" }
        })
      }, 1000)
    })
}

export { LoginAPI }