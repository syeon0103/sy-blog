


const Keyword = ({title, icon}) => {

    return (
        <>
            <button
                className="min-w-[90px] text-base border-[1.5px] border-charry ml-4 inline-flex items-center justify-center px-3 py-2 rounded-xl hover:bg-charryHover hover:text-white text-charry max-w-xs overflow-hidden hover:animate-bounce"
            >
                <div className="text-base font-pretendard text-center whitespace-nowrap">
                    {title}
                </div>
                <img src={icon} alt={title} className="ml-1 w-6 align-middle"/>
            </button>

        </>
    )

}

export default Keyword;
