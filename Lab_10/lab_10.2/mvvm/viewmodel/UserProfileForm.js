export class UserProfileForm {
  constructor(containerId, viewModel) {
    this.container = document.getElementById(containerId);
    this.viewModel = viewModel;
    this.render();
    this.attachEventListeners();
    this.subscribeToChanges();
  }

  render() {
    const vm = this.viewModel;
    this.container.innerHTML = `
      <div class="mvvm-form">
        <h1>User Profile (MVVM)</h1>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" data-field="firstName" value="${vm.firstName}" />
          <span class="error">${vm.errors.firstName || ''}</span>
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" data-field="lastName" value="${vm.lastName}" />
          <span class="error">${vm.errors.lastName || ''}</span>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" data-field="email" value="${vm.email}" />
          <span class="error">${vm.errors.email || ''}</span>
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="number" data-field="age" value="${vm.age}" />
          <span class="error">${vm.errors.age || ''}</span>
        </div>
        <div class="preview">
          <h3>Preview</h3>
          <p><strong>Full Name:</strong> ${vm.fullName}</p>
          <p><strong>Valid:</strong> ${vm.isValid ? 'Yes' : 'No'}</p>
        </div>
        <div class="actions">
          <button id="saveBtn" ${!vm.isValid ? 'disabled' : ''}>Save</button>
          <button id="resetBtn">Reset</button>
        </div>
        <div id="message"></div>
      </div>
    `;
  }

  attachEventListeners() {
    // Двустороннее связывание (View -> ViewModel)
    this.container.addEventListener('input', (e) => {
      const field = e.target.dataset.field;
      if (field) {
        this.viewModel[field] = e.target.value;
      }
    });

    this.container.querySelector('#saveBtn').addEventListener('click', () => {
      const result = this.viewModel.save();
      const msg = document.getElementById('message');
      if (result.success) {
        msg.textContent = 'Profile saved successfully!';
        msg.className = 'success';
      } else {
        msg.textContent = 'Please fix errors.';
        msg.className = 'error';
      }
    });

    this.container.querySelector('#resetBtn').addEventListener('click', () => {
      this.viewModel.reset();
    });
  }

  subscribeToChanges() {
    // Подписка на изменения (ViewModel -> View)
    ['firstName', 'lastName', 'email', 'age', 'errors'].forEach(field => {
      this.viewModel.$watch(field, () => this.render());
    });
  }
}