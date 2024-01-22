import { Slider } from '@/components/ui/slider';
import { Controller, useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { debounce } from '../_utils/util';

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  const { handleSubmit, control } = useForm();
  const submit = debounce(
    handleSubmit((data) => {
      console.log(JSON.stringify(data));
    }),
    1000
  );

  return (
    <Controller
      name='range'
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <Slider
            max={100}
            step={20}
            className={cn('w-full', className)}
            {...props}
            onValueChange={(value) => {
              onChange(value);
              submit();
            }}
          />
        );
      }}
    />
  );
}
