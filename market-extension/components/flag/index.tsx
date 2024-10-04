import Image from "next/image";
import { FC } from "react";

const Flag: FC = () => {
  return (
    <div className="flex flex-row items-center gap-6">
      <Image
        width={36}
        height={36}
        alt="flag"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png"
      />
      {`Region === 'AU'`}
    </div>
  );
};

export default Flag;
