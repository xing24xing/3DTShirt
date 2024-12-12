import React from 'react';
import { CustomButton } from '../components';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit, selectedAPI, setSelectedAPI }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI to change the color of the shirt..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="Generate Shirt (Full)"
              handleClick={(e) => handleSubmit(e, 'full')} // Pass 'full' as the API type
              customStyles="text-xs"
            />
            <CustomButton
              type="outline"
              title="Generate Shirt (Logo Only)"
              handleClick={(e) => handleSubmit(e, 'logo')} // Pass 'logo' as the API type
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
