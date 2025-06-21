import React, { useState } from 'react';
import './Ecolens.css';

export default function EcolensAI() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    chemicalName: '',
    chemicalDetails: '',
    expireDate: '',
    healthProblems: [],
    carbonImage: '',
    mapEmbed: ''
  });

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setProgress(25);
      setTimeout(() => {
        setProgress(100);
        setData({
          chemicalName: 'Glyphosate',
          chemicalDetails: 'Common herbicide used in agriculture.',
          expireDate: '2027-12-31',
          healthProblems: ['Cancer', 'Hormonal disruption', 'Liver damage'],
          carbonImage: 'https://via.placeholder.com/150?text=Carbon+Structure',
          mapEmbed: '<iframe src="https://www.google.com/maps/embed?..." width="300" height="200" />'
        });
      }, 2000);
    }
  };

  return (
    <div className="container">
      <h1 className="title">ECOLENS AI</h1>
      <div className="grid">
        <div className="column">
          <div className="box">
            <input type="file" onChange={handleUpload} className="file-input" />
            {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
            <div className="button-group">
              <button className="btn upload">Upload</button>
              <button className="btn cancel">Cancel</button>
            </div>
          </div>

          <div className="box">
            <p className="label">Progress</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="box">
            <p className="label">Expire Date:</p>
            <p>{data.expireDate}</p>
            <p className="label mt">Health Problems:</p>
            <ul>
              {data.healthProblems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="box">
            <p className="label">Chemical Name:</p>
            <p>{data.chemicalName}</p>
            <p className="label mt">Chemical Details:</p>
            <p>{data.chemicalDetails}</p>
          </div>

          <div className="grid-2">
            <div className="box">
              <p className="label">Carbon Structure</p>
              {data.carbonImage && <img src={data.carbonImage} alt="Carbon Structure" className="generated-image" />}
            </div>
            <div className="box">
              <p className="label">Map</p>
              {data.mapEmbed && <div dangerouslySetInnerHTML={{ __html: data.mapEmbed }} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
