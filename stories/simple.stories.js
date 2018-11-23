import React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../.storybook/utils';

import ComponentTree from '../src/components/ComponentTree';

import { text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import usageMd from './simple.md';
import ReadMe from '../README.md';

// let child3 = { id: '333', name: '333', parent: null };
// let child2 = {
//   id: '222',
//   name: '222',
//   children: [child3],
//   parent: null
// };
// let child4 = { id: '444', name: '444', parent: null };
// let treeJSON = {
//   id: '111',
//   name: '111',
//   children: [child2, child4],
//   parent: null
// };
// child2.parent = treeJSON;
// child3.parent = child2;
// child4.parent = treeJSON;

const treeJSON = {};

const selectedId = text('选中的 id 属性', '444', 'GROUP_ID1');

storiesOf('welcome', module)
  .addParameters(wInfo(usageMd))
  .addWithJSX(
    'ComponentTree',
    withReadme(ReadMe, () => (
      <ComponentTree treeJSON={treeJSON} selectedId={selectedId} />
    ))
  );
