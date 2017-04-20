function capitalizeFoo(foo) {
    return {
        type: 'CAPITALIZE_FOO',
        foo: foo.toUpperCase()
    };
}

function fetchBar() {

    function handleErrors (response) {
        if (response.ok) {
            return response;
        }
        throw Error();
    }

    return function (dispatch) {
        dispatch({ type: 'FETCH_BAR_IN_PROGRESS' });

        fetch('https://www.googleapis.com/books/v1/volumes?q=bar')
            .then(handleErrors)
            .then(response => response.json())
            .then(response => response.items[0].volumeInfo.title)
            .then(bar => dispatch({ type: 'FETCH_BAR_SUCCESS', bar }))
            .catch(() => dispatch({ type: 'FETCH_BAR_ERROR' }));
    };
}

export {
    fetchBar,
    capitalizeFoo
};
