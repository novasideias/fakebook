export default theme => ({
    content: {
        minWidth: 300,
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
    },

    item: {
        flex: 1,
        border: '1px solid #394047',
        borderRadius: '4px',
        margin: 5,
        marginTop: 10,
        position: 'relative',
    },

    title: {
        backgroundColor: 'white',
        padding: '2px 5px',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 600,
        color: '#394047',
        position: 'absolute',
        top: -7,
        left: 10
    },

    links: {
        paddingTop: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column'
    }
})