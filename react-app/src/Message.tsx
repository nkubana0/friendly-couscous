function Message(){
    const name = 'Shema Ivan';
    if (name) {
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello World</h1>
    }
}
export default Message;