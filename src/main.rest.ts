import 'reflect-metadata';
import { Container } from 'inversify';
import { RestApplication } from './rest/index.js';
import { Component } from './shared/types/index.js';
import { createRestApplicationContainer } from './rest/rest.container.js';
import { createAuthorContainer } from './shared/models/author/index.js';
import { createOfferContainer } from './shared/models/offer/index.js';
import { createCommentContainer } from './shared/models/comment/index.js';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createAuthorContainer(),
    createOfferContainer(),
    createCommentContainer(),
  );
  const application = appContainer.get<RestApplication>(
    Component.RestApplication
  );
  await application.init();
}

bootstrap();
