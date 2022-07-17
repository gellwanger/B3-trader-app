import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography 
      variant="body2" 
      color="text.secondary" 
      align="center" 
      className='site-footer'
    >
      <h1>
      {'© '}
        Gustavo Ellwanger
        {' '}
        {new Date().getFullYear()}
      </h1> 
    </Typography>
  );
}

export default Copyright;
