export default function ImageComponent({
  url,
  author,
}: {
  url: string;
  author: string;
}) {
  return (
    <div
      className="h-40 border-white rounded-md text-white bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-center text-white bg-cover bg-no-repeat bg-center">
        <p className="text-white text-xs">{author}</p>
      </div>
    </div>
  );
}
