import CryptoJS from 'crypto-js';

const SMS_API_URL = import.meta.env.VITE_SMS_API_URL;
const ACCESS_KEY = import.meta.env.VITE_SMS_ACCESS_KEY;
const SECRET_KEY = import.meta.env.VITE_SMS_SECRET_KEY;
const SENDER_PHONE = import.meta.env.VITE_SMS_SENDER_PHONE;

export const sendVerificationSMS = async (phoneNumber, verificationCode) => {
  try {
    const timestamp = new Date().getTime().toString();
    
    // API 요청 시그니처 생성
    const signature = createSignature(timestamp);

    const body = {
      type: 'SMS',
      contentType: 'COMM',
      countryCode: '82',
      from: SENDER_PHONE,
      content: `[ECHO] 인증번호는 [${verificationCode}] 입니다.`,
      messages: [
        {
          to: phoneNumber
        }
      ]
    };

    const response = await fetch(SMS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-ncp-apigw-timestamp': timestamp,
        'x-ncp-iam-access-key': ACCESS_KEY,
        'x-ncp-apigw-signature-v2': signature
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('SMS 발송에 실패했습니다.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('SMS 발송 에러:', error);
    throw error;
  }
};

// API 요청 시그니처 생성 함수
const createSignature = (timestamp) => {
  const space = " ";
  const newLine = "\n";
  const method = "POST";
  const url = new URL(SMS_API_URL);
  const uri = url.pathname;

  const message = [
    method,
    space,
    uri,
    newLine,
    timestamp,
    newLine,
    ACCESS_KEY
  ].join('');

  const signature = CryptoJS.HmacSHA256(message, SECRET_KEY).toString(CryptoJS.enc.Base64);
  return signature;
}; 