export default () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Olá', 'webpack', '!!!'], ' ');
    element.classList.add('hello');
    return element;
}