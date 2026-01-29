import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter with better error handling
    let transporter
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

      // Verify transporter configuration
      await transporter.verify()
    } catch (transporterError) {
      console.error('Transporter error:', transporterError)
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Email to you (notification)
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `🚨 New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📧 New Portfolio Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">👤 From:</h3>
              <p style="font-size: 16px; color: #666; margin: 0;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">📧 Email:</h3>
              <p style="font-size: 16px; color: #666; margin: 0;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">💬 Message:</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="font-size: 16px; color: #333; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: Your Portfolio Contact" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Reply to ${name}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }

    // Auto-reply to sender
    const autoReplyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}! 🙏</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Hi ${name},
            </p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for reaching out through my portfolio! I've received your message and really appreciate you taking the time to contact me.
            </p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="font-size: 14px; color: #666; margin: 0; font-style: italic;">
                Your message: "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"
              </p>
            </div>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              I'll get back to you as soon as possible, usually within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on social media.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://github.com/sanchitmohite" 
                 style="background: #333; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 10px;">
                GitHub
              </a>
              <a href="https://linkedin.com/in/sanchit-mohite" 
                 style="background: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 10px;">
                LinkedIn
              </a>
            </div>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong>Sanchit Mohite</strong><br>
              <span style="color: #667eea;">Software Developer</span>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated response. I'll reply personally soon!</p>
          </div>
        </div>
      `
    }

    // Send emails with individual error handling
    const emailResults = []
    
    try {
      await transporter.sendMail(notificationEmail)
      emailResults.push('Notification email sent')
    } catch (notificationError) {
      console.error('Notification email error:', notificationError)
      emailResults.push('Notification email failed')
    }

    try {
      await transporter.sendMail(autoReplyEmail)
      emailResults.push('Auto-reply email sent')
    } catch (autoReplyError) {
      console.error('Auto-reply email error:', autoReplyError)
      emailResults.push('Auto-reply email failed')
    }

    // Optional: Send SMS notification via email gateway
    if (process.env.SMS_EMAIL) {
      try {
        const smsEmail = {
          from: process.env.EMAIL_USER,
          to: process.env.SMS_EMAIL,
          subject: '',
          text: `Portfolio: ${name} (${email}) sent a message: ${message.substring(0, 100)}...`
        }
        
        await transporter.sendMail(smsEmail)
        emailResults.push('SMS notification sent')
      } catch (smsError) {
        console.error('SMS email error:', smsError)
        emailResults.push('SMS notification failed')
      }
    }

    return NextResponse.json(
      { 
        message: 'Email processing completed!',
        results: emailResults
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}