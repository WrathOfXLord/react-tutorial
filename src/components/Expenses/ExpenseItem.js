import React, {useState} from 'react'

import './ExpenseItem.css'
import DateItem from './DateItem';
import Card from '../UI/Card';

function ExpenseItem(propData) {

    const [title, setTitle] = useState(propData.title);

    function clickHandler() {
        setTitle("Updated !");
        console.log(title);
    }

    return (
        <Card className="expense-item">

            {/* eğer ki component veri içermiyorsa */}
            {/* <DateItem></DateItem> yerine yalnızca <DateItem/> kullanabiliriz */}
            {/* Burada date diye bir attribute tanımladıysak */}
            {/* Bu component'ın içerisinde de aynı isimle çağırmalıyız */}
            {/* Örn. bu component'a ait tekli değişken props ise props.date olarak kullanılmalı */}
            <DateItem date={propData.date}/>
            <h2>{title}</h2>
            <div className="expense-item_description">
                <div className="expense-item__price">${propData.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;