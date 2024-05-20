import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksImage extends Schema.Component {
  collectionName: 'components_blocks_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media;
    imageText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.image': BlocksImage;
    }
  }
}
