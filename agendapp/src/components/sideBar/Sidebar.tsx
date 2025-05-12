'use client'
import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';
import { ROUTES } from '@/routes';

const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Sistema' },
  { segment: 'calendar', title: 'Calendario', icon: "" },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: '/register',
    title: 'Clientes',
    icon: "",
    children: [
      { segment: 'register-client', title: 'Cadastrar Cliente', icon: "" },
      { segment: 'register-client-details', title: 'Cadastro Detalhes', icon: "" },
    ],
  },
  { segment: 'integrations', title: 'Integrações', icon: "" },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },

});

function useSideRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);
  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    }),
    [pathname],
  );
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function SideBarClinic(props: any) {
  const { window } = props;

  const router = useSideRouter('/');


  const routePath = `/${router.pathname.replace(/^\/+/, '')}`;

  const RouteComponent = ROUTES[routePath] || (() => <div>Página não encontrada</div>);

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="" alt="Sistema de Clinica" />,
        title: '',
        homeUrl: '',
      }}
      router={router}
      theme={demoTheme}

    >
      <DashboardLayout>
        <PageContainer>
          <RouteComponent />
          {/* <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid> */}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}