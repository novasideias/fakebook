export default theme => ({
    overlay: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,.5)',
        top: 0,
        left: 0,
    },

    root: {
        minHeight: 400,
        width: 400,
        paddingTop: 20,
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: theme.shadows[2],
        position: 'absolute',
        top: 'calc(40% - 200px)',
        left: 'calc(50% -200px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    input: {
        width: '75%',
        marginTop: 15
    },

    title: {
        padding: 10,
        color: '#495057',
        fontSize: 18,
        fontWeight: 600
    },

    buttonContainer: {
        width: '75%',
        marginTop: 35,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'flex-end'
    },

    button: {
        textTransform: 'none',
        fontSize: 14,
        width: 70,
        padding:'5px 10px'
    }


})