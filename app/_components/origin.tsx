import Image from "next/image";
import React from "react";
import hero from '../../public/hero.jpg'

const OriginSec: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full h-4/5">
                <Image
                    src={hero}
                    alt="sectionimage"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    )
};
export default OriginSec;