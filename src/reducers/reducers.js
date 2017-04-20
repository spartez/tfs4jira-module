export default function (state = '', action) {
    switch (action.type) {
        case 'CAPITALIZE_FOO':
            return Object.assign({}, state, { foo: action.foo });
        case 'FETCH_BAR_SUCCESS':
            return Object.assign({}, state, {
                bar: action.bar,
                barInProgress: false
            });
        case 'FETCH_BAR_IN_PROGRESS':
            return Object.assign({}, state, { barInProgress: true });
        default:
            return state;
    };
};
