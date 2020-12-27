import { PageRendererProps } from 'gatsby';
import { ReactNode } from 'react';

export interface LayoutTypes extends PageRendererProps {
  title: string;
  children: ReactNode;
}
