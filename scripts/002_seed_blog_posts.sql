-- Seed some initial blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, read_time, is_featured, is_published) VALUES
(
  'The Future of Web Development: What to Expect in 2025',
  'future-web-development-2025',
  'Explore the emerging trends and technologies that will shape the web development landscape in the coming year, from AI-powered tools to edge computing.',
  '<p>The web development landscape is evolving rapidly, and 2025 promises to bring exciting changes that will reshape how we build and deploy applications.</p>

<h2>AI-Powered Development</h2>
<p>Artificial intelligence is no longer just a buzzword—it''s becoming an integral part of the development workflow. From code completion to automated testing, AI tools are helping developers write better code faster.</p>

<h2>Edge Computing</h2>
<p>Edge computing continues to gain momentum, allowing applications to run closer to users for improved performance and reduced latency. This shift is changing how we architect our applications.</p>

<h2>WebAssembly Maturity</h2>
<p>WebAssembly is reaching new levels of maturity, enabling high-performance applications that were previously impossible in the browser. Expect to see more complex applications running natively in web browsers.</p>

<h2>Conclusion</h2>
<p>The future of web development is bright, with new technologies and tools making it easier than ever to build fast, reliable, and user-friendly applications.</p>',
  'Sarah Chen',
  'Technology',
  '8 min read',
  true,
  true
),
(
  'Building Scalable React Applications: Best Practices',
  'scalable-react-applications',
  'Learn the architectural patterns and coding practices that help React applications scale effectively.',
  '<p>Building React applications that scale requires careful planning and adherence to best practices. Here''s what you need to know.</p>

<h2>Component Architecture</h2>
<p>A well-thought-out component architecture is the foundation of any scalable React application. Keep components small, focused, and reusable.</p>

<h2>State Management</h2>
<p>Choose the right state management solution for your needs. Not every application needs Redux—sometimes React''s built-in state management is sufficient.</p>

<h2>Performance Optimization</h2>
<p>Use React.memo, useMemo, and useCallback judiciously. Profile your application to identify actual bottlenecks rather than optimizing prematurely.</p>',
  'Michael Roberts',
  'Development',
  '6 min read',
  false,
  true
),
(
  'The Importance of Quality Assurance in Agile Development',
  'qa-agile-development',
  'Discover how to integrate QA seamlessly into your agile workflow for better software quality.',
  '<p>Quality assurance is not an afterthought—it should be integrated throughout your agile development process.</p>

<h2>Shift Left Testing</h2>
<p>Moving testing earlier in the development cycle helps catch bugs sooner when they''re cheaper and easier to fix.</p>

<h2>Automated Testing</h2>
<p>A robust suite of automated tests gives your team confidence to deploy frequently and catch regressions early.</p>

<h2>Continuous Integration</h2>
<p>Integrate QA into your CI/CD pipeline to ensure every change is tested before it reaches production.</p>',
  'Emily Zhang',
  'QA',
  '5 min read',
  false,
  true
);
