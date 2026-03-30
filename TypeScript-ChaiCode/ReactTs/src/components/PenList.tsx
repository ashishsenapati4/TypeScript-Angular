import type { Pen } from "../types"
import { ProductTemplate } from "./product"

interface PenListProps{
    items: Pen[]
}

export function PenList({items}:PenListProps){
    return(
        <div>
            {items.map((pen) => (
                <ProductTemplate
                    key={pen.id}
                    name={pen.name}
                    price={pen.price}
                    isSpecial={pen.price >= 30}
                />
            ))}
        </div>
    )
}