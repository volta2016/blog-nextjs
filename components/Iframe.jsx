export default function Iframe({ src, title, ...rest }) {
  return <iframe src={src} title={title} {...rest} />;
}
