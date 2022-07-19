import Typography from '@mui/material/Typography';
import GitHub from '../images/GitHub.png';
import LinkedIn from '../images/LinkedIn.png';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      className='footer'
    >
      <h1>
        {'© '}
        Gustavo Ellwanger
        {' '}
        {new Date().getFullYear()}
      </h1>
      <a
        href='https://github.com/gellwanger/B3-trader-app'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt="github symbol"
          className='github_image'
          src={GitHub}
          width="22"
        />
      </a>
      <a
        href='https://www.linkedin.com/in/gustavo-ellwanger/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt="linkedin symbol"
          src={LinkedIn}
          width="22"
        />
      </a>

    </Typography>
  );
}

export default Copyright;
