export default theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    paper: {
        width: 280,
        height: 280,
        boxShadow: theme.shadows[2],
        backgroundColor: 'white',
        borderRadius: '5px',
        paddingTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },


    input: {
        width: '90%',
        marginTop: 15
    },

    grow: {
        flexGrow: 1
    },

    button: {
        position: 'relative',
        bottom: 50,
        right: 20,
        alignSelf: 'flex-end',
        height: 35,
    },
    title: {
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 800,
        color: 'white',
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        color: theme.palette.secondary.main,
        top: -14,
        left: 79,
        fontSize: 21,
    },

    register: {
        fontSize: 12,
        fontWeight: 600,
        color: theme.palette.primary.main,
        marginTop: 15,
        cursor: 'pointer'
    }
})