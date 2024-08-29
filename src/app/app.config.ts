import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './service/token.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { conterReducerCol, reducerCollections, userReducerCol } from './store/reducerCollection';
import { counterReducer } from './store/counter/counter.reducer';
import { userDataReducer } from './store/userDetails/userDetails.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      // withInterceptors([tokenInterceptor])
    ),
    provideStore(
      // reducerCollections
      // {
      //   counts:counterReducer,
      //   user:userDataReducer
      // }
    ),
    provideState(
      conterReducerCol
  ),
  provideState(
    userReducerCol
)
]
};
