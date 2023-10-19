export const Login = (req) => {
  if (req.ok) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ Messsage: "Login Success" })
      }, 1000)
    })
  }
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ Messsage: "Login Fail" })
      }, 1000)
    })
  }
}
