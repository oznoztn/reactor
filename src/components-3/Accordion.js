import React, { useState } from 'react';

const Accordion = ({ items }) => {
	// useState is a HOOK provided by React to use the state in a functional component
	// It returns an array of two elements:
	//   The first argument points to some value that's going to change over time
	//     It is the piece of state
	//   The second one is a function that we'll call to change our piece of state
	//     "null" inside useState refers to the default value for our piece of state.

	// We use array destruction method here:
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	}

	const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				{/* Neden halen arrow function kullanıyoruz?
				Çünkü onClick={onTitleClick(index)} deseydik div render olur olmaz onTitleClick metodu çağırılmış olurdu. */}
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return (
		<div className="ui styled accordion">
			{renderedItems}
		</div>
	);
};

export default Accordion;