import { buttonStyles } from '@gear-js/ui';
import { Icon } from 'components/ui/icon';
import clsx from 'clsx';

export const GetGasBalance = () => {
  return (
    <div className="">
      <button className={clsx('btn group !p-2.5', buttonStyles.lightGreen)}>
        <Icon name="test-balance" width={20} height={20} />
        <Icon
          name="plus"
          width={12}
          height={12}
          className="absolute bottom-2 right-1.5 bg-[#223428] group-hover:bg-[#285b3a] rounded-full transition-colors"
        />
      </button>
    </div>
  );
};
