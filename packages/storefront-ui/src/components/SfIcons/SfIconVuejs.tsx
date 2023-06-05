import { component$ } from '@builder.io/qwik';
import { SfIconSize } from '../../shared';
import { SfIconBase, SfIconBaseProps } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconVuejs = component$<SfIconBaseProps>(
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
        data-testid="vuejs"
      >
        <path d="M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3h-4.474ZM3.736 3.871h2.641L12 13.604l5.618-9.733h2.642L12 18.024 3.735 3.871Z" />
      </SfIconBase>
    );
  }
);
