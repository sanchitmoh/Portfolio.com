import emailjs from '@emailjs/browser'

// Define consistent result types
interface EmailResult {
  success: boolean
  error: any
  response?: any
  details?: any
}

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
}

// Client-side email service using EmailJS
export const sendEmailJS = async (formData: {
  name: string
  email: string
  message: string
}): Promise<EmailResult> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'sanchitmohite15@gmail.com', // Your email
      reply_to: formData.email
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams
    )

    return { success: true, response, error: null }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error, response: null }
  }
}

// Server-side email service using API route
export const sendServerEmail = async (formData: {
  name: string
  email: string
  message: string
}): Promise<EmailResult> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Server email error:', data)
      return { 
        success: false, 
        error: data.error || 'Failed to send email',
        details: data.details,
        response: null
      }
    }

    return { success: true, response: data, error: null }
  } catch (error) {
    console.error('Server email network error:', error)
    return { 
      success: false, 
      error: 'Network error - please check your connection',
      response: null
    }
  }
}

// Hybrid approach - try both methods
export const sendEmailHybrid = async (formData: {
  name: string
  email: string
  message: string
}) => {
  const results = {
    emailjs: { success: false, error: null as any },
    server: { success: false, error: null as any }
  }

  // Try EmailJS first (faster, client-side)
  try {
    const emailjsResult = await sendEmailJS(formData)
    results.emailjs = {
      success: emailjsResult.success,
      error: emailjsResult.error
    }
  } catch (error) {
    results.emailjs = {
      success: false,
      error: error
    }
  }

  // Try server-side as backup/additional notification
  try {
    const serverResult = await sendServerEmail(formData)
    results.server = {
      success: serverResult.success,
      error: serverResult.error
    }
  } catch (error) {
    results.server = {
      success: false,
      error: error
    }
  }

  // Return success if at least one method worked
  const success = results.emailjs.success || results.server.success
  
  return {
    success,
    results,
    message: success 
      ? 'Message sent successfully!' 
      : 'Failed to send message. Please try again.'
  }
}