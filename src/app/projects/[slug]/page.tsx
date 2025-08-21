import React from 'react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Project: {params.slug}</h1>
      <p className="text-lg text-gray-600">
        This is the detail page for project: {params.slug}
      </p>
    </div>
  );
}
