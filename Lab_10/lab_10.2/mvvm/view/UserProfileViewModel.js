import { ViewModel } from '../base/ViewModel.js';

export class UserProfileViewModel extends ViewModel {
  constructor() {
    super();
    this.defineProperty('firstName', '');
    this.defineProperty('lastName', '');
    this.defineProperty('email', '');
    this.defineProperty('age', '');
    this.defineProperty('errors', {});

    // Настройка вычисляемых свойств через наблюдателей
    this.$watch('firstName', () => this.validate());
    this.$watch('lastName', () => this.validate());
    this.$watch('email', () => this.validate());
    this.$watch('age', () => this.validate());
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim() || 'Anonymous';
  }

  validate() {
    const errors = {};
    if (!this.firstName || this.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }
    if (!this.lastName || this.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }
    if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = 'Please enter a valid email';
    }
    const ageNum = parseInt(this.age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 120) {
      errors.age = 'Age must be between 18 and 120';
    }

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }

  get isValid() {
    return Object.keys(this.errors).length === 0;
  }

  save() {
    if (this.validate()) {
      console.log('Saving profile:', this.$data());
      return { success: true };
    }
    return { success: false, errors: this.errors };
  }

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.age = '';
    this.errors = {};
  }
}