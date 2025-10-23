import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a técnica Pomodoro 🍎</a>
      <a href='#'>
        PomoTimer Pomodoro &copy; {new Date().getFullYear()} - Feito por Vitor
        C. de Souza
      </a>
    </footer>
  );
}
