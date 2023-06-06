import { component$ } from '@builder.io/qwik';
import { SfIconBase, SfIconBaseProps, SfIconSize } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconCompareArrows = component$<SfIconBaseProps>(
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
        data-testid="compare-arrows"
      >
        <path d="m15.3 13.3-3.6-3.6a.871.871 0 0 1-.212-.325A1.099 1.099 0 0 1 11.425 9c0-.133.021-.258.063-.375A.871.871 0 0 1 11.7 8.3l3.6-3.6c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.437.3.712 0 .275-.1.513-.3.713L14.825 8H21a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 21 10h-6.175l1.875 1.875c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.429.308-.687.325-.259.017-.496-.083-.713-.3Zm-8 5.975c.2.2.433.304.7.312.267.009.5-.087.7-.287l3.6-3.6a.88.88 0 0 0 .213-.325c.041-.117.062-.242.062-.375s-.02-.258-.062-.375a.883.883 0 0 0-.213-.325l-3.6-3.6a.96.96 0 0 0-.7-.3c-.267 0-.5.1-.7.3-.2.2-.3.437-.3.712 0 .275.1.513.3.713L9.175 14H3a.967.967 0 0 0-.712.287A.968.968 0 0 0 2 15c0 .283.096.52.288.712A.965.965 0 0 0 3 16h6.175L7.3 17.875c-.2.2-.3.433-.3.7 0 .267.1.5.3.7Z" />
      </SfIconBase>
    );
  }
);
