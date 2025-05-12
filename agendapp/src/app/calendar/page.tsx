'use client'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, setHours, setMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';

const locales = {
  'pt-BR': ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarStyles {
  background: string;
  text: string;
  unavailable: string;
  border: string;
  event: string;
  openHours: string;
  closedHours: string;
}

// Horários de funcionamento
const businessHours = {
  monday: [{ start: 8, end: 18 }],    // Segunda: 8h às 18h
  tuesday: [{ start: 8, end: 18 }],   // Terça: 8h às 18h
  wednesday: [{ start: 8, end: 18 }], // Quarta: 8h às 18h
  thursday: [{ start: 8, end: 18 }],  // Quinta: 8h às 18h
  friday: [{ start: 8, end: 18 }],    // Sexta: 8h às 18h
  saturday: [{ start: 9, end: 13 }],  // Sábado: 9h às 13h
  sunday: []                          // Domingo: fechado
};

export default function Calendario() {
  const [view, setView] = useState<'week' | 'day' | 'month'>('week');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const events = [
    {
      title: 'Evento Fictício 1',
      start: new Date(2025, 4, 13, 9, 0), // 13 de maio, 9:00
      end: new Date(2025, 4, 13, 10, 0), // 13 de maio, 10:00
    },
    {
      title: 'Evento Fictício 1',
      start: new Date(2025, 4, 12, 9, 0), // 13 de maio, 9:00
      end: new Date(2025, 4, 12, 10, 0), // 13 de maio, 10:00
    },
    {
      title: 'Evento Fictício 2',
      start: new Date(2025, 4, 13, 14, 0), // 13 de maio, 14:00
      end: new Date(2025, 4, 13, 15, 0), // 13 de maio, 15:00
    },
    {
      title: 'Evento Fictício 3',
      start: new Date(2025, 4, 14, 11, 0), // 14 de maio, 11:00
      end: new Date(2025, 4, 14, 12, 0), // 14 de maio, 12:00
    },
  ];

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const styles: { light: CalendarStyles; dark: CalendarStyles } = {
    light: {
      background: '#ffffff',
      text: '#000000',
      unavailable: '#f5f5f5',
      border: '#ddd',
      event: '#3174ad',
      openHours: '#000', // Azul claro para horário aberto
      closedHours: '#fff' // Vermelho claro para horário fechado
    },
    dark: {
      background: '#1e1e1e',
      text: '#ffffff',
      unavailable: '#000',
      border: '#444',
      event: '#3a6ea5',
      openHours: '#fff', // Azul escuro para horário aberto
      closedHours: '#000' // Vermelho escuro para horário fechado
    },
  };

  const currentStyle = isDarkMode ? styles.dark : styles.light;

  // Função para determinar se um horário está dentro do funcionamento
  const isDuringBusinessHours = (date: Date) => {
    const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][date.getDay()];
    const hours = businessHours[day as keyof typeof businessHours];
    const currentHour = date.getHours();

    return hours.some(({ start, end }) => currentHour >= start && currentHour < end);
  };

  // Estilizar células do calendário baseado nos horários de funcionamento
  const dayPropGetter = (date: Date) => {
    if (isDuringBusinessHours(date)) {
      return {
        style: {
          backgroundColor: currentStyle.openHours,
        },
      };
    } else {
      return {
        style: {
          backgroundColor: currentStyle.closedHours,
        },
      };
    }
  };

  return (
    <div style={{ height: '80vh', padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: '100%',
          color: currentStyle.text,
          backgroundColor: currentStyle.background,
        }}
        views={['month', 'week', 'day']}
        view={view}
        onView={setView}
        defaultView="week"
        culture="pt-BR"
        messages={{
          next: 'Próximo',
          previous: 'Anterior',
          today: 'Hoje',
          week: 'Semana',
          day: 'Dia',
        }}
        dayPropGetter={dayPropGetter}
        min={setHours(setMinutes(new Date(), 0), 8)}
        max={setHours(setMinutes(new Date(), 0), 18)}
      />
    </div>
  );
}