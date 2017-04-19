export default function (state = '', action) {
    console.log(action);
    switch (action.type) {
        case 'CAPITALIZE':
            return { foo: action.foo };
        default:
            return state;
    };
};
