import React, {useEffect} from 'react';
import { useFlashMessageContext}  from './hooks/useFlashMessage/index';
import FlashMessage from './sharedComponents/FlashMessage';

export default ({name}) => {
  const { showInfo, showError } = useFlashMessageContext();
  useEffect(() => {
    showInfo('Testing my flash Message');
    showError('Testing my flash Message');
  }, []);
  return (
    <div>
        <p>
          {name}
        </p>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
  );
}