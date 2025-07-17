const Notification = ({message, isErroring}) => {
    const redStyle = {
        color: 'red',
        background: 'lightgrey',
        fontsize: '20px',
        borderstyle: 'solid',
        borderradius: '5px',
        padding: '10px',
        marginbottom: '10px'
    }
    const greenStyle = {
        color: 'green',
        background: 'lightgrey',
        fontsize: '20px',
        borderstyle: 'solid',
        borderradius: '5px',
        padding: '10px',
        marginbottom: '10px'
    }
    if(message === null) {
        return null
    }

    return (
        <div style={message.red ? redStyle : greenStyle}>
            {message.message}
        </div>
    )
}

export default Notification