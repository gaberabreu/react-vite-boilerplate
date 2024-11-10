/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const OrdersLazyImport = createFileRoute('/orders')()
const IntegrationsLazyImport = createFileRoute('/integrations')()
const IndexLazyImport = createFileRoute('/')()
const ReportsIndexLazyImport = createFileRoute('/reports/')()
const ReportsTrafficLazyImport = createFileRoute('/reports/traffic')()
const ReportsSalesLazyImport = createFileRoute('/reports/sales')()

// Create/Update Routes

const OrdersLazyRoute = OrdersLazyImport.update({
  id: '/orders',
  path: '/orders',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/orders.lazy').then((d) => d.Route))

const IntegrationsLazyRoute = IntegrationsLazyImport.update({
  id: '/integrations',
  path: '/integrations',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/integrations.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ReportsIndexLazyRoute = ReportsIndexLazyImport.update({
  id: '/reports/',
  path: '/reports/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/reports/index.lazy').then((d) => d.Route))

const ReportsTrafficLazyRoute = ReportsTrafficLazyImport.update({
  id: '/reports/traffic',
  path: '/reports/traffic',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/reports/traffic.lazy').then((d) => d.Route),
)

const ReportsSalesLazyRoute = ReportsSalesLazyImport.update({
  id: '/reports/sales',
  path: '/reports/sales',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/reports/sales.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/integrations': {
      id: '/integrations'
      path: '/integrations'
      fullPath: '/integrations'
      preLoaderRoute: typeof IntegrationsLazyImport
      parentRoute: typeof rootRoute
    }
    '/orders': {
      id: '/orders'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersLazyImport
      parentRoute: typeof rootRoute
    }
    '/reports/sales': {
      id: '/reports/sales'
      path: '/reports/sales'
      fullPath: '/reports/sales'
      preLoaderRoute: typeof ReportsSalesLazyImport
      parentRoute: typeof rootRoute
    }
    '/reports/traffic': {
      id: '/reports/traffic'
      path: '/reports/traffic'
      fullPath: '/reports/traffic'
      preLoaderRoute: typeof ReportsTrafficLazyImport
      parentRoute: typeof rootRoute
    }
    '/reports/': {
      id: '/reports/'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof ReportsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/integrations': typeof IntegrationsLazyRoute
  '/orders': typeof OrdersLazyRoute
  '/reports/sales': typeof ReportsSalesLazyRoute
  '/reports/traffic': typeof ReportsTrafficLazyRoute
  '/reports': typeof ReportsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/integrations': typeof IntegrationsLazyRoute
  '/orders': typeof OrdersLazyRoute
  '/reports/sales': typeof ReportsSalesLazyRoute
  '/reports/traffic': typeof ReportsTrafficLazyRoute
  '/reports': typeof ReportsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/integrations': typeof IntegrationsLazyRoute
  '/orders': typeof OrdersLazyRoute
  '/reports/sales': typeof ReportsSalesLazyRoute
  '/reports/traffic': typeof ReportsTrafficLazyRoute
  '/reports/': typeof ReportsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/integrations'
    | '/orders'
    | '/reports/sales'
    | '/reports/traffic'
    | '/reports'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/integrations'
    | '/orders'
    | '/reports/sales'
    | '/reports/traffic'
    | '/reports'
  id:
    | '__root__'
    | '/'
    | '/integrations'
    | '/orders'
    | '/reports/sales'
    | '/reports/traffic'
    | '/reports/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  IntegrationsLazyRoute: typeof IntegrationsLazyRoute
  OrdersLazyRoute: typeof OrdersLazyRoute
  ReportsSalesLazyRoute: typeof ReportsSalesLazyRoute
  ReportsTrafficLazyRoute: typeof ReportsTrafficLazyRoute
  ReportsIndexLazyRoute: typeof ReportsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  IntegrationsLazyRoute: IntegrationsLazyRoute,
  OrdersLazyRoute: OrdersLazyRoute,
  ReportsSalesLazyRoute: ReportsSalesLazyRoute,
  ReportsTrafficLazyRoute: ReportsTrafficLazyRoute,
  ReportsIndexLazyRoute: ReportsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/integrations",
        "/orders",
        "/reports/sales",
        "/reports/traffic",
        "/reports/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/integrations": {
      "filePath": "integrations.lazy.tsx"
    },
    "/orders": {
      "filePath": "orders.lazy.tsx"
    },
    "/reports/sales": {
      "filePath": "reports/sales.lazy.tsx"
    },
    "/reports/traffic": {
      "filePath": "reports/traffic.lazy.tsx"
    },
    "/reports/": {
      "filePath": "reports/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */