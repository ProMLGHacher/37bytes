
type CarouselItemProps = {
    onClick: () => void,
    icon: string,
    title: string,
    desc: string,
    selected: boolean
}

export const CarouselItem = ({ onClick, icon, title, selected, desc }: CarouselItemProps) => {



    return (
        <div onClick={onClick}>
            <div>
                <img src={icon} width={24} height={24} alt="" />
                <h5>{title}</h5>
            </div>
            {selected && <p>{desc}</p>}
        </div>
    )
}
