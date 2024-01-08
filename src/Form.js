import { useEffect, useState } from "react";

import axios from "axios";


function Form() {

    const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  
 
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);



    const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);
    
};

    return (
      <div style={{marginTop:"70px", maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
       <form  onSubmit={submitImage}>


       <h1 style={{ marginBottom: '20px', color: '#333' }}>Upload Files</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #ddd', backgroundColor: '#fff' }}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}

          style={{ width: '100%', padding: '12px', marginBottom: '25px', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #ddd', backgroundColor: '#fff' }}
          required
        />
        <button type="submit"
         style={{ width: '60%', padding: '12px',color:"black",borderRadius:"20px", backgroundColor: 'pink' }}>submit</button>
       </form>
       
      
      </div>
    );
  }
  
  export default Form;
  