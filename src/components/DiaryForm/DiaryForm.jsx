import React, {useState} from 'react';
import './diaryform.css';

export const DiaryForm = ({onSubmit}) => {
  const [values, setValues] = useState({ });
  const handleChange=(event)=>{
    setValues({
      ...values,
      [event.target.name]:event.target.value
    })
  }

  const handleClick = () => {
    onSubmit(values);
    setValues({ });
  }

  return (
    <>
      <section className="body__note"></section>
      <div className="conteiner__note">
        <section className="note">
          <h4 className="nadpis__note">Deník</h4>
          <form className="zapis__note" action="">
            <input value={values.date ?? ""} onChange={handleChange} id="input__date__note" type="text" placeholder="Datum příspěvku" name="date"/>{' '}
            <input value={values.note ?? ""} onChange={handleChange}
              id="input__nazev__note"
              type="text"
              placeholder="Název příspěvku"
              name="note"
            />
            <textarea onChange={handleChange}
              id="zapisek__note"
              name="content"
              rows="33"
              cols="100"
              value={values.content ?? ""}
            ></textarea>
          </form>
          <input onClick={handleClick} type="submit" value="Submit" id="submit__note" />
        </section>
      </div>
    </>
  );
};
