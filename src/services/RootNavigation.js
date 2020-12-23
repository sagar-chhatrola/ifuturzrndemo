import * as React from 'react';
import { CommonActions,DrawerActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function reset(screen) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
              { name: screen },
              
            ],
          })
    );
  }

  export function toggleDrawer() {
    //navigationRef.current?.openDrawer();
    navigationRef.current?.dispatch(DrawerActions.toggleDrawer());

  }
