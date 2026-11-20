function Card({ data }) {
    return (
        <div className="grid grid-cols-1 gap-30 text-center text-violet-400 p-10 sm:p-30 sm:grid-cols-3">
            {data.map((item, index) => (
                <div className="size-60 p-1 animated-border animate-gradient" key={item.id || index}>
                    <div className="bg-black h-full p-8 flex flex-col gap-3">
                        <img src={item.image} alt={item.id} className="w-full h-24 object-contain" />
                        <h3>Card {item.id}</h3>
                        <small className="text-xs">This is card {item.id} description.</small>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;