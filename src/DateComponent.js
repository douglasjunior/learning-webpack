import moment from 'moment';

export default () => {
    const element = document.createElement('p');
    element.innerHTML = `Hoje é ${moment().format('DD/MM/YYYY')}`;
    element.classList.add('hello');
    return element;
}