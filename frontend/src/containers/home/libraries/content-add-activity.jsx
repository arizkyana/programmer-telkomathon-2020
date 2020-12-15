import { useState } from 'react';
import axios from 'axios';

const ContentAddActivity = () => {

  const [activity, setActivity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      activity,
    };

    const request = await axios({
      url: '/activity',
      method: 'post',
      data: payload,
    });

    if (request.data.meta.code === 201) {
      alert('success add activity');
    }
  };

  const handleChangeActivity = (e) => {
    const value = e.target.value;
    setActivity(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChangeActivity}>
          input activity
        </textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  )

};

export default ContentAddActivity;
