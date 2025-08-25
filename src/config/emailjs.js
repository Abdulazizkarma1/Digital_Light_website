// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',        // e.g., 'service_abc123'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // e.g., 'template_xyz789'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // e.g., 'user_def456'
    TO_EMAIL: 'alhassanabdulaziz96@gmail.com'
};

// Template for the email
export const EMAIL_TEMPLATE = {
    subject: 'New Profile Audit Request',
    message: 'New profile audit request from: {{user_email}}'
};
