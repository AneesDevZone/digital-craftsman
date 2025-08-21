# Create necessary directories first
mkdir -p src/data
mkdir -p src/types
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/app/about
mkdir -p src/app/projects
mkdir -p src/app/projects/\[slug\]
mkdir -p src/app/services
mkdir -p src/app/contact
mkdir -p src/app/api/contact
mkdir -p src/styles

# Data files
echo "// Project data will go here" > src/data/projects.ts
echo "// Skills data will go here" > src/data/skills.ts
echo "// Experience data will go here" > src/data/experience.ts
echo "// Services data will go here" > src/data/services.ts
echo "// Testimonials data will go here" > src/data/testimonials.ts

# Type files
echo "// Project types" > src/types/project.ts
echo "// Skill types" > src/types/skill.ts
echo "// Export all types" > src/types/index.ts

# Utility files
echo "// Utility functions" > src/lib/utils.ts
echo "// App constants" > src/lib/constants.ts
echo "// Form validations" > src/lib/validations.ts
echo "// Animation configs" > src/lib/animations.ts

# Hook files
echo "// Scroll spy hook" > src/hooks/useScrollSpy.ts
echo "// Intersection observer hook" > src/hooks/useIntersectionObserver.ts
echo "// Local storage hook" > src/hooks/useLocalStorage.ts

# Page files
echo "// About page" > src/app/about/page.tsx
echo "// Projects page" > src/app/projects/page.tsx
echo "// Project detail page" > src/app/projects/\[slug\]/page.tsx
echo "// Services page" > src/app/services/page.tsx
echo "// Contact page" > src/app/contact/page.tsx
echo "// Contact API route" > src/app/api/contact/route.ts
echo "// Loading component" > src/app/loading.tsx
echo "// 404 page" > src/app/not-found.tsx

# Style and config files
echo "/* Custom component styles */" > src/styles/components.css
echo "// Prettier config" > prettier.config.js
touch .env.local
touch .env.example

echo "Portfolio setup completed successfully!"