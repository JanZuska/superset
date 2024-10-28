import { SEPARATOR } from 'src/explore/components/controls/DateFilterControl/utils';
import { DatePicker, Space } from 'antd';
import { FrameComponentProps } from 'src/explore/components/controls/DateFilterControl/types';
import moment, { Moment } from 'moment';
import { CUSTOM_CALENDAR_RANGE_OPTIONS } from 'src/explore/components/controls/DateFilterControl/utils';

moment.locale('en', {
  week: {
    dow: 1,
  },
});

export function CustomCalendarFrame(props: FrameComponentProps) {
  const { RangePicker } = DatePicker;
  const spaceStyle: React.CSSProperties = { width: '100%' };

  function onChange(dates: [Moment, Moment], dateStrings: [string, string]) {
    props.onChange(`${dateStrings[0]}${SEPARATOR}${dateStrings[1]}`);
  }

  const initialRange = (
    props.value
      ? props.value
          .split(SEPARATOR)
          .map(date => moment(date))
          .filter(date => date.isValid())
      : [moment().startOf('day'), moment().endOf('day')]
  ) as [Moment, Moment];

  return (
    <Space direction="vertical" size={12} style={spaceStyle}>
      <RangePicker
        ranges={CUSTOM_CALENDAR_RANGE_OPTIONS}
        onChange={onChange}
        value={
          initialRange && initialRange.length === 2 ? initialRange : undefined
        }
      />
    </Space>
  );
}
