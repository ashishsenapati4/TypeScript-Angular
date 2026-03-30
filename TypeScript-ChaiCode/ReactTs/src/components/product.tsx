interface productProp{
    name: string,
    price: number,
    isSpecial?: boolean
}

export function ProductTemplate({name, price, isSpecial=false} : productProp){
    return(
        <article>
            <h2>
                {name} {isSpecial && <span>🌟</span>}
            </h2>
                <p>{price}</p>
        </article>
    );
}