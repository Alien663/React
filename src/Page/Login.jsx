import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginThunk } from '../Store/Member'

import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'

const LoginPage = (props) => {
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleChangeAccount = ({target: {value}}) => {
    setAccount(value)
  }

  const handleChangePassword = ({target: {value}}) => {
    setPassword(value)
  }

  const handleClickLogin = () => {
    dispatch(LoginThunk({Account: account, Password: password}))
  }

  return (
    <div style={{ width: "40%", margin: "0 auto"}}>
      <Form>
        <FormGroup>
          <Form.Label htmlFor="inputAccount">Account</Form.Label>
          <Form.Control
            type="text"
            id="inputAccount"
            placeholder="your account"
            value={account}
            onChange={(el) => handleChangeAccount(el)}
          />
        </FormGroup>
        <br></br>
        <FormGroup>
          <Form.Label htmlFor="inputPassword">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="your password"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(el) => handleChangePassword(el)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </FormGroup>
      </Form>
      <br></br>
      <br></br>
      <Button style={{width: "100%"}} onClick={handleClickLogin}>Login</Button>
    </div>
  )
}

export default LoginPage