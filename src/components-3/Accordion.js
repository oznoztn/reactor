import React from 'react';

const Accordion = ({ items }) => {
	const onTitleClick = (index) => {
		console.log(index);
	}

    const renderedItems = items.map((item, index) => {
      return (
        <React.Fragment key={item.title}>
			{/* Neden halen arrow function kullanıyoruz?
				Çünkü onClick={onTitleClick(index)} deseydik div render olur olmaz onTitleClick metodu çağırılmış olurdu. */}
			<div className="title active" onClick={() => onTitleClick(index)}>
				<i className="dropdown icon"></i>
				{item.title}
			</div>
			<div className="content active">
				<p>{item.content}</p>
			</div>
        </React.Fragment>
      );
	});
	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;