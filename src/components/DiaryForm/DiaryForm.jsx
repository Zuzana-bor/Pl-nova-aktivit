import React from 'react';
import './diaryform.css';

export const DiaryForm = () => {
  return (
    <section className="note">
      <h4 className="nadpis__note">Deník</h4>
      <input id="input__date__note" type="text" value="datum příspěvku" />{' '}
      <input id="input__nazev__note" type="text" value="název příspěvku" />
      <form className="zapis__note" action="">
        <textarea
          id="zapisek__note"
          name="denik"
          rows="33"
          cols="100"
        ></textarea>
      </form>
      <input type="submit" value="Submit" id="submit__note" />
    </section>
  );
};
