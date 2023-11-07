import Image from 'next/image'

interface SvgIconProps {
  name: string;
  className?: string;
}

const WebPacketSvg: React.FC<SvgIconProps> = ({ name, className = "w-full h-full" }) => {
  const svgPath = `svg/${name}.svg`;
  let svgExists = true;

  try {
    require(`@/public/svg/${name}.svg`);
  } catch (error) {
    svgExists = false;
  }

  if (!svgExists) { return (<div className={className}>no svg</div>) }

  return (
    <Image src={svgPath} width={24} height={24} className={className} alt={name} />
  )
}

export default WebPacketSvg;
