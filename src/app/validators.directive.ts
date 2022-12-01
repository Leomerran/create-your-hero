import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HERO_PROPERTY, TYPES, WEAPONS } from './hero';

/** Not allowed empty string for name **/
export function forbiddenNameValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isEmptyName = /^\s*$/.test(control.value);

  return isEmptyName
    ? { invalidValue: VALIDATION_FORM_ERRORS.EMPTY_NAME }
    : null;
}

/** A hero must have a weapon according to his type */
export const heroWeaponValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const weapon = control.get(HERO_PROPERTY.WEAPON)?.value;
  const type = control.get(HERO_PROPERTY.TYPE)?.value;

  if (weapon === null || type === null) {
    return null;
  }

  switch (type) {
    case TYPES.SOLDAT:
      return weapon !== WEAPONS.DAGUE && weapon !== WEAPONS.EPEE
        ? { invalidValue: VALIDATION_FORM_ERRORS.UNMATCHED_WEAPON_WITH_TYPE }
        : null;
    case TYPES.ARCHER:
      return weapon !== WEAPONS.ARBALETE && weapon !== WEAPONS.ARC
        ? { invalidValue: VALIDATION_FORM_ERRORS.UNMATCHED_WEAPON_WITH_TYPE }
        : null;
    case TYPES.MAGE:
      return weapon !== WEAPONS.DAGUE && weapon !== WEAPONS.SCEPTRE
        ? { invalidValue: VALIDATION_FORM_ERRORS.UNMATCHED_WEAPON_WITH_TYPE }
        : null;
    case TYPES.SOIGNEUR:
      return weapon !== WEAPONS.DOLIPRANE && weapon !== WEAPONS.SCEPTRE
        ? { invalidValue: VALIDATION_FORM_ERRORS.UNMATCHED_WEAPON_WITH_TYPE }
        : null;
    default:
      return null;
  }
};

export const VALIDATION_FORM_ERRORS = {
  EMPTY_NAME: 'Empty string not allowed',
  UNMATCHED_WEAPON_WITH_TYPE: 'Select a weapon allowed for your type',
};
