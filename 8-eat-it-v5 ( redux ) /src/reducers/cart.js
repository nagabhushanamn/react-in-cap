

export function cartReducer(state = {}, action) {
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let cart = state;
            let { item, qty } = action;
            let { id } = item;
            let cartLine = cart[id] || null;
            if (!cartLine) {
                cartLine = { item, qty: 1 }
            } else {
                cartLine = { ...cartLine, qty: cartLine.qty + qty }
            }

            if (cartLine.qty !== 0) {
                cart = { ...cart, [id]: cartLine }
            }
            if (cartLine.qty === 0)
                delete cart[id]

            cart = { ...cart }

            return cart;
        }
        default: return state;
    }

}