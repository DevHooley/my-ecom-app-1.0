import cn from '../../utils/cn';
import React from 'react';

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return <div {...props} className={cn('', props.className)} />;
}
