import { useRouter } from 'next/router';
import { colours } from '../theme';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    color: router.pathname === href ? `${colours.orange}` : `${colours.white}`,
    fontSize: 24,
    textDecoration: 'none'
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
