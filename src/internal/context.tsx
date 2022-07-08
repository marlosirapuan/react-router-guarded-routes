import React, { createContext } from 'react'
import { Location } from 'react-router'
import { GuardedRouteConfig } from '../type'
export interface GuardContextValue {
  fallback?: React.ReactElement
  guards?: GuardedRouteConfig['guards']
  location: {
    to: Location | null
    from: Location | null
  }
}
export const GuardContext = createContext<GuardContextValue>({
  location: {
    to: null,
    from: null,
  },
})