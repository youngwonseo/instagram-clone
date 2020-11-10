import React from 'react';

interface Props {
  form: any;
  handleChange: any;
  handleSubmit: any;
};

const Editor: React.FC<Props> = ({ form, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="file" onChange={handleChange}/>
        <textarea name="contents" onChange={handleChange} value={form.contents}/>
      </p>
      <p>
        <button type="submit">Write</button>
      </p>
    </form>
  );
};

export default Editor;