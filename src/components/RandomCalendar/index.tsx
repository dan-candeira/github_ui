import React from 'react';

import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

type HeatMapValue = { date: Date; count: number };

const RamdomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatMapValue) => {
            let campledCount = 0;

            if (item !== null) {
              campledCount = Math.max(item.count, 0);
              campledCount = Math.min(item.count, 4);
            }
            return `scale-${campledCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Ramdom Calendar (do not represent actual data)</span>
    </Container>
  );
};

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatMapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;
    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }
  return values;
};

export default RamdomCalendar;
