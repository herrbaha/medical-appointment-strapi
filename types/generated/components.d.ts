import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockDepartment extends Schema.Component {
  collectionName: 'components_block_departments';
  info: {
    displayName: 'Department';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.department': BlockDepartment;
    }
  }
}
