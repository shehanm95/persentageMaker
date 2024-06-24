export function clearHolder(holderNameString , childTypeString){
    holder  = document.getElementById(holderNameString);

    let items = holder.getElementsByClassName(childTypeString);
    if(items.length > 0){
        [...items].forEach(item => {
            item.remove();
        });
    }
}

