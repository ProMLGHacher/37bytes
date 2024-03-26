import { memo } from "react"
import './CarouselItem.css'

type CarouselItemProps = {
    onClick: () => void,
    icon: string,
    title: string,
    desc: string,
    selected: boolean
}

export const CarouselItem = memo(({ onClick, icon, title, selected, desc }: CarouselItemProps) => {
    return (
        <div className="carouselItem" onClick={onClick}>
            <img className="carouselItem_icon" src={icon} alt="" />
            <div className="carouselItem_text">
                <h5 className="carouselItem_text-title">{title}</h5>
                <div className={selected ? 'desc active' : 'desc'}>
                    <div>{desc}</div>
                </div>
            </div>
        </div>
    )
})
