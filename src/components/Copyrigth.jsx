import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <h1>
        Gustavo Ellwanger
        {' '}
        {new Date().getFullYear()}
      </h1> 
    </Typography>
  );
}

export default Copyright;
