export default theme => ({
    root: {
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    paper: {
        display: 'flex',
        flexDirection: 'column'
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    content: {
        minHeight: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#495057',
    },

    textarea: {
        minHeight: 90,
        minWidth: 'calc(100% - 10px)',
        outline: 'none',
        fontSize: 16,
        color: '#394047',
        fontFamily: 'Roboto, sans-serif',
        padding: 5
    },

    grow: {
        flexGrow: .8
    },

    footer: {
        padding: 5,
        marginTop: 0,
        display: 'flex',
        minWidth: 'calc(100% - 15px)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    footerItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        cursor: 'pointer',
        userSelect: 'none'
    },

    icon: {
        color: theme.palette.primary.main,
        marginRight: 10
    }


})