import { FormControl } from '@angular/forms';

export function passValidator(control: FormControl): any {
  if (control && (control.value !== null || control.value !== undefined)) {
    const cnfpassValue = control.value;
    const passControl = control.root.get('password');
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== cnfpassValue || passValue === '') {
        return {
          match: true
        };
      }
    }
  }
  return null;
}
