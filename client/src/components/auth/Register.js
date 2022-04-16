import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Form, Card } from 'react-bootstrap';
import { FormCard, MainBtn } from '../../styles/sharedStyles';

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>         
      <FormCard>
        <Card.Body>
          <h1 className='text-center'>Register</h1>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                autoFocus
                required         
                name='email'
                value={user.email}
                placeholder='Email'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                value={user.password}
                required
                placeholder='Password'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control 
                type="password" 
                value={user.passwordConfirmation}
                required
                placeholder='Password Confirmation'
                onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
              />
            </Form.Group>
            <br />
            <MainBtn type="submit">
              Submit
            </MainBtn>
          </Form>
        </Card.Body>
      </FormCard>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;