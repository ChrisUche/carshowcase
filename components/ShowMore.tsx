"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";


const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);

    }


  return (
    <div className="w-full gap-5 mt-10 flex-center">
        {
            !isNext && (
                <CustomButton 
                    title={"Show More"} 
                    btnType="button"
                    containerStyles="bg-green-700 rounded-full text-white hover:scale-105 hover:bg-green-800 "
                    handleClick={handleNavigation}/>
            )
        }
    </div>
  )
}

export default ShowMore