import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [preview, setpreview] = useState([]);
  const [formInput, setFormInput] = useState({
    thumb_image:''
  });
  const [ thumbPreview , setThumbPreview] = useState('')
  const[ errors , setErrors ] = useState('')

  const handleChange = (e) => {
    const { name, type } = e.target;
    setErrors({ ...errors, [name]: "" });
    if (type === "file") {
      const files = e.target.files;
        setThumbPreview(URL.createObjectURL(files[0]));
        setFormInput({ ...formInput, [name]: files[0] });
      // }
    } else {
      const { value } = e.target;
      setFormInput({ ...formInput, [name]: value });
    }
  }
 



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInput , 'formData')
    // try {
    //   const response = await axios.post('https://backend-tendoni-backend.ffbufe.easypanel.host/admin/api/v1', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   console.log('File uploaded successfully', response.data);
    // } catch (error) {
    //   console.error('Error uploading file', error);
    // }
  };

  return (
    <div>
      <input      
        name="aadhar"
        type="file"
        onChange={handleChange}
        className=""
      ></input>
      <input  
        name="markshert"
        type="file"
        onChange={handleChange}
        className=""
      ></input>
      <input
        name="docus"
        type="file"
        onChange={handleChange}
        className=""
      ></input>

      <div className="mt-20">
        {preview.map((data, index) => {
          return (
            <img
              alt={`${preview} ${index}`}
              className="w-20 h-20 rounded-lg border-2 border-black"
              src={data}
            ></img>
          );
        })}
      </div>




      {thumbPreview && formInput?.thumb_image && (
          <div className="w-24 rounded mt-4 h-24 shadow bg-white relative">
            <img
              src={thumbPreview}
              width={100}
              height={100}
              alt={`preview-thumb`}
              className="w-full h-full object-cover rounded"
            />
            {/* <MdOutlineClose
              onClick={() => {
                setThumbPreview("");
                setFormInput({ ...formInput, thumb_image: "" });
              }}
              className="absolute top-2 bg-white cursor-pointer right-2 text-primary rounded-full p-0.5 shadow-sm text-xl"
            /> */}
          </div>
        )}

      <button onClick={handleSubmit}>
      Submit 
      </button>
    </div>


  );
};

export default Home;
