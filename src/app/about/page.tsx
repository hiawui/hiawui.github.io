export default function About() {
  return (
    <div className="min-h-screen p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Hello! I'm Hiawui, a passionate developer and technology enthusiast.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-6">
            I love exploring new technologies and sharing my knowledge through writing and open source contributions.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Frontend Development (React, Vue, Angular)</li>
            <li>Backend Development (Node.js, Python, Java)</li>
            <li>Database Design and Management</li>
            <li>DevOps and Cloud Computing</li>
            <li>Machine Learning and AI</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <p className="mb-6">
            When I'm not coding, you can find me reading about the latest tech trends, 
            contributing to open source projects, or exploring new programming languages.
          </p>
        </div>
      </div>
    </div>
  )
} 