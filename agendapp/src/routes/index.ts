import RegisterClient from '@/app/register/register-client/page';
import RegisterClientDetails from '@/app/register/register-client-details/page';
import Calendario from '@/app/calendar/page';


export const ROUTES: Record<string, React.ElementType> = {
  '/register-client': RegisterClient,
  '/register-client-details': RegisterClientDetails,
  '/calendar': Calendario,

};


