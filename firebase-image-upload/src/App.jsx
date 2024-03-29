import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase/firebase";

export default function App() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    if (e.target.files[0]) setFile(e.target.files[0]);
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return; // Add a check to ensure there's a file

    const path = `/images/${file.name}`;
    const storageRef = ref(storage, path);

    try {
      setLoading(true);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setURL(downloadURL);
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>{loading ? "Uploading..." : "Upload to Firebase"}</button>
      </form>
      {url && <div>Image URL: <a href={url}>{url}</a> </div>}
    </div>
  );
}

