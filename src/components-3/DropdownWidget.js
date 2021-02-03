import React, { useState, useEffect, useRef } from 'react'

const DropdownWidget = ({options, selected, selectText, onSelectedChange}) => {
  const [isOpen, setOpen] = useState(false);

  // Komponent dispose edildiğinde (DOM'dan kaldırıldığında) ref.current objesi NULL set edilecektir.
  // Fakat body üzerinde click için tanımladığımız event listener halen yaşamaya devam edecektir!
  // Bu nedenle event halen tetiklenmeye devam edecek ve null olan şeye erişmeye çalışacak!
  // Dolayısıyla selectDivRef.current'a erişmeden önce daima null-check yap.
  const selectDivRef = useRef();

  // It runs just for once, when the component is rendered
  useEffect(() => {
    // React'a ait olmayan event'ler her zaman önce çalışır.
    
    // Doğal olarak en alttan en üste eventin yayılacağını düşünebilirsin 
    //    option > div > body
    // Fakat burada böyle bir durum söz konusu değil. Olay sırası şu:
    //    (dom) (1) body > (react) (1) option > (2) div
    document.body.addEventListener('click', (e) =>{
      // tetikleyen element söz konusu komponentin içerisinde mi?
      if(selectDivRef.current && selectDivRef.current.contains(e.target)){
        // Evet.
        return;
      }

      setOpen(false);
    });
  }, [])

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
      <div ref={selectDivRef} className="ui form">
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