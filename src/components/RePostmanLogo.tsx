import Image from 'next/image'

interface RePostmanLogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

export default function RePostmanLogo({ 
  className = "w-8 h-8", 
  width = 80, 
  height = 80, 
  alt = "RePostman Logo" 
}: RePostmanLogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/repostman-logo.png"
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
} 