export default function VerificationEmailTemplate(user) {
   return `<!DOCTYPE html>
   <html>
      <head>
         <meta charset="UTF-8" />
         <title>Verification Email</title>
         <style>
            body {
               background-color: #ffffff;
               font-family: Arial, sans-serif;
               font-size: 16px;
               line-height: 1.4;
               color: #333333;
               margin: 0;
               padding: 0;
            }
   
            .container {
               max-width: 600px;
               margin: 0 auto;
               padding: 20px;
               text-align: center;
            }
   
            .logo {
               max-width: 200px;
               margin-bottom: 20px;
               text-decoration: none;
               font-size: 24px;
               color: black;
            }
   
            .message {
               font-size: 18px;
               font-weight: bold;
               margin-bottom: 20px;
            }
   
            .body {
               font-size: 16px;
               margin-bottom: 20px;
            }
   
            .cta {
               display: inline-block;
               padding: 10px 20px;
               background-color: #ffd60a;
               color: #000000;
               text-decoration: none;
               border-radius: 5px;
               font-size: 16px;
               font-weight: bold;
               margin-top: 20px;
            }
   
            .support {
               font-size: 14px;
               color: #999999;
               margin-top: 20px;
            }
   
            .highlight {
               font-weight: bold;
            }
            .otp {
               font-size: 20px;
               font-weight: bold;
               letter-spacing: 2px;
            }
         </style>
      </head>
   
      <body>
         <div class="container">
            <a class="logo" href="https://chat.stockimagesearch.online"
               >Welcome to Chatzz</a
            >
            <div class="message">Verify Your Email</div>
            <div class="body">
               <p>Dear ${user?.fullname},</p>
               <p>
                  We received a request to create an account for Chatzz. To
                  complete your registration, please use the OTP below:
               </p>
               <p>Your OTP:</p>
               <div class="otp">${user.otp}</div>
               <p>
                  Username: ${user?.username} <br />
                  Email: ${user?.email}
               </p>
               <p>
                  This OTP is valid for 30 minutes. If you did not request this
                  account creation, please ignore this email. Your account security
                  is important to us, and we recommend keeping your password
                  confidential and regularly updating it for added security.
               </p>
            </div>
            <div class="support">
               If you have any questions or need assistance, please feel free to
               reach out to us at
               <a href="mailto:chat@shubhamgoyal.dev">chat@shubhamgoyal.dev</a>. We
               are here to help!
            </div>
         </div>
      </body>
   </html>   
    `;
}
