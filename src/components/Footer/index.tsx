import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica Pomodoro 🍎
      </RouterLink>
      <RouterLink href='/'>
        PomoTimer Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
      </RouterLink>
    </footer>
  );
}
