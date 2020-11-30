import { useRouter } from 'next/router';
import { colours } from '../theme';
import { MouseEvent } from 'react';

interface Props {
  children: JSX.Element | string;
  href: string;
}

function ActiveLink({ children, href }: Props) {
  const router = useRouter();
  const style = {
    color: router.pathname === href ? `${colours.orange}` : `${colours.white}`,
    fontSize: 24,
    textDecoration: 'none'
  };

  const handleClick = (e: MouseEvent) => {
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
