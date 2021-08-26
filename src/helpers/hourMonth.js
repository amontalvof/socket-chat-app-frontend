import moment from 'moment';

const hourMonth = (date) => {
    const today = moment(date);
    return today.format('HH:mm a | MMMM Do');
};

export default hourMonth;
