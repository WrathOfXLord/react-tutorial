import './DateItem.css'

function DateItem(propData) {
    const date = {
        year: propData.date.getFullYear(),
        month: propData.date.toLocaleString('tr-TR', {month: 'long'}),
        day: propData.date.toLocaleString('tr-TR', {day: '2-digit'})
    }
    return (
        <div className="expense-date">
            <div className="expense-date__month">{date.month}</div>
            <div className="expense-date__day">{date.day}</div>
            <div className="expense-date__year">{date.year}</div>
        </div>
    );
}

export default DateItem; 