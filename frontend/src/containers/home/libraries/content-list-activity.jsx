import { useState, useEffect } from 'react';
import axios from 'axios';

import parseToken from '../../../helpers/parseToken';

const ContentListActivity = () => {

  const [myActivity, setMyActivity] = useState([]);

  const loadMyActivity = async () => {
    // parsing token
    // const user = parseToken(); // locatstorage.getItem('token'); -> parsing token ke bentuk JSON

    const response = await axios({
      url: '/activity',
      method: 'get',
      params: {
        accessToken: localStorage.getItem('token')
      }
    });

    setMyActivity(response.data.data);
  }

  useEffect(() => {
    loadMyActivity();
  }, []);

  return (
    <section>
      {
        myActivity.map((act) => (
          <div>
            {act.activity}
          </div>
        ))
      }
    </section>
  )

};

export default ContentListActivity;
