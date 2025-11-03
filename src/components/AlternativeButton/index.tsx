import styles from './styles.module.css';

type AlternativeButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function AlternativeButton({
  icon,
  color = 'green',
  ...props
}: AlternativeButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
