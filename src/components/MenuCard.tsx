interface MenuCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function MenuCard({imgSrc, title, description}: MenuCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-amber-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imgSrc} alt={title} className="w-full h-48 object-fit rounded-lg mb-4" />
      <h2 className="text-4xl font-[math] font-bold mb-2 text-wp-red">{title}</h2>
      <p className="text-lg font-[math] text-gray-800">{description}</p>
    </div>
  )
}