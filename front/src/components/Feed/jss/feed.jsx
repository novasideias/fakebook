export default theme => ({
    root: {
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    publication: {
        marginBottom: 20
    },

    grow: {
        flexGrow: 1
    },

    iconDetailsContainer: {
        width: 15,
        height: 15,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.05)',
        },
        '&:active': {
            backgroundColor: 'rgba(0,0,0,.1)',
        },
        cursor: 'pointer'
    },

    iconDetails: {
        fontSize: 16,
        color: theme.palette.primary.main
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 10
    },

    avatar: {

    },

    image: {
        borderRadius: '50%',
        width: 40,
        height: 40
    },

    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#394047',
        marginLeft: 20
    },

    categoryTitle: {
        fontSize: 12,
        fontWeight: 600,
        color: '#394047',
    },

    content: {
        padding: 10,
        paddingRight: 0,
        paddingTop: 5,
        textAlign: 'left'
    },

    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    action: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: ' rgba(0,0,0,.1)'
        },
        '&:active': {
            backgroundColor: ' rgba(0,0,0,.2)'
        },
        textDecoration: 'none'
    },

    icon: {
        color: theme.palette.primary.main,
        marginRight: 10
    },

    text: {
        fontSize: 16,
        color: '#394047',
    },

    empty: {
        fontSize: 14,
        color: '#394047',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: '4px'
    },
    emote: {
        color: theme.palette.primary.main,
        fontSize: 16
    }
})