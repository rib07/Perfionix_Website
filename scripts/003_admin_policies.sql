-- Add admin policies for authenticated users
-- These allow admin users to manage all content

-- Blog posts admin policies
CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Contact submissions admin policies  
CREATE POLICY "Authenticated users can view contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update contact submissions" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Newsletter subscribers admin policies
CREATE POLICY "Authenticated users can view subscribers" ON newsletter_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage subscribers" ON newsletter_subscribers
  FOR ALL USING (auth.role() = 'authenticated');

-- Job applications admin policies
CREATE POLICY "Authenticated users can view applications" ON job_applications
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update applications" ON job_applications
  FOR UPDATE USING (auth.role() = 'authenticated');
