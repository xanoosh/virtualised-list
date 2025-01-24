import { Oval } from 'react-loader-spinner';

export default function Loader({
  className = 'h-[100vh] w-[100vw] flex justify-center items-center',
}: {
  className?: string | undefined;
}) {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      strokeWidth={3}
      color="#646cff"
      secondaryColor="#646cff"
      ariaLabel="oval-loading"
      wrapperClass={className}
    />
  );
}
