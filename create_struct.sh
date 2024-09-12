#!/bin/bash

# Create directories
mkdir -p app/components

# Create files in components directory
touch app/components/Header.tsx
touch app/components/Hero.tsx
touch app/components/About.tsx
touch app/components/Skills.tsx
touch app/components/Projects.tsx
touch app/components/Contact.tsx
touch app/components/Footer.tsx

# Create files in the app directory
touch app/page.tsx
touch app/layout.tsx

echo "Folder structure and files created successfully!"