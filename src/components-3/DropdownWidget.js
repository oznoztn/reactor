import React, { useState } from 'react'

const DropdownWidget = ({options, selected, selectText, onSelectedChange}) => {
  const [isOpen, setOpen] = useState(false);

  var sortedOptions = options.sort(t => t.title).reverse();
  var renderedOptions = sortedOptions.map((option) => {
    // remove selected item from the dropdown list
    if(option.id === selected.id){
      return null;
    }      
      
    return (
      <div 
        key={option.id} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        <option value={option.id}>{option.title}</option>
      </div>
    )
  });

  return (    
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label className="label">{selectText}</label>
          <div onClick={() => setOpen(!isOpen)} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
            <i className="dropdown icon"></i>
            <div className="text">
              <label className="label">{selected.title}</label>
              <div className={`menu visible ${isOpen ? 'transition' : ''}`}>
                { renderedOptions }
              </div>
            </div>
          </div>
        </div>
      </div>      
    </React.Fragment>
  )
}

export default DropdownWidget