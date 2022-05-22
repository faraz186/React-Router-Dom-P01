import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';

export default function Login() 
{
  return (
    <>
      <Link className='link1' to="/signup">SignUp Page</Link>
      <br />
      <Link className='link2' to="/dashboard">Dashboard Page</Link>
      <h1 className="heading">Login Form</h1>
    <Box className="InputField"
      component="form"
      sx={{
          '& > :not(style)': { m: 1, width: '33ch' },
      }}
      noValidate
      autoComplete="off">
      <span>Email:</span><TextField
          id="filled-password-input"
          label="Email"
          autoComplete="current-password"
          variant="filled"/>
      <br />
      <br />
      <span className='s2'>Password:</span><TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"/>
<br />
<br />
<br />
<Stack direction="row" spacing={2}>
<Button sx={{border: "1.5px solid red", padding: "4px 22px"}} color="error" endIcon={<LoginIcon className='icon' />} variant="outlined">Login</Button>
</Stack>
    </Box>
      </>
  );
}
        