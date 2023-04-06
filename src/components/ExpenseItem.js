import './ExpenseItem.css'
import DateItem from './DateItem';

function ExpenseItem(propData) {
    return (
        <div className="expense-item">

            {/* eğer ki component veri içermiyorsa */}
            {/* <DateItem></DateItem> yerine yalnızca <DateItem/> kullanabiliriz */}
            {/* Burada date diye bir attribute tanımladıysak */}
            {/* Bu component'ın içerisinde de aynı isimle çağırmalıyız */}
            {/* Örn. bu component'a ait tekli değişken props ise props.date olarak kullanılmalı */}
            <DateItem date={propData.date}/>
            <h2>{propData.title}</h2>
            <div className="expense-item_description">
                <div className="expense-item__price">${propData.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;