


export function buy(item, qty = 1) {
    return { type: 'BUY', item, qty }
}