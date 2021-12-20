import Image from "next/image";

const Icon = ({ src, url, alt }) => {
  return (
    <li className="iconrrss pulse">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={24} height={24} />
      </a>
    </li>
  );
};

export default Icon;
