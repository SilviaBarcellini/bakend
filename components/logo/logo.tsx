import styles from "./logo.module.css";

export type LogoProps = {
  logo: string;
  size: string;
};

function Logo({ logo, size, ...props }: LogoProps) {
  return (
    <div>
      <h1 className={`${styles.logo} ${styles[size]}`} {...props}>
        {logo}
      </h1>
    </div>
  );
}

export default Logo;
