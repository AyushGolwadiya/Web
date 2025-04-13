import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";

const Card = ({data}) => {
  return (
    <div className={`${data.bg} hover:bg-zinc-300 hover:text-black hover:px-6 transition-all ease-in-out duration-300 p-5 rounded-xl ${data.width} min-h-100 flex flex-col justify-between`}>
       <div className="w-full">
        <div className="flex items-center justify-between">
            <h3 className="uppercase text-sm">{data.one}</h3>
                < IoIosArrowRoundForward />
            </div>
            <h1 className="text-2xl font-medium mt-5 w-60">{data.second}</h1>
       </div>
       <div className="down w-full">
            {
                data.start && (<>
                    <h1 className="mb-5 capitalize text-4xl font-bold tracking-tight">start a project</h1>
                    <Button title="Contact us"/>
                </>)
            }
            {
                data.para && (<p className="text-sm font-medium">{data.p}</p>)
            }
       </div>
    </div>
  )
}

export default Card