import Image from "next/image";
import { FC } from "react";

const Flag: FC = () => {
  return (
    <div className="flex flex-row items-center gap-6">
      <Image
        width={36}
        height={36}
        alt="flag"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_New_Zealand.png/1200px-Flag_of_New_Zealand.png"
      />
      {`Region === 'NZ'`}
    </div>
  );
};

export default Flag;
