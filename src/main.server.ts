import { enableProdMode } from '@angular/core';
import { platformServer, renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

enableProdMode();

// Example: This file would be used to bootstrap your Angular server module
platformServer()
  .bootstrapModule(AppServerModule)
  .catch((err) => console.error(err));
export { AppServerModule };
