import Image from "next/image";

const index = () => (
  <footer className="footer">
    <a href="https://voltauxui.cl/" target="_blank" rel="noopener noreferrer">
      Hecho con ❤️{" "}
      <span className="logo">
        <Image
          src="/static/images/logo-voltadev.svg"
          alt="Logo VoltaDev"
          width={100}
          height={43}
        />
      </span>
    </a>
  </footer>
);

export default index;
