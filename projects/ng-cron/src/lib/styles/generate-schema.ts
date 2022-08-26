import { CronClassesSchema } from './classes-schema.type';

export const generateSchema = (schema: CronClassesSchema, cssClassPrefix?: string): CronClassesSchema => {
  const { tabs, formInline, formGroup, formControl, mx1, ml1, col2, col3, colMd1, colMd2, check } = schema;

  return {
    tabs: {
      root: generateClasses(tabs.root, cssClassPrefix),
      item: generateClasses(tabs.item, cssClassPrefix),
      link: generateClasses(tabs.link, cssClassPrefix),
      active: generateClasses(tabs.active, cssClassPrefix)
    },
    formInline: generateClasses(formInline, cssClassPrefix),
    formGroup: generateClasses(formGroup, cssClassPrefix),
    formControl: generateClasses(formControl, cssClassPrefix),

    mx1: generateClasses(mx1, cssClassPrefix),
    ml1: generateClasses(ml1, cssClassPrefix),
    col2: generateClasses(col2, cssClassPrefix),
    col3: generateClasses(col3, cssClassPrefix),
    colMd1: generateClasses(colMd1, cssClassPrefix),
    colMd2: generateClasses(colMd2, cssClassPrefix),

    check: {
      root: generateClasses(check.root, cssClassPrefix),
      field: generateClasses(check.field, cssClassPrefix),
      label: generateClasses(check.label, cssClassPrefix),
      row: generateClasses(check.row, cssClassPrefix)
    }
  }
};

const generateClasses = (classes: string, cssClassPrefix?: string) => {
  return classes
    .split(' ')
    .map(c => `${cssClassPrefix || ''}${c}`)
    .join(' ');
};
