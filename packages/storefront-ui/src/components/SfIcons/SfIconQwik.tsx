import { component$ } from '@builder.io/qwik';
import { SfIconSize } from '../../shared';
import { SfIconBase, SfIconBaseProps } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconQwik = component$<SfIconBaseProps>(
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
        data-testid="add"
      >
        <path
          fill="currentColor"
          d="m77.734 15.32l-8.406.239l-25.094.066a13.46 13.46 0 0 0-11.511 6.633L17.477 52.539l.134-.168c-2.853 4.342-3.093 10.235-.404 14.734l15.918 26.422c2.434 4.051 6.258 6.657 11.598 6.465c11.304-.402 16.273-.402 16.273-.402l34.668 12.957l-.898-.893l.703.686c.605.586 1.59-.117 1.187-.84L87.73 93.937l16.555-29.976c2.508-5.176 3.406-9.703.93-14.254l-3.524-6.484l-1.828-3.328l-.71-1.297l-.067.074L89.5 22.043a13.397 13.397 0 0 0-11.766-6.723zm17.93 97.227l.008.012v-.004l-.008-.008zM44.762 18.594l35.793 39.36l-6.407 6.491l3.797 30.58L40.93 58.418l9.152-8.82l-5.383-30.84L19.686 49.79l25.076-31.197zm33.265 76.574v.084l-.03.006v-.049l.03-.041z"
        />
      </SfIconBase>
    );
  }
);
