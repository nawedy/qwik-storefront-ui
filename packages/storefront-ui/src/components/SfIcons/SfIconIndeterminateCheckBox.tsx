import { component$ } from '@builder.io/qwik';
import { SfIconSize } from '../../shared';
import { SfIconBase, SfIconBaseProps } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconIndeterminateCheckBox = component$<SfIconBaseProps>(
  ({
    size = SfIconSize.base,
    viewBox = '0 0 24 24',
    ...attributes
  }: SfIconProps) => {
    return (
      <SfIconBase
        {...attributes}
        size={size}
        viewBox={viewBox}
        data-testid="indeterminate-check-box"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm14 7a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Z"
        />
      </SfIconBase>
    );
  }
);
