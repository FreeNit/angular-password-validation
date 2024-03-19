import { PasswordStrength } from '../helpers/Constants';
import { REG_EXP } from '../helpers/RegExp';

export default class CustomFormValidation {
  checkPasswordStrength(
    // hasCharacter: boolean,
    // hasNumbers: boolean,
    // hasSpecials: boolean,
    passwordValue: string
  ) {
    const validationPassword: string = passwordValue.trim();

    const { characters, numbers, symbols } = REG_EXP;

    const hasCharacter = characters.test(validationPassword);
    const hasNumbers = numbers.test(validationPassword);
    const hasSpecials = symbols.test(validationPassword);

    let passwordStrength;
    // -> EMPTY password
    if (!validationPassword) {
      passwordStrength = PasswordStrength.Empty;
      return passwordStrength;
    }
    // -> NOT APPLICABLE password strength
    if (validationPassword.length < 8) {
      return PasswordStrength.NotApplicable;
    }
    // -> EASY password strength
    if (hasCharacter || hasNumbers || hasSpecials) {
      passwordStrength = PasswordStrength.Easy;
    }

    // -> MEDIUM password strength
    const checks: Boolean[] = [hasNumbers, hasCharacter, hasSpecials];
    const checksLength = checks.length;
    for (let i = 0; i < checksLength; i++) {
      for (let j = i + 1; j < checksLength; j++) {
        if (checks[i] && checks[j]) passwordStrength = PasswordStrength.Medium;
      }
    }

    // -> STRONG password strength
    if (
      passwordValue.length >= 8 &&
      hasCharacter &&
      hasNumbers &&
      hasSpecials
    ) {
      passwordStrength = PasswordStrength.Strong;
    }

    return passwordStrength;
  }
}
