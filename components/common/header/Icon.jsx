import Image from "next/image";

const Icon = ({ src, url, alt }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={100} height={43} />
      </a>
    </>
  );
};

export default Icon;
