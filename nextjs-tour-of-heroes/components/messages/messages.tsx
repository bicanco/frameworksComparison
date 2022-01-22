import { FunctionComponent } from 'react';

import { useAppDispatch } from '@hooks';
import { MessageServiceActions as MSA, useMessageService } from '@store/message-service';

import styles from './Messages.module.scss';

const Messages: FunctionComponent = () => {
  const messageService = useMessageService();
  const dispatch = useAppDispatch();

  return (<>
    { messageService.messages.length !== 0 &&
      <div>

        <h2 className={styles.h2}>Messages</h2>
        <button
          className={styles.clear}
          onClick={() => dispatch(MSA.clear())}
        >
          Clear messages
        </button>
        { messageService.messages.map((message: string, index: number) => (
          <div key={index}>
            {message}
          </div>
        ))}
      </div>
    }
  </>);
};

export default Messages
