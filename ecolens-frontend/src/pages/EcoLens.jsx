import React, { useState } from "react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Progress } from "../components/progress";

export default function EcoLens() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!image) return;
    setUploading(true);
    setUploadProgress(40);
    setTimeout(() => setUploadProgress(100), 1500);
  };

  const handleCancel = () => {
    setImage(null);
    setUploading(false);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">EcoLens Scanner</h1>

      <Card className="bg-gray-900 text-green-300 p-4">
        <CardContent className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-white"
          />
          <div className="flex space-x-4">
            <Button onClick={handleUpload} disabled={!image || uploading}>
              Upload
            </Button>
            <Button variant="destructive" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
          {uploading && <Progress value={uploadProgress} />}
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-green-300">
        <CardContent className="p-4 grid gap-4">
          <div>
            <h2 className="text-xl font-semibold">Chemical Name</h2>
            <p className="text-green-100">[Name Placeholder]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Chemical Details</h2>
            <p className="text-green-100">[Details Placeholder]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Health Impact</h2>
            <p className="text-green-100">[Good/Bad - Health Issues Placeholder]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Expiration Date</h2>
            <p className="text-green-100">[Date Placeholder]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Spread Map</h2>
            <div className="bg-green-100 h-40 flex items-center justify-center text-black">
              [Map Placeholder]
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Chemical Structure</h2>
            <p className="text-green-100">[Structure Text Placeholder]</p>
            <div className="bg-green-100 h-40 mt-2 flex items-center justify-center text-black">
              [Structure Image Placeholder]
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
