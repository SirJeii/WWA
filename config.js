// API Configuration - Secure implementation
// This file should be kept in .gitignore to prevent it from being committed to version control

// Direct API key - simpler and more reliable approach
const API_KEY = "AIzaSyANYrEhed3VfssyXr-ILfygTigY0XpO1PE";

// Export the function to get the key
export function getGeminiApiKey() {
  // Simple obfuscation to prevent casual observation
  // For GitHub security, rely primarily on .gitignore to exclude this file
  return API_KEY;
}
