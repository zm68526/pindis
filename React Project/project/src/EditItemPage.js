import React from 'react';
import EditItem from './components/EditItem'
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { models } from 'mongoose';
import { useState, useEffect } from 'react';

function EditItemPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currData, setCurrData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/pins/${id}`);
        const { name, img, description } = response.data;
        setCurrData({ name, img, description });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const itemEditHandler = async function (itemData) {
    try {
      await Axios.put(`http://localhost:8080/pins/${id}`, itemData);
      navigate('/loggedin');
    } catch (error) {
      console.error('Error updating item:', error);
    }
    props.rerenderHandler();
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <EditItem
          currName={currData.name}
          currImg={currData.img}
          currDescription={currData.description}
          onEditItem={itemEditHandler}
        />
      )}
    </div>
  );
}

export default EditItemPage;

