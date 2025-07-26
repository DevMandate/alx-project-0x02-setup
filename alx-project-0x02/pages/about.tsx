import React from 'react';
import { Button } from '../components/common/Button';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm" label="Small Button" />
        <Button size="medium" shape="rounded-md" label="Medium Button" />
        <Button size="large" shape="rounded-full" label="Large Button" />
      </div>
    </div>
  );
};

export default About;
