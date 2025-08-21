import { 
  validateEmail, 
  validatePassword, 
  sanitizeInput 
} from '../../utils/validation.js';

describe('Basic Validation Utils', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      const result = validateEmail('test@example.com');
      expect(result.isValid).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      const result = validateEmail('invalid-email');
      expect(result.isValid).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('should validate strong passwords', () => {
      const result = validatePassword('StrongPass123!');
      expect(result.isValid).toBe(true);
    });

    it('should reject weak passwords', () => {
      const result = validatePassword('weak');
      expect(result.isValid).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    it('should remove HTML tags', () => {
      const result = sanitizeInput('<div>텍스트</div>');
      expect(result).toBe('텍스트');
    });

    it('should handle normal text', () => {
      const result = sanitizeInput('정상적인 텍스트입니다.');
      expect(result).toBe('정상적인 텍스트입니다.');
    });
  });
});