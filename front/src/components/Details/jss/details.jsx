export default theme => ({
    root: {
        marginTop: 100,
        padding: 20,
        width: 'calc(100% -20px)'
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
        textAlign: 'left',
    },

    text: {
        fontSize: 16,
        color: '#394047',
    },

    newComment: {
        display: 'flex',
        flexDirection: 'column'
    },

    textarea: {
        minWidth: 'calc(100% - 15px)',
        maxWidth: 'calc(100% - 15px)',
        minHeight: 70,
        border: 'none',
        padding: 5,
        outline: 'none',
        fontFamily: 'Roboto, sans-serif',
        color: '#394047',
        fontSize: 14
    },

    button: {
        alignSelf: 'flex-end'
    },

    commentArea: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
    },


    commentTitle: {
        fontSize: 16,
        fontWeight: 600,
        color: '#393939'
    },

    comment: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        marginTop: 5
    },

    commentHeader: {
        display: 'flex',
        flexDirection: 'row',
    },

    avatar: {
        height: 35,
        width: 35,
        borderRadius: '50%',
        marginRight: 10
    },

    commentName: {
        fontSize: 14,
        fontWeight: 600,
        color: '#394047',
        marginTop: 5
    },

    commentContent: {
        marginLeft: 45,
        marginTop: -8,
        fontSize: 14,
    },

    commentIconDetailsContainer:{
        width: 10,
        height: 10,
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

    commentIconDetails: {
        fontSize: 12,
        color: '#394047',
    },

    attachButton:{
        alignSelf: 'flex-end'
    }
})