import styles from "./logo.module.css";

export type LogoProps = {
  logo: string;
  header: boolean;
};

function Logo({ logo, header, ...props }: LogoProps) {
  return (
    <div>
      <h1
        className={`${styles.logo} ${header ? styles.header : ""}`}
        {...props}
      >
        {logo}
      </h1>
    </div>
  );
}

export default Logo;
