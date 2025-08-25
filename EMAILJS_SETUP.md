# EmailJS Setup Guide

## What I've Implemented

I've updated your Contact component to send emails to `alhassanabdulaziz96@gmail.com` when users submit their email address. The component now includes:

- ✅ Email form submission handling
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form validation
- ✅ Disabled states during submission

## Setup Steps Required

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (`alhassanabdulaziz96@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Profile Audit Request
**Content:**
```
Hello,

You have received a new profile audit request from: {{user_email}}

User's email: {{user_email}}

This is an automated message from your website contact form.

Best regards,
Your Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

### 5. Update Your Contact Component
Replace the placeholder values in `src/components/Contact.js`:

```javascript
const result = await emailjs.send(
  'service_abc123',        // Your actual Service ID
  'template_xyz789',       // Your actual Template ID  
  templateParams,
  'user_def456'            // Your actual Public Key
);
```

## How It Works

1. User enters their email in the form
2. Form submits to EmailJS service
3. EmailJS sends an email to `alhassanabdulaziz96@gmail.com`
4. You receive the email with the user's email address
5. User sees a success message

## Testing

1. Start your React app: `npm start`
2. Go to the Contact section
3. Enter a test email and submit
4. Check your Gmail inbox for the test email

## Troubleshooting

- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID  
- **"Invalid API key"**: Check your Public Key
- **Emails not sending**: Verify your Gmail connection in EmailJS

## Security Note

Your Public Key is safe to expose in frontend code, but keep your Private Key (if any) secret.

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Gmail integration

This should be sufficient for most small business websites.
