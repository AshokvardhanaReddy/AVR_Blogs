
export const ReactionIcon = ({icon, text}) => {

    return (
        <>
        <button  className = "flex place-items-center gap-2 px-3 py-1 rounded-md border border-solid border-sky-600 hover:bg-sky-600 hover:text-white sm:gap-1 sm:px-[minmax(16px,0px)] lg:gap-1 " >
           <i className="text-lg sm:text-base" >{icon}</i>
            <p>{text}</p>
        </button>
        </>
    )
}