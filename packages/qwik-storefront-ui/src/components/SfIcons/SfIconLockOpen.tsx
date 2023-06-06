import { component$ } from '@builder.io/qwik';
import { SfIconBase, SfIconBaseProps, SfIconSize } from '../SfIconBase';
import { SfIconProps } from './types';

export const SfIconLockOpen = component$<SfIconBaseProps>(
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
        data-testid="lock-open"
      >
        <path d="M6 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 20V10c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 8h9V6c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 3a2.87 2.87 0 0 0-1.812.612A2.99 2.99 0 0 0 9.125 5.15a1.4 1.4 0 0 1-.387.612.885.885 0 0 1-.613.238c-.333 0-.6-.113-.8-.338a.81.81 0 0 1-.2-.762c.25-1.117.825-2.046 1.725-2.788C9.75 1.371 10.8 1 12 1c1.383 0 2.563.487 3.538 1.462C16.513 3.437 17 4.617 17 6v2h1c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v10a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 18 22H6Zm0-2h12V10H6v10Zm6-3a1.93 1.93 0 0 0 1.413-.587c.391-.392.587-.863.587-1.413s-.196-1.021-.587-1.413A1.928 1.928 0 0 0 12 13c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 10 15c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587Z" />
      </SfIconBase>
    );
  }
);
