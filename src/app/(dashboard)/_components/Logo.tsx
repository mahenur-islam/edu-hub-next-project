import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex  gap-3">
      <Image height={30} width={30} src="/logo.svg" alt="logo" />
      <span className="font-semibold md:text-2xl">Edu-hub</span>
    </div>
  );
};

export default Logo;
