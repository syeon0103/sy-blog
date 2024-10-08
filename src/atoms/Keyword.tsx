
interface KeywordProps  {
    title: string;
    icon: React.ReactNode;
    isSelected: boolean;
};

const Keyword = ({title, icon, isSelected } : KeywordProps) => {

    return (
        <>
            <button
                className={`min-w-[90px] text-base border-[1.5px] ml-4 inline-flex items-center justify-center px-3 py-2 rounded-xl 
                        ${isSelected ? 'bg-charry text-white animate-bounce' : 'border-charry text-charry'}`}>
                <div className="text-base font-pretendard text-center whitespace-nowrap">
                    {title}
                </div>
                <img src={icon} alt={title} className="ml-1 w-6 align-middle"/>
            </button>

        </>
    )

}

export default Keyword;
