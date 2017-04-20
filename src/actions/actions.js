export const capitalizeFoo = (foo) => ({
    type: 'CAPITALIZE_FOO',
    foo: foo.toUpperCase()
});

export function fetchBar() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_BAR_IN_PROGRESS' });

        fetch('https://www.googleapis.com/books/v1/volumes?q=bar')
        .then(response => response.json())
        .then(response => {
            const randomItemIndex = Math.floor(Math.random() * 10);
            dispatch({
                type: 'FETCH_BAR_SUCCESS',
                bar: response.items[randomItemIndex].volumeInfo.title
            });
        });
    };
}
